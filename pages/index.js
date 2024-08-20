import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "18px",
            fontWeight: "600",
            color: "#252525",
          }}
        >
          <Link href="/schoolmodulesandfacalitiesdetail">
            <div
              className="bg-cyan-400 cursor-pointer"
              style={{ padding: "60px" }}
            >
              School Module
            </div>
          </Link>

          <div
            className="bg-green-200 cursor-pointer"
            style={{ padding: "60px", margin: "10px" }}
          >
            Teacher Module
          </div>
          <Link href="/student">
            <div
              className="bg-red-300  cursor-pointer"
              style={{ padding: "60px" }}
            >
              Student Module
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
