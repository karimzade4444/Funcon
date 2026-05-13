import bgTop from "./imgs/image 4.png";
import logoCom from "./imgs/logo 1.png";
import telegram from "./imgs/telegram 1.png";
import twitter from "./imgs/twitter 1.png";
import funcon from "./imgs/image 5.png";

const Top = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgTop})` }}
    >
      <div className=" flex justify-around items-center pt-10">
        <img src={logoCom} alt="" />{" "}
        <div className=" flex justify-center items-center gap-10 text-white font-bold">
          <p className="w-20 h-6 bg-linear-to-r from-blue-800 via-green-300 to-gray-400 text-center rounded-2xl cursor-pointer">
            HOME
          </p>
          <p>BOUNTY</p>
          <p>FORUM</p>
          <p>WALLETS</p>
          <p>EXPLORER</p>
          <p>TEAM</p>
        </div>{" "}
        <div className=" flex justify-center items-center gap-10">
          <img src={telegram} alt="" /> <img src={twitter} alt="" />
        </div>
      </div>

      <div className=" relative">
        <img src={funcon} alt="" className="w-280 pt-20 pl-30" />
        <div className=" absolute top-50 left-40">
          <p className="text-gray-400 text-3xl w-100">
            Educational blockchain platform for Web 3.0 enthusiasts and
            developers.
          </p>
          <p className=" text-gray-400 text-3xl w-160 pt-10">
            Conquer blockchain with the FUNC community! No ICO, No IEO, No
            Premine!
          </p>
          <div className="pt-10 flex  items-center gap-10">
            <button className="w-35 h-10 border-2 border-white rounded-3xl text-white font-bold">JOIN</button>
            <button className="w-35 h-10 border-0 border-white rounded-3xl text-black/80 font-bold bg-white">WHITEPAPER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
