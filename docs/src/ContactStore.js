var API = 'http://addressbook-api.herokuapp.com/contacts';
var _contacts = {};
var _changeListeners = [];
var _initCalled = false;

const ContactStore = {

  init: function () {
    if (_initCalled)
      return

    _initCalled = true

    getJSON(API, function (err, res) {
      res.contacts.forEach(function (contact) {
        _contacts[contact.id] = contact
      })

      ContactStore.notifyChange()
    })
  },

  addContact: function (contact, cb) {
    postJSON(API, { contact: contact }, function (res) {
      _contacts[res.contact.id] = res.contact
      ContactStore.notifyChange()
      if (cb) cb(res.contact)
    })
  },

  removeContact: function (id, cb) {
    deleteJSON(API + '/' + id, cb)
    delete _contacts[id]
    ContactStore.notifyChange()
  },

  getContacts: function () {
    const array = []

    for (const id in _contacts)
      array.push(_contacts[id])

    return array
  },

  getContact: function (id) {
    return _contacts[id]
  },

  notifyChange: function () {
    _changeListeners.forEach(function (listener) {
      listener()
    })
  },

  addChangeListener: function (listener) {
    _changeListeners.push(listener)
  },

  removeChangeListener: function (listener) {
    _changeListeners = _changeListeners.filter(function (l) {
      return listener !== l
    })
  }

}

localStorage.token = localStorage.token || (Date.now()*Math.random())

function getJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    if (req.status === 404) {
      cb(new Error('not found'))
    } else {
      cb(null, JSON.parse(req.response))
    }
  }
  req.open('GET', url)
  req.setRequestHeader('authorization', localStorage.token)
  req.send()
}

function postJSON(url, obj, cb) {
  const req = new XMLHttpRequest()
  req.onload = function () {
    cb(JSON.parse(req.response))
  }
  req.open('POST', url)
  req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  req.setRequestHeader('authorization', localStorage.token)
  req.send(JSON.stringify(obj))
}

function deleteJSON(url, cb) {
  const req = new XMLHttpRequest()
  req.onload = cb
  req.open('DELETE', url)
  req.setRequestHeader('authorization', localStorage.token)
  req.send()
}

export default ContactStore
