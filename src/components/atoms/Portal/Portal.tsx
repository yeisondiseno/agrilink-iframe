'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type PortalType = {
  id: string;
  show: boolean;
  children: ReactNode;
};

const Portal = ({ id, show, children }: PortalType) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document?.getElementById(id);
  }, [id]);

  return show && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
