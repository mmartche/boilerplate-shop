import React from 'react';
import {IndexRoute, Route} from 'react-router';

import HomePage from './HomePage';
import IntroductionPage from './IntroductionPage';
import ContactApp from './ContactApp';
import NotFoundPage from './NotFoundPage';
import Root from './Root';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="introduction.html" component={IntroductionPage} />
    <Route path="contact.html" component={ContactApp} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
