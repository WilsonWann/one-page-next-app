import styled from '@emotion/styled';

type ImageDivProps = {
  aspectRatio: string;
};

export const ImageDiv = styled.div<ImageDivProps>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? '16 / 9'};
`;
