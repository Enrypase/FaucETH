import { HalfSection } from "@/components/common/Sections";

const Donate = () => {
  const arr = [{ name: "ETH GLOBAL ISTANBUL", permission: "owner" }];
  return (
    <div className="grid gap-10">
      <h1 className="pb-5 border-b-2 border-solid border-white">
        ➕💰 ADD FUNDS
      </h1>
      {arr.map((el, i) => (
        <HalfSection
          key={`event_${i}`}
          firstLine={el.name}
          secondLine={el.permission}
        />
      ))}
    </div>
  );
};
export default Donate;
