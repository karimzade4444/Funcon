import tB from "./imgs/image 6.png";
import network from "./imgs/image 21.png";
import wallet from "./imgs/image 20.png";
import academy from "./imgs/image 19.png";
import education from "./imgs/image 11.png";

const TopBottom = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${tB})` }}
    >
      <div className=" flex justify-center items-center gap-40 pt-20">
        <div className=" grid grid-cols-1 gap-20"><div><img src={network} alt="" /></div><div className=" flex items-center gap-20"><img src={wallet} alt="" /><img src={academy} alt="" /></div></div>
        <div><img src={education} alt="" /></div>
      </div>
    </div>
  );
};

export default TopBottom;
