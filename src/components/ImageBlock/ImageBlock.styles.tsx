import styled from '@emotion/styled';

export type ImageDivProps = {
  aspectRatio: string;
  height?: string;
  width?: string;
};

export const ImageDiv = styled.div<ImageDivProps>`
  position: relative;

  aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? '16 / 9'};

  width: ${({ width }) => width ?? '100%'};
  /* height: ${({ height }) => height ?? 'auto'}; */

  ${({ height }) => {
    if (height) {
      return {
        width: 'auto',
        height: height,
      };
    } else {
      return {
        height: 'auto',
      };
    }
  }}
`;
