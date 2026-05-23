import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => {
      inputRef.current.value = '';
    },
    setValue: value => {
      inputRef.current.value = value;
    }
  }));

  return <input ref={inputRef} {...props} />;
});

export default CustomInput;