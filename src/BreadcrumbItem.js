import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = props => {
  const { separator, children, ...restProps } = props;

  return (
    <span>
      {'href' in props ? (
        <li {...restProps}>{children}</li>
      ) : (
        <span {...restProps}>{children}</span>
      )}
      <span className="separator">{separator}</span>
    </span>
  );
};

BreadcrumbItem.propTypes = {
  separator: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  separator: ' / ',
};

export default BreadcrumbItem;
