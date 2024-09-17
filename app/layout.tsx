import { Metadata } from "next";
import "./global.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Beats Alchemy",
  description: "Discover the power of binaural beats",
};

type Props = {
  children: React.ReactNode;
};

export default function App({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
