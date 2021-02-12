import { InputFieldWithPlaceholder } from "../molecules/InputField";

type Props = {
  onClose?: () => void;
};
export function BottomDrawer({ onClose }: Props) {
  return (
    <article className="absolute bottom-0 w-full h-1/3 bg-white flex flex-col">
      <header className="mx-8 h-1/5">
        <h3 className="h-full flex items-center text-lg">自訂區間</h3>
      </header>

      <section className="mx-8 flex-1 space-y-2">
        <InputFieldWithPlaceholder
          type="text"
          label="起始日"
          placeholder="請選擇"
        />

        <InputFieldWithPlaceholder
          type="text"
          label="結束日"
          placeholder="請選擇"
        />
      </section>

      <footer className="flex h-1/5 divide-x divide-white">
        <button className="bg-button flex-1" onClick={onClose}>
          取消
        </button>
        <button className="bg-button flex-1">查詢</button>
      </footer>
    </article>
  );
}
