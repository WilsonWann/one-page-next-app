import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiLine } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import { AuthIconProps } from './AuthIcon.component';

type InnerProps = Pick<AuthIconProps, 'type'>;

const InnerIcon: React.FC<InnerProps> = (props) => {
  const { type } = props;
  let icon: React.ReactNode;
  switch (type) {
    case 'facebook':
      icon = <FaFacebook size={22} color={'#3b5998'} />;
      break;
    case 'google':
      icon = <FcGoogle size={22} />;
      break;
    case 'line':
      icon = <SiLine size={22} color={'#06c755'} />;
      break;
    case 'email':
      icon = <MdOutlineEmail size={22} color={'#000000'} />;
      break;

    default:
      break;
  }

  return icon;
};

export default InnerIcon;
