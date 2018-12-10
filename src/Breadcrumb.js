import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = props => {
  const { separator, children } = props;

  const crumbs = React.Children.map(children, (element, index) => {
    return cloneElement(element, {
      separator,
      key: index,
    });
  });

  return <div>{crumbs}</div>;
};

Breadcrumb.propTypes = {
  separator: PropTypes.string,
};

Breadcrumb.defaultProps = {
  separator: ' / ',
};

export default Breadcrumb;
