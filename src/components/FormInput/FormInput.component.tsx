'use client';
import React from 'react';
import { CompositedInput, LabelDiv } from './FormInput.styles';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

type Props = {
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  subLabel?: string;
  disabled?: boolean;
  label: string;
  required?: boolean;
  inputProps?: any;
  error?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    label,
    inputProps,
    placeholder = undefined,
    disabled = false,
    required = false,
    type = 'text',
    subLabel = undefined,
    icon = null,
  } = props;
  // console.log('🚀 ~ FormInput ~ error:', error);

  let error = props.error;

  let inputWrapper: React.ReactNode = null;

  if (props.name) {
    inputWrapper = (
      <div>
        <input
          type={type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={'off'}
          {...inputProps}
        />
        {icon}
      </div>
    );
  }
  if (type === 'password') {
    inputWrapper = (
      <div>
        <input
          disabled={disabled}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          autoComplete={'off'}
          {...inputProps}
        />
        {showPassword ? (
          <MdOutlineVisibilityOff onClick={() => setShowPassword(false)} />
        ) : (
          <MdOutlineVisibility onClick={() => setShowPassword(true)} />
        )}
      </div>
    );
  }

  if (type === 'text') {
    inputWrapper = (
      <div>
        <input
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          autoComplete={'off'}
          {...inputProps}
        />
        {icon}
      </div>
    );
  }

  const formInput = (children: React.ReactNode) => (
    <CompositedInput error={error} disabled={disabled}>
      <LabelDiv>
        <label>
          {label} {subLabel && <i>{subLabel}</i>}
        </label>
        {required && <span style={{ color: 'red' }}>*</span>}
      </LabelDiv>
      {children}
    </CompositedInput>
  );
  return formInput(inputWrapper);
};

export default FormInput;
