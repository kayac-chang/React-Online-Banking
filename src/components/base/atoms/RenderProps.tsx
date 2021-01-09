import { cond, type, equals, pipe, applyTo, identity } from "ramda";
import { ReactNode, isValidElement } from "react";

const isFunction = pipe(type, equals("Function"));

export type RenderPropsChildren<T> = ((prop: T) => ReactNode) | ReactNode;
export type Props<T> = T & {
  children?: RenderPropsChildren<T>;
};
export default function RenderProps<T>({ children, ...props }: Props<T>) {
  return (
    <>
      {cond([
        [isValidElement, identity],
        [isFunction, applyTo(props)],
      ])(children)}
    </>
  );
}
