import React, { useRef, useEffect } from 'react';
import { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';

interface Props extends InputProps {
  name: string;
}

export const TextArea = ({ name, ...rest }: Props) => {
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

  return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
};
