import Link from "next/link";
import { SmallSection } from "../components/common/Sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="grid gap-10 w-[90%] max-w-[1024px]">
        <h1 className="w-full pb-5 border-b-2 border-solid border-white text-center">
          WELCOME TO FAUCETH
        </h1>
        <Link href="/newEvent">
          <SmallSection content="🎩🐇✨CREATE NEW EVENT" />
        </Link>
        <Link href="/myPools">
          <SmallSection content="🏊‍♂🎱 MY POOLS" />
        </Link>
        <Link href="/donate">
          <SmallSection content="➕💰 ADD FUNDS" />
        </Link>
      </div>
    </div>
  );
}
