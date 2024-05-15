import React from 'react';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';
import InnerIcon from './InnerIcon.component';

export type EditIconProps = {
  size?: number;
  type?: 'edit' | 'address';
  width?: string | number;
  iconText?: string;
  onClick?: () => void;
};

const EditIcon: React.FC<EditIconProps> = (props) => {
  const {
    size = 22,
    type = undefined,
    width = undefined,
    iconText = 'Edit',
    onClick = () => {},
  } = props;

  return (
    <TemplateIconWrapper
      type='oval'
      width={width}
      iconText={iconText}
      onClick={onClick}
    >
      <InnerIcon type={type} size={size} />
    </TemplateIconWrapper>
  );
};

export default EditIcon;
