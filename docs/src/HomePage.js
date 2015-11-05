import React from 'react';

import NavMain from './NavMain';
import PageFooter from './PageFooter';
import Grid from '../../src/Grid';
import ListGroup from '../../src/ListGroup';
import ListGroupItem from '../../src/ListGroupItem';
import Alert from '../../src/Alert';
import Glyphicon from '../../src/Glyphicon';
import Label from '../../src/Label';
import ListProduct from './ListProduct';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavMain activePage="home" />
        <Grid>
          <ListProduct />
        </Grid>

        <PageFooter />
      </div>
    );
  }
}
