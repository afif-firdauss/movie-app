import React from 'react';
import './link.css';

const LinkTo = ({ title, ...rest}) => {
  return <p className="link" {...rest}>{title}</p>
}

export default LinkTo;