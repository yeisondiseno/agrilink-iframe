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
      <section className='m-modal' onClick={() => handledOpen?.()}>
        <Card className='m-modal-content max-block internal'>{children}</Card>
      </section>
      <Cover />
    </Portal>
  );
};

export default Modal;
