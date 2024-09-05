import React from 'react';
// Styles
import './Cover.scss';

const Cover = ({ onClick }: { onClick?: () => void }) => {
  return <button className='a-cover' onClick={() => onClick?.()} />;
};

export default Cover;
