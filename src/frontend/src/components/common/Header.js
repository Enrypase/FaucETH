import Image from "next/image";
import logo from "../../../public/logo.svg";
import Link from "next/link";

const Header = () => {
  const found = true;
  const currentFaucet = "eth global";
  const currentPage = "home";
  return (
    <div className="flex justify-between py-[25px] px-[30px]">
      <div className="relative h-[50px] w-[155px]">
        <Link href="/">
          <Image src={logo} alt="Logo" fill />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-center">
          <h4>{currentFaucet}</h4>
          <h4>{currentPage}</h4>
        </div>
        <div className="relative h-[55px] w-[55px]">
          <div className="w-[55px] h-[55px] rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};
export default Header;
