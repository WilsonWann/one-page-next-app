import React from 'react';
import styled from '@emotion/styled';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

type CompositedInputProps = {
  error?: string;
};

const CompositedInput = styled.div<CompositedInputProps>`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  height: fit-content;
  background-color: ${(props) =>
    props.error ? 'rgba(249,72,22,0.1)' : 'white'};
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 0.3rem;
  overflow: hidden;
  transition: background-color 0.25s linear;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:focus-visible {
    outline: none;
  }

  & > div:last-child {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > input {
      padding: 0.5rem;
      flex: 1;
      line-height: 1;
      font-size: 1rem;
      height: 2.5rem;
      background-color: transparent;

      &:focus-visible {
        outline: none;
      }
    }

    & svg {
      margin-left: auto;
    }
  }
`;
const LabelDiv = styled.div`
  position: relative;
  /* padding: 0.5rem 0.5rem 0; */
  font-size: medium;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > i {
    color: #999;
  }
`;

type Props = {
  label: string;
  subLabel?: string;
  type?: string;
  icon?: React.ReactNode;
  required?: boolean;
  inputProps?: any;
  error?: string;
};

const FormInput = (props: Props) => {
  const {
    label,
    subLabel = undefined,
    type = 'text',
    icon = null,
    required = false,
    inputProps = {},
    error = undefined,
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const formInput = (children: React.ReactNode) => (
    <CompositedInput error={error}>
      <LabelDiv>
        <label>
          {label} {subLabel && <i>{subLabel}</i>}
        </label>
        {required && <span style={{ color: 'red' }}>*</span>}
      </LabelDiv>
      {children}
    </CompositedInput>
  );

  if (type === 'password') {
    const passwordWrapper = (
      <div>
        <input
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

    return formInput(passwordWrapper);
  }

  const inputWrapper = (
    <div>
      <input type={type} autoComplete={'off'} {...inputProps} />
      {icon}
    </div>
  );
  return formInput(inputWrapper);
};

export default FormInput;
