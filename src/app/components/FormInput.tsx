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

  user-select: none;
  i {
    color: #bbb;
  }
`;

type FormInputProps = InputProps; //| SelectProps;

type InputProps = {
  // As?: 'input';

  icon?: React.ReactNode;
  type?: string;
  subLabel?: string;

  label: string;
  required?: boolean;
  inputProps?: any;
  error?: string;
};

// type SelectProps = {
//   As: 'select';

//   onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
//   options: { value: string; label: string }[];

//   label: string;
//   required?: boolean;
//   inputProps?: any;
//   error?: string;
// };

const FormInput = (formInputProps: FormInputProps) => {
  // const { As = 'input' } = formInputProps;
  const [showPassword, setShowPassword] = React.useState(false);

  // if (As === 'input') {
  const {
    label,
    inputProps,
    required = false,
    type = 'text',
    subLabel = undefined,
    icon = null,
    error,
  } = formInputProps;
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
  // }

  // if (As === 'select') {
  //   const {
  //     label,
  //     required = false,
  //     inputProps = {},
  //     error = undefined,
  //     onChangeHandler,
  //     options = [],
  //   } = formInputProps;
  //   const formSelect = () => (
  //     <CompositedInput error={error}>
  //       <LabelDiv>
  //         <label>{label}</label>
  //         {required && <span style={{ color: 'red' }}>*</span>}
  //       </LabelDiv>
  //       <Select onChange={onChangeHandler} options={options} {...inputProps} />
  //     </CompositedInput>
  //   );

  //   return formSelect();
  // }
};

export default FormInput;
