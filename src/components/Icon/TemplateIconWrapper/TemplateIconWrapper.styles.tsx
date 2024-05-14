import styled from '@emotion/styled';

type IconWrapperProps = {
  width?: number | string;
  type: string;
  spanType: string;
  onClick?: () => void;
  bg?: string;
};

export const IconWrapper = styled.div<IconWrapperProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${({ type, width, bg }) => {
    switch (type) {
      case 'minimal':
        return {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          width: '2rem',
          height: '2rem',
        };
      case 'oval':
        return {
          width: width ?? '9rem',
          height: '2rem',

          border: '1px solid rgba(0, 0, 0, 0.125)',
          borderRadius: '1rem',
          padding: '0 0.5rem',
        };
      case 'circle':
        return {
          width: '100%',
          height: '100%',
          borderRadius: '50%',

          backgroundColor: bg ?? 'unset',
        };
      case 'unset':
      default:
        return {};
    }
  }}

  ${({ onClick }) =>
    onClick && {
      cursor: 'pointer',

      '&:hover svg': {
        opacity: '0.6',
      },
    }}

  &>span {
    ${({ spanType }) => {
      switch (spanType) {
        case 'alert':
          return {
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            top: '-0.3rem',
            right: '-0.5rem',
            borderRadius: '50%',
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1rem',
            fontSize: '0.7rem',
          };
        default:
          return {};
      }
    }}
  }
`;

export const IconSpan = styled.span``;
