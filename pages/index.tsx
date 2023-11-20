import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import UserList from "@/components/UserList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full h-fit">
        <Navbar />
      </div>
      <section className="mt-12 w-full h-fit">
        <UserList />
      </section>
    </>
  );
}
