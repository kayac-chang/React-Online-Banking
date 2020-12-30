import { MdClose } from "react-icons/md";

type ButtonProps = {
  className?: string;
};
export function Close(props: ButtonProps) {
  return (
    <button {...props}>
      <MdClose />
    </button>
  );
}
