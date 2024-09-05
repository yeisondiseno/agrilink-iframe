'use client';
import React, { ReactNode } from 'react';
// Component
import { Portal, Card, Cover } from '@/components';
// Styles
import './Modal.scss';

type ModalType = {
  open?: boolean;
  children: ReactNode;
  handledOpen: () => void;
};

const Modal = ({ open = false, handledOpen, children }: ModalType) => {
  return (
    <Portal show={open} id='portal'>
      <Card className='m-modal max-block internal'>{children}</Card>

      <Cover onClick={() => handledOpen?.()} />
    </Portal>
  );
};

export default Modal;
