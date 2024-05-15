import { StyledLink } from './TextLink.styles';
import type { LinkProps } from 'next/link';

import React from 'react';

type Props = LinkProps & {
  children: React.ReactNode;
};

const TextLink: React.FC<Props> = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default TextLink;
