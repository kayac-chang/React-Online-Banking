import { ReactNode } from "react";

type BottomDrawerProps = {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
};
export function BottomDrawer({ header, body, footer }: BottomDrawerProps) {
  return (
    <article className="absolute bottom-0 w-full bg-white">
      <div className="mx-8">
        {header}

        <section className="flex-1">{body}</section>
      </div>

      {footer}
    </article>
  );
}
