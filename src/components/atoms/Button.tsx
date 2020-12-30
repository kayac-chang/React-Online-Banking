import { MdClose } from "react-icons/md";

type Button = {
  className?: string;
};
export function Close(props: Button) {
  return (
    <button {...props}>
      <MdClose />
    </button>
  );
}
