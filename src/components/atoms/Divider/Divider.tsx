import React from 'react';
// Styles
import './Divider.scss';

const Divider = ({ className = '' }: { className?: string }) => (
  <div className={`a-divider ${className}`} />
);

export default Divider;
