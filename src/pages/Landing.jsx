import Navbar from "../component/Navbar";
import hero from "../assets/landinghero.png";

function Landing() {
  return (
    <div className="h-screen bg-[#F2FAFA]">
      <div className="h-20">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-8  md:flex-row md:px-16">
        <div className="text-center weight-2/3 md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#252525] md:text-8xl">
            Are You Looking For <br /> Freelancers?
          </h1>

          <p className="mt-4 text-lg md:text-2xl md:mt-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
            impedit.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2">
          <img src={hero} alt="Side" className="w-400 h-400" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
