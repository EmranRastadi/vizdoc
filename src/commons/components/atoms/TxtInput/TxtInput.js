import { InputField } from './style';

export default function TxtInput(props) {
  return <InputField multiline
                     maxRows={4} {...props} />;
}
