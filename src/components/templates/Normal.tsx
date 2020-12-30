import { PropsWithChildren } from "react";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
