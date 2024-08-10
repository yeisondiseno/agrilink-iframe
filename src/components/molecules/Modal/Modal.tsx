'use client';
import React, { useState, ReactNode, useEffect } from 'react';
// Component
import { Portal, Card, Cover } from '@/components';

type ModalType = {
  open?: boolean;
  children: ReactNode;
  handledOpen: () => void;
};

const Modal = ({ open = false, handledOpen, children }: ModalType) => {
  return (
    <Portal show={open} id='portal'>
      <Card className=''>{children}</Card>;
      <Cover onClick={handledOpen} />
    </Portal>
  );
};

export default Modal;
