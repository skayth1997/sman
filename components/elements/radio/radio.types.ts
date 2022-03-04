/*************** Radio ***************/
export interface RadioProps {
  name: string;
  label?: string | { value: string; position: string };
  tabIndex?: number;
  onChange?: () => void;
}