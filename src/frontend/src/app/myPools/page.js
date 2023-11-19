import { HalfSection } from "@/components/common/Sections";
import Link from "next/link";

const MyPools = () => {
  const arr = [{ name: "ETH GLOBAL ISTANBUL", permission: "owner" }];
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-10 w-[90%] max-w-[1024px]">
        <h1 className="pb-5 border-b-2 border-solid border-white">
          🏊‍♂🎱 MY POOLS
        </h1>
        {arr.map((el, i) => (
          <Link key={`event_${i}`} href={`/myPools/${el.name}`}>
            <HalfSection firstLine={el.name} secondLine={el.permission} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MyPools;
