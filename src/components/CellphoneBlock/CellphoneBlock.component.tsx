import React from 'react';
import {
  Block,
  BlockTitle,
  BlockContent,
} from '@/components/FormBlock/FormBlock.component';
import { useAtom } from 'jotai';
import { cellphoneAtom } from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { ErrorProps } from '@/types';

type Props = {
  error?: ErrorProps;
  required: boolean;
};

const CellphoneBlock = (props: Props) => {
  const { error, required = false } = props;
  const [cellphone, setCellphone] = useAtom(cellphoneAtom);
  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'cellphone'}>手機號碼</BlockTitle>
        <BlockContent>
          <input
            id='cellphone'
            type='text'
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
        </BlockContent>
      </Block>
      <ErrorMessage error={error} />
    </>
  );
};

export default CellphoneBlock;
