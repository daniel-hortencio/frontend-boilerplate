import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export type Option = {
  label: string;
  value: string;
};

export type SelectInputProps = {
  id?: string;
  name: string;
  options: Option[];
  defaultOption?: Option;
  placeholder?: string;
  required?: boolean;
  isMulti?: boolean;
  className?: string;
  onChange?:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | undefined;
};
export function Select({
  id,
  name,
  options,
  defaultOption,
  placeholder,
  required = false,
  isMulti = false,
  className = '',
  onChange,
}: SelectInputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <select
      className={className}
      ref={inputRef}
      id={id || fieldName}
      defaultValue={defaultOption?.value || ''}
      required={required}
      onChange={onChange}
      multiple={isMulti}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={`${option.value}_${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
