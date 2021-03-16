import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';

interface Props extends InputProps {
  name: string;
  type?: 'text' | 'tel' | 'number';
  placeholder: string;
}

export const InputText = ({
  name,
  type = 'text',
  placeholder,
  ...rest
}: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask
      ref={inputRef}
      defaultValue={defaultValue}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};
