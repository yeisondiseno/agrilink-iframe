import React, { ReactNode } from 'react';
// Styles
import './Card.scss';

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => <article className={`a-card ${className}`}>{children}</article>;

export default Card;
