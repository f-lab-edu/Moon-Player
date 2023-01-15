import { FontAwesomeIcons, IconType } from 'types/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Icon = ({ name, size, color }: IconType) => {
  return <FontAwesomeIcon icon={FontAwesomeIcons[name]} size={size} color={color}></FontAwesomeIcon>;
};

export default Icon;
