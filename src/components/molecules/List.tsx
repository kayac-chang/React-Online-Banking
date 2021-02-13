import { useRef, ReactNode } from "react";
import { useVirtual } from "react-virtual";

type Props<T> = {
  data: T[];
  children: (index: number) => ReactNode;
};
export function List<T>({ data, children }: Props<T>) {
  const ref = useRef<HTMLDivElement>(null);

  const { virtualItems, totalSize } = useVirtual({
    size: data.length,
    parentRef: ref,
  });

  return (
    <div ref={ref} className="h-full overflow-auto">
      <div className="relative" style={{ height: `${totalSize}px` }}>
        {virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.index}
            className="absolute top-0 left-0 w-full"
            style={{
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div ref={virtualRow.measureRef}>{children(virtualRow.index)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
