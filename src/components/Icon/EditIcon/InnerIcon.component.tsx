import { FaRegEdit } from 'react-icons/fa';
import { PiTruckLight } from 'react-icons/pi';
import { EditIconProps } from './EditIcon.component';

type InnerProps = Pick<EditIconProps, 'type' | 'size'>;

const InnerIcon: React.FC<InnerProps> = (props) => {
  const { type, size } = props;
  let icon: React.ReactNode;
  switch (type) {
    case 'edit':
      icon = <FaRegEdit size={size} />;
      break;
    case 'address':
      icon = <PiTruckLight size={size} />;
      break;

    default:
      break;
  }

  return icon;
};

export default InnerIcon;
