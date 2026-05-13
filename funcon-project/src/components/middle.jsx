import middlefr from './imgs/image 7.png'
import middlesc from './imgs/image 8.png'
import side from './imgs/image 16.png'
import f from './imgs/image 12.png'
import pwa from './imgs/image 13.png'
import maining from './imgs/image 14.png'
import nodes from './imgs/image 15.png'

const Middle = () => {
  return (
    <div className=' relative'>
    <div style={{backgroundImage:`url(${middlefr})`}} className='bg-cover bg-center h-screen'><p className=' font-bold text-white text-5xl text-center pt-20'>Decentralize and Performance</p> <img src={f} alt=""  className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150'/> <img src={side} alt="" className=' absolute w-80 top-60 left-40'/> <img src={pwa} alt="" className=' absolute w-80 top-85 right-30'/></div>
    <div style={{backgroundImage:`url(${middlesc})`}} className='bg-cover bg-center h-screen'><img src={maining} alt=""  className='w-80 absolute top-210 left-45'/> <img src={nodes} alt=""  className='w-80 absolute top-240 right-60'/><p className=' font-bold text-white text-5xl  pt-150 w-170 pl-30'>Privacy and Anonymity Fact NASA</p></div>
    </div>

  )
}

export default Middle