import styled from '@emotion/styled'

const BlockTitle = styled.label`
  display: block;
  padding: unset;
  white-space: normal;

  & > span {
    color: lightgray;
    font-size: small;
    margin-left: 0.5rem;
    display: inline-block;
  }
`

const BlockCol = styled.div``

const BlockContent = styled.div`
  display: flex;
  align-items: baseline;
`
type BlockType = {
  required?: boolean
  direction?: 'row' | 'column'
  gap?: string
  error?: boolean
}

const Block = styled.div<BlockType>`
  position: relative;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${(props) => (props.error ? 'rgba(249,72,22,0.1)' : 'white')};
  transition: background-color 0.2s linear;
  /* rgba(249,72,22,0.1) */
  &:has(${BlockCol}) {
    border: none;
    background-color: unset;
    display: flex;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => props.gap};
    align-items: flex-start;
    padding: unset;
  }

  ${BlockCol} {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  ${BlockTitle} {
    display: block;
    font-size: small;
  }

  &:has(input[type='checkbox']) {
    input[type='checkbox'] {
      margin-right: 0.5rem;
    }
    ${BlockTitle} {
      display: inline-block;
    }
    ${BlockContent} {
      display: inline-block;
    }
  }

  ${BlockContent} {
    display: flex;
    align-items: baseline;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => props.gap};

    & > input[type='text'],
    & > input[type='email'],
    & > textarea,
    & > select {
      width: 100%;
      background-color: transparent;
      &:focus-visible {
        outline: none;
      }
    }

    & > textarea {
      height: 5rem;
      resize: none;
    }
  }

  &::after {
    content: '*';
    display: ${(props) => (props.required ? 'block' : 'none')};
    position: absolute;
    color: red;
    top: 0.5rem;
    right: 0.5rem;
    height: 0.5rem;
    width: 0.5rem;
    line-height: 0.5rem;
  }
`

const RadioButton = styled.input`
  margin-right: 0.5rem;
`
const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  & > span {
    color: white;
    background-color: red;
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    height: 0.8rem;
  }
`

export { Block, BlockTitle, BlockContent, BlockCol, RadioButton, Label }
