import styled from '@emotion/styled';
import ImageBlock from '@/components/ImageBlock/ImageBlock.component';

type ItemWrapperProps = {
  align: string;
};

export const ItemWrapper = styled.div<ItemWrapperProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  align-items: ${(props) =>
    props.align === 'center' ? 'center' : `flex-${props.align}`};
  text-align: ${(props) => props.align};
  /* gap: 0.5rem; */

  & > *:last-child {
    margin-top: auto;
  }
`;
type ItemContentProps = {
  padding?: string;
};
export const CardImageBlock = styled(ImageBlock)<ItemContentProps>``;

export const ItemContentWrapper = styled.div<ItemContentProps>`
  ${(props) =>
    props.padding &&
    `
padding: ${props.padding};
// border-top: 1px solid rgba(0, 0, 0, 0.2);
width: 100%;
`}
`;
export const ItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;
  color: black;

  & small {
    color: red;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

export const Price = styled.div`
  color: black;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
`;

export const SpecialPrice = styled.div`
  color: red;
`;

export const Content = styled.small`
  color: grey;
  white-space: pre-wrap;
  text-align: inherit;
`;

export const ItemFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
