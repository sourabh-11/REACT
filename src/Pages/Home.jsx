import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <main>
      <div className="main text-white w-[60%] m-auto mt-32 flex gap-4">
          <div>
            <h1 className="text-3xl">Explore the World,One Country at a time</h1>
            <p className="mt-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam nobis cum autem sint? Hic, doloremque perferendis.</p>
            <button className="flex text-center justify-center items-center border mt-5 pt-2 pb-2 pl-4 pr-4 rounded-lg "> <span className="pr-2">Start Exploring </span> <FaArrowRight /> </button>
          </div>
          <div>
              <img className="-mt-10" src="world.png" alt="" />
          </div>
      </div>
    </main>
  )
}

export default Home