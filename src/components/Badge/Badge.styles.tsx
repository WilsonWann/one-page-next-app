import styled from '@emotion/styled';

type BadgeProps = {
  color: string;
  backgroundColor: string;
};

export const StyledBadge = styled.label<BadgeProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  padding: 0.3rem 0.8rem;
  border-radius: 0.2rem;
  font-size: 0.7rem;
`;
