import React from 'react';

import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};
