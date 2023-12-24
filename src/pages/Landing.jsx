import Navbar from "../component/Navbar";
import hero from "../assets/landinghero.png";

function Landing() {
  return (
    <div className="h-screen bg-[#F2FAFA]">
      <div className="h-32">
        <Navbar />
      </div>
      <div className="h-[100%] flex justify-evenly items-center p-8">
        <div className="">
          <h1 className="text-8xl font-[700] text-[#252525] ">
            Are You Looking For <br /> Freelancers?
          </h1>
          <p className="text-[24px] font-[400] text-[#252525]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
            impedit.
          </p>
        </div>
        <div className="w-[800px] h-[800px]">
          {" "}
          <img src={hero} alt="Side" className=""></img>{" "}
        </div>
      </div>
    </div>
  );
}

export default Landing;
