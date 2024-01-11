import { BUTTON_TYPE } from '@/types/global.types';

export interface ButtonPropTypes {
  text?: string;
  type: BUTTON_TYPE;
  icon?: React.ReactNode;
  onClick?: () => void;
}
