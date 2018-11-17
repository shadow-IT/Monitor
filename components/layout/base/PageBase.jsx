import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const PageBase = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline/>
      <Paper>
        <PageHeader/>
        {props.children}
        <PageFooter/>
      </Paper>
    </React.Fragment>
  );
}

PageBase.displayName = 'PageBase';

export default PageBase;
