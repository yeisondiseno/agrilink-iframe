import React from 'react';
// Styles
import './Skeleton.scss';

type SkeletonTypes = {
  width?: number | 'auto';
  height?: number;
  className?: string;
};

const Skeleton = ({ width, height, className }: SkeletonTypes) => {
  return (
    <div
      className={`a-skeleton ${className}`}
      style={{ height: height ?? '', width: width ?? '100%' }}
    />
  );
};

export default Skeleton;
