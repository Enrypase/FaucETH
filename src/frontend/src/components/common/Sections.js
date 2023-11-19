const Section = ({ children }) => {
  return (
    <div className="w-full py-5 text-center border-2 border-solid border-white rounded-2xl px-2">
      {children}
    </div>
  );
};
export const SmallSection = ({ content }) => {
  return (
    <Section>
      <h1>{content}</h1>
    </Section>
  );
};
export const HalfSection = ({ firstLine, secondLine }) => {
  return (
    <Section>
      <div className="flex justify-evenly items-center">
        <div className="relative w-[55px] h-[55px]">
          <div className="w-[55px] h-[55px] bg-white rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>{firstLine}</h1>
          <h3>{secondLine}</h3>
        </div>
      </div>
    </Section>
  );
};
export const FullSection = ({ left, right, firstLine, secondLine }) => {
  return (
    <Section>
      <div className="flex justify-between">
        <div className="relative text-[55px] flex justify-center items-center">
          {left}
        </div>
        <div className="flex flex-col gap-2">
          <h1>{firstLine}</h1>
          <h3>{secondLine}</h3>
        </div>
        <div className="relative text-[55px] flex justify-center items-center">
          {right}
        </div>
      </div>
    </Section>
  );
};
