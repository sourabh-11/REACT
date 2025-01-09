import Footerdata from '../Api/Footer.json';
import { MdPlace } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';

const Footer = () => {
  const fotterss ={
    MdPlace:<MdPlace/>,
    MdPhone:<MdPhone/>,     
    MdEmail:<MdEmail/>,
    MdAccessTime:<MdAccessTime/> 
  }
  return (
    <div className='flex justify-evenly text-white'>
      { 
        Footerdata.map((curr, index) => {
          const { icon, title, details } = curr; // Destructure properties from the current item
          return (
            <div key={index} className="flex gap-2  items-center">
              <div>
              <div className='text-blue-600 text-4xl' >{fotterss[icon]}</div>
              </div>
             <div>
             <div>{title}</div>
             <div>{details}</div>
             </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Footer;
