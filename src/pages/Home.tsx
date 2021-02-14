import { Header } from "components/organisms";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-8">
        <nav>
          <Link to="/submain">Submain</Link>
        </nav>
      </main>
    </>
  );
}
