/* eslint-disable react/no-unknown-property */
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
      <section className="p-2 rounded border-black border-2 ">
        <div className="">
          <div className="bg-white px-16 py-20 grid lg:gap-8 md:gap-3 gap-4 place-items-center md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
            <div className="w-80 h-80 rounded-lg bg-gray-200">
              <div className="flex flex-col p-7 items-center ">
                <div  className="bg-[#f2fafa] rounded-full h-[120px] w-[120px]">
                  {" "}
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#1e88e5"
                      class="p-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pt-4 flex flex-col gap-3 items-center justify-center">
                  <h1 className="text-2xl font-bold"> Create Account</h1>
                  <p className=" text-xl font-semibold text-center "> First you have to create a account  here</p>
                </div>
              </div>
            </div>
            <div className="w-80 h-80 bg-gray-200 ">
              <div className="flex p-7 flex-col items-center ">
                <div className="bg-[#f2fafa] rounded-full h-[120px] w-[120px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#1e88e5"
                    class="p-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
                <div className="pt-4 flex gap-3 flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold"> Search work </h1>
                  <p className=" text-xl font-semibold text-center "> Search the best freelance work here</p>
                </div>
              </div>
            </div>
            <div className="w-80 h-80 bg-gray-200">
              <div className="flex flex-col p-7 items-center ">
                <div className="bg-[#f2fafa] rounded-full h-[120px] w-[120px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#1e88e5"
                    class=" p-6 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
                <div className="pt-4 flex gap-3 flex-col items-center justify-center">
                <h1 className="text-2xl font-bold"> Save and apply </h1>
                <p className=" text-xl font-semibold text-center "> Search the best freelance work here</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
