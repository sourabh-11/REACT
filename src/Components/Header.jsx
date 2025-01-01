import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="bg-[#3C3D37] w-full ">
    <div className="w-[60%] m-auto bg-[#3C3D37] flex justify-between p-2 text-white rounded-md  ">
        <div className="log">WorldAtles</div>
        <div className="flex gap-4 p-2">
            <Link to={'/'}>Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Country'}>Country</Link>
            <Link to={'/Contact'}>Contact</Link>
            
        </div>
    </div>
    </div>
  )
}

export default Header