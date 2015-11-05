import React from 'react';
import packageJSON from '../../package.json';

let version = packageJSON.version;

if (/docs/.test(version)) {
  version = version.split('-')[0];
}

const PageHeader = React.createClass({
  render() {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
          <div className="container">
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{version}</li>
            </ul>
          </div>
        </footer>
      );
  }
});

export default PageHeader;
