'use client';
import React, { useState, ReactNode, useEffect } from 'react';
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
      <section className='m-modal'>
        <Card className='m-modal-content max-block internal'>{children}</Card>
      </section>
      <Cover onClick={handledOpen} />
    </Portal>
  );
};

export default Modal;
