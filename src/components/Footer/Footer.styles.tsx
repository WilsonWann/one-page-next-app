import styled from '@emotion/styled';

export const FooterWrapper = styled.div`
  position: relative;
  background-color: #53575a;
  width: 100vw;
  height: fit-content;
  color: white;
  font-size: small;

  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterContentWrapper = styled.div`
  font-size: small;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const FooterImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  & img {
    width: auto;
    height: 1.5rem;
    object-fit: contain;
  }
`;
export const FooterCopyRight = styled.div`
  width: 100vw;
  color: grey;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid rgba(87, 90, 93, 1);
`;
