import about from "../../assets/image/about.jpg";
import about2 from "../../assets/image/about-2.jpg";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { Helmet } from "react-helmet";
const About = () => {
  const [loopCount, setLoopCount] = useState(-1);

  const handleLoopComplete = () => {
    setLoopCount((prevLoopCount) => prevLoopCount + 1);
  };
  const navigate = useNavigate();
  return (
    <div className="mt-20 mb-40">
      <Helmet>
        <title>About | Task-Management</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row  justify-center gap-20 lg:gap-8 max-w-5xl mx-auto">
        <div className="flex-1 relative">
          <img
            className="border-[1rem] w-full  rounded-md shadow-2xl border-white"
            src={about}
            alt="image"
          />
          <img
            className="absolute w-3/4 sm:w-3/4 -bottom-20 rounded-md border-[.8rem] border-white -left-20"
            src={about2}
            alt="image2"
          />
        </div>
        <div className="flex-1 space-y-6 p-2">
          <h3 className="text-sm lg:text-lg text-gray-400 font-bold">
            ABOUT TRAVIO
          </h3>
          <h1 className="text-2xl font-bold text-[#061a3a] dark:text-gray-400 lg:text-5xl ">
            Bangladesh{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={["Task Manager Agency Company Since 2023"]}
                loop={loopCount}
                cursor
                cursorStyle="❤️"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopComplete={handleLoopComplete}
              />
            </span>
          </h1>
          <p className="text-sm mt-10 lg:text-lg text-gray-600 dark:text-gray-200">
            ntroducing TaskManagerPro, your all-in-one solution for efficient
            task management. In the fast-paced world we live in, staying
            organized and on top of your tasks is crucial for success.
            TaskManagerPro is designed to streamline your workflow, enhance
            collaboration, and boost productivity. One of the standout features
            of TaskManagerPro is its intuitive and user-friendly interface.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className=" p-4 px-6 text-white duration-700 font-semibold rounded-sm capitalize bg-[#ff7c5b] hover:bg-[#061a3a]"
          >
            Let’s Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
