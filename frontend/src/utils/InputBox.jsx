import React from 'react';

const InputBox = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name,
  id,
  required = false,
  disabled = false,
  readOnly = false,
  maxLength,
  minLength,
  pattern,
  autoComplete = 'off',
  autoFocus = false,
  error = '',
  className = '',
  InputStyle='',
  ...rest
}) => {
  return (
    <div className={` ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id || name}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={`${InputStyle} h-10 rounded-xl ${error ? 'input-error' : ''}`}
        {...rest} // This allows passing any other attribute to the input
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputBox;
