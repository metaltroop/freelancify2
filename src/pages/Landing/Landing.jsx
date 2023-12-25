import Navbar from "../../component/Navbar";
import hero from "../../assets/landinghero.png";

function Landing() {
  return (
    <>
      <div className="h-screen bg-[#F2FAFA]">
        <div className="">
          <Navbar />
        </div>

        <div className="h-[100dvh] flex flex-col items-center justify-center px-4 md:flex-row md:px-16">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-[#252525] md:text-4xl lg:text-6xl">
              Are You Looking For Freelancers?
            </h1>

            <p className="pt-4 text-lg md:text-2xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              impedit.
            </p>
            <div className="flex gap-4 my-4">
              <button className="m-2 bg-[#1F89E5] py-4 px-6 text-[#F8F8F8] rounded-xl text-md font-medium ">
                Hire a Freelancer
              </button>
              <div className="m-2 text-[#F8F8F8] bg-[#1F89E5] py-4 px-6 rounded-xl text-md font-medium flex relative justify-center">
                <select
                  className="bg-transparent border-none appearance-none p-[0_30px_0_15px] w-[100%] outline-none"
                  name="Category"
                >
                  <option
                    className="text-gray-500 font-medium"
                    value="javascript"
                  >
                    {" "}
                    Category 1{" "}
                  </option>
                  <option
                    className="text-gray-500 font-medium"
                    value="javascript"
                  >
                    {" "}
                    Category 2{" "}
                  </option>
                  <option
                    className="text-gray-500 font-medium"
                    value="javascript"
                  >
                    {" "}
                    Category 3{" "}
                  </option>
                  <option
                    className="text-gray-500 font-medium"
                    value="javascript"
                  >
                    {" "}
                    Category 4{" "}
                  </option>
                </select>
                <div className="h-[100%]  right-0 flex items-center justify-center  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    id="down-arrow"
                    fill="#fff"
                  >
                    <path d="M22.782 13.8 17 19.582 11.218 13.8a1 1 0 0 0-1.414 1.414L16.29 21.7a.992.992 0 0 0 .71.292.997.997 0 0 0 .71-.292l6.486-6.486a1 1 0 0 0-1.414-1.414z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <img src={hero} alt="Side" className="w-400 h-400" />
          </div>
        </div>
      </div>
      <section className="h-screen">
        <div className="bg-white px-20 pt-20 grid lg:gap-8 md:gap-3 gap-8 place-items-center md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
          {" "}
          <div className="w-80 h-80 rounded-lg bg-gray-200">
          
          </div>{" "}
          <div className="w-80 h-80 bg-gray-200 "></div>{" "}
          <div className="w-80 h-80 bg-gray-200"></div>
        </div>
      </section>
    </>
  );
}

export default Landing;