import Image from "next/image";
import logo from "../../../public/logo.svg";
import metamaskLogo from "../../../public/metamaskLogo.svg";

const ConnectWallet = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-screen w-[80%] flex justify-center items-center flex-col">
        <div className="relative h-[144px] w-[460px] w-full">
          <Image src={logo} alt="Logo" fill />
        </div>
        <div className="flex flex-col justify-evenly items-center border-2 border-solid border-white border-l-0 border-r-0 py-[60px] w-full">
          <h4 className="text-center pb-[20vh]">
            🏊‍♂ For a smooth swim, ensuring you don&apos;t sink into testnet
            pools
          </h4>
          <div className="flex items-center flex-col">
            <h3 className="text-center">CONNECT YOUR WALLET</h3>
            <div className="relative w-[100px] h-[150px]">
              <Image src={metamaskLogo} alt="Metamask Logo" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
