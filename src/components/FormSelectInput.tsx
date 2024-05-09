import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import Select, {
  ControlProps,
  CSSObjectWithLabel,
  GroupBase,
  IndicatorSeparatorProps,
  OptionProps,
  SingleValue,
} from 'react-select';
import { OptionType } from '@/types';

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
  label: string;
  subLabel?: string;
  required?: boolean;
  inputProps?: any;
  error?: string;

  name: string;
  control: any;
  options: OptionType[];
  value: SingleValue<OptionType> | undefined;
  setState: React.Dispatch<
    React.SetStateAction<SingleValue<OptionType> | undefined>
  >;
};

const styles = {
  control: (
    baseStyles: CSSObjectWithLabel,
    state: ControlProps<OptionType, false, GroupBase<OptionType>>,
  ) => ({
    ...baseStyles,
    width: '100%',
    border: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator: (
    baseStyles: CSSObjectWithLabel,
    state: IndicatorSeparatorProps<OptionType, false, GroupBase<OptionType>>,
  ) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
  }),
  option: (
    baseStyles: CSSObjectWithLabel,
    state: OptionProps<OptionType, false, GroupBase<OptionType>>,
  ) => ({
    ...baseStyles,
    backgroundColor: state.isSelected
      ? '#ff3366'
      : state.isFocused
      ? 'rgba(255,51,102,0.1)'
      : 'inherit',
  }),
};
const FormSelectInput = (props: Props) => {
  const {
    label,
    subLabel = undefined,
    required = false,
    error,
    name,
    control,
    options,
    value,
    setState,
  } = props;

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

  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const selector = isMounted ? (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur } }) => {
        return (
          <Select
            styles={styles}
            id={id}
            options={options}
            value={value}
            onBlur={onBlur}
            onChange={(option) => {
              onChange(option);
              setState(option);
            }}
          />
        );
      }}
    />
  ) : null;

  return formInput(selector);
};

export default FormSelectInput;
