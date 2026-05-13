import bgfoot from "./imgs/image 9.png";
import frame from "./imgs/Frame.png";
import foot from "./imgs/image 10.png";
import logoframe from "./imgs/Frame (1).png";
const Footer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgfoot})` }}
        className="bg-cover bg-center h-screen relative"
      >
        <img
          src={frame}
          alt=""
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-280 "
        />
      </div>
      <div
        style={{ backgroundImage: `url(${foot})` }}
        className="bg-cover bg-center h-[50vh]"
      >
        <div>
          <img src={logoframe} alt=""  className=" m-auto pt-3 "/>
        </div>
        <div className=" flex text-white justify-center items-start gap-20 pt-10">
          <div className="w-50">
            <h1 className=" font-black">Funcoin Foundation</h1>
            <p>openLedger ApS</p>
            <p>
              Address: Copenhagen Fintech Lab Applebys Plads 7, 1411 Copenhagen
              Denmark CVR-NR 35 80 91 71 VAT Number: DK 35809171
            </p>
          </div>
          <div className="w-0.5 h-48 bg-gray-400"></div>
          <div>
            <h1 className=" font-black">Community</h1>
            <p>Telegram</p>
            <p>Forum</p>
          </div>
          <div className="w-0.5 h-48 bg-gray-400"></div>
          <div>
            <h1 className=" font-black">Wallet</h1>
            <p>Android</p>
            <p>IOS</p>
            <p>PWA</p>
            <p>Windows</p>
            <p>Mac</p>
            <p>Unix</p>
            <p>Web</p>
          </div>
          <div className="w-0.5 h-48 bg-gray-400"></div>
          <div className=" flex justify-center gap-10">
            <div>
              <h1 className=" font-black">Mining</h1>
              <p>Pools</p>
              <p>Funcoin</p>
              <p>Comining</p>
              <p>Crazypool</p>
            </div>

            <div>
              <p>Guides</p>
              <p>Settings</p>
              <p>How too install node Funcoin</p>
            </div>
          </div>
          <div className="w-0.5 h-48 bg-gray-400"></div>
          <div>
            <h1 className=" font-black">Exchanges</h1>
            <p>FUNC-ETC</p>
          </div>
        </div>
        <div className="w-350 h-0.5 bg-gray-400 m-auto"></div>
        <div className=" text-center text-white"><p>Powered by: @Karimzade_8222</p></div>
      </div>
    </div>
  );
};

export default Footer;
