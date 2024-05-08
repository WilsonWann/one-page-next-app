'use client';
import React from 'react';
import styled from '@emotion/styled';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { useController } from 'react-hook-form';

type CompositedInputProps = {
  error?: string;
  disabled?: boolean;
};

const CompositedInput = styled.div<CompositedInputProps>`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  height: fit-content;
  background-color: ${({ error, disabled }) =>
    disabled ? '#00000022' : error ? 'rgba(249,72,22,0.1)' : 'white'};
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

  user-select: none;
  i {
    color: #bbb;
  }
`;

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
  control?: any;
  name?: string;
};

const FormInput = (props: Props) => {
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

  if (type === 'creditCard') {
    const { control, name = 'creditCardNumber' } = props;
    const {
      field,
      fieldState: { error: fieldError },
    } = useController({
      name: name,
      control: control,
      rules: { required: true, pattern: /[\d|\s]{19}/ },
    });

    error = fieldError?.type;

    const [creditCardNumber, setCreditCardNumber] = React.useState<string>('');
    // console.log('🚀 ~ Payment ~ creditCardNumber:', creditCardNumber);
    const creditCardStringBuilder = (creditCardString: string) => {
      if (creditCardString.length > 12) {
        return `${creditCardString.slice(0, 4)} ${creditCardString.slice(
          4,
          8,
        )} ${creditCardString.slice(8, 12)} ${creditCardString.slice(12, 19)}`;
      }

      if (creditCardString.length > 8) {
        return `${creditCardString.slice(0, 4)} ${creditCardString.slice(
          4,
          8,
        )} ${creditCardString.slice(8, 12)}`;
      }

      if (creditCardString.length > 4) {
        return `${creditCardString.slice(0, 4)} ${creditCardString.slice(
          4,
          8,
        )}`;
      }

      return `${creditCardString.slice(0, 4)}`;
    };
    const clearNumber = (creditCardString: string) => {
      return creditCardString.replace(/\D/g, '').replace(/\s/g, '');
    };

    const onCreditCardStringChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const clearedString = clearNumber(e.target.value);
      const numberString = creditCardStringBuilder(clearedString);
      setCreditCardNumber(numberString);
    };

    const { onChange, onBlur } = field;

    inputWrapper = (
      <div>
        <input
          {...field}
          onBlur={onBlur}
          value={creditCardNumber}
          type={'tel'}
          placeholder={placeholder}
          autoComplete={'off'}
          maxLength={19}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
            onCreditCardStringChangeHandler(e);
          }}
        />
        {icon}
      </div>
    );
  }

  if (type === 'expiryDate') {
    const { control, name = 'expiryDate' } = props;
    const {
      field,
      fieldState: { error: fieldError },
    } = useController({
      name: name,
      control: control,
      rules: {
        required: true,
        pattern: /[\d|\/|\s]{7}/,
      },
    });

    error = fieldError?.type;

    const [expiryDate, setExpiryDate] = React.useState<string>('');
    // console.log('🚀 ~ Payment ~ creditCardNumber:', creditCardNumber);
    const expiryDateStringBuilder = (expiryDateString: string) => {
      if (expiryDateString.length > 2) {
        return `${expiryDateString.slice(0, 2)} / ${expiryDateString.slice(
          2,
          4,
        )}`;
      }

      return `${expiryDateString.slice(0, 2)}`;
    };
    const clearNumber = (creditCardString: string) => {
      return creditCardString.replace(/\D/g, '').replace(/\//g, '');
    };

    const onExpiryDateStringChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const clearedString = clearNumber(e.target.value);
      const numberString = expiryDateStringBuilder(clearedString);
      setExpiryDate(numberString);
    };

    const { onChange, onBlur } = field;

    inputWrapper = (
      <div>
        <input
          {...field}
          onBlur={onBlur}
          value={expiryDate}
          type={'tel'}
          placeholder={placeholder}
          autoComplete={'off'}
          maxLength={7}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
            onExpiryDateStringChangeHandler(e);
          }}
        />
        {icon}
      </div>
    );
  }

  if (type === 'securityCode') {
    const { control, name = 'securityCode' } = props;
    const {
      field,
      fieldState: { error: fieldError },
    } = useController({
      name: name,
      control: control,
      rules: {
        required: true,
        pattern: /[\d]{3}/,
      },
    });

    error = fieldError?.type;

    const [securityCode, setSecurityCode] = React.useState<string>('');

    const onExpiryDateStringChangeHandler = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setSecurityCode(e.target.value);
    };

    const { onChange, onBlur } = field;

    inputWrapper = (
      <div>
        <input
          onBlur={onBlur}
          value={securityCode}
          type={'tel'}
          placeholder={placeholder}
          autoComplete={'off'}
          maxLength={3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
            onExpiryDateStringChangeHandler(e);
          }}
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
