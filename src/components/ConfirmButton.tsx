import React, { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import Button, { Props as ButtonProps } from './Button';

interface Props extends ButtonProps  {}

export default function ConfirmButton(props: Props) {
  const [inProgress, setInProgress] = useState(false);

  function onClick() {
    setInProgress(true);
  }

  function onConfirm(e: React.MouseEvent<HTMLButtonElement>) {
    props?.onClick?.(e);
  }

  function onCancel() {
    setInProgress(false);
  }

  return (
    <>
      {inProgress ? (
        <>
          <Button onClick={onConfirm}><FiCheck color="#ffcccc" size="1.5em"  /></Button>
          <Button onClick={onCancel}><FiX color="#ffcccc" size="1.5em"  /></Button>
        </>
      ) : (
        <Button {...props} onClick={onClick}>{ props.children }</Button>
      )}
    </>
  );
}
