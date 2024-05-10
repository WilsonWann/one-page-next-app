import styled from '@emotion/styled';

export const DisplayControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto 2rem;
`;

type DisplayAreaProps = {
  gap?: string;
  columnItems: number;
};

export const DisplayArea = styled.div<DisplayAreaProps>`
  position: relative;
  height: fit-content;
  width: 100%;
  padding: ${(props) => (props.gap ? `0 ${props.gap}` : '0')};

  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columnItems},
    minmax(0, 1fr)
  );
  grid-template-rows: 1fr;

  gap: ${(props) => props.gap ?? '0'};
  row-gap: 3rem;
  margin-bottom: 2rem;

  & > div {
    overflow-x: clip;
  }
`;
