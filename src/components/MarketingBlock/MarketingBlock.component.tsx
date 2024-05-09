import React from 'react';
import { MarketingWrapper, MarketingContent } from './MarketingBlock.styles';
import DisplayTitle from '@/components/DisplayTitle/DisplayTitle.component';
import HorizontalLine from '@/components/HorizontalLine/HorizontalLine.component';
import Badge from '@/components/Badge/Badge.component';

type Props = {
  title: string;
  label: string;
  content: string;
};

const MarketingBlock = (props: Props) => {
  const { title, label, content } = props;
  return (
    <MarketingWrapper id='marketing-discount-anchor'>
      <DisplayTitle title={title} />
      <MarketingContent>
        <Badge label={label} /> {content}{' '}
      </MarketingContent>

      <HorizontalLine />
    </MarketingWrapper>
  );
};

export default MarketingBlock;
