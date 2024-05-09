import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import NavLink from '@/components/NavLink/NavLink.component';

const wordColorAnimation = keyframes`
  0%{
    color: #4d4d4d;
  }
  50%{
    color: #ff3366;
  }
  100%{
    color: #4d4d4d;
  }
`;

const activeWordColorAnimation = keyframes`
 0%{
    color: #4d4d4d;
  }
  50%{
    color: #a733ff;
  }
  100%{
    color: #4d4d4d;
  }
`;

type NavbarWrapperProps = {
  active: boolean;
};

export const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? '0' : '-76vw')};
  background-color: white;
  height: 100dvh;
  display: block;
  width: 76vw;
  z-index: calc(99999 + 2);
  transition: left 0.25s ease-in-out;

  display: flex;
  flex-direction: column;

  /* &.active {
    left: 0;
  } */

  & b {
    font-size: larger;
    font-weight: bolder;
  }

  & p,
  & h2,
  & b,
  & button,
  & a:not(:has(svg)) {
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const NavHeader = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
export const NavMenu = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavItem = styled(NavLink)`
  position: relative;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  padding: 0 1rem;
  text-align: left;
  color: black;
`;
export const NavAnimatedItem = styled(NavItem)({
  animation: `${wordColorAnimation} 1s linear infinite`,

  '&.active': {
    animation: `${activeWordColorAnimation} 1s linear infinite`,
  },
});

export const NavFooter = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const NavFooterCaption = styled.h2`
  width: 100%;
  padding: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  font-size: larger;
  color: black;
`;
export const CloseButtonWrapper = styled.div`
  padding-left: 1.5rem;
`;
