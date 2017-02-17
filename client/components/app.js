import React from 'react';

import Header from './header';
import DocsList from './docs/docs_list';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
