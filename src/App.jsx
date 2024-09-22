import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Effect to apply the appropriate class based on the theme
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    document.body.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:favourdomirin@gmail.com";
  };
  return (
    <div className="m-8 font-semibold">
      <div className="grid mx-5 hi w-full">
        <div className="justify-end">
          <p className="text-2xl inline font-bold">Mod</p>
          <p className="text-2xl text-blue-500 inline font-bold">X</p>
        </div>
        <div className="mt-3 grid grid-cols-4 hd lg:mx-12">
          <a href="#" className="text-blue-500 font-semibold">
            Home
          </a>
          <a
            href="https://favouromirin.netlify.app/about"
            className="font-semibold"
          >
            About
          </a>
          <a
            href="https://favouromirin.netlify.app/portfolio"
            className="font-semibold"
          >
            Works
          </a>
          <a
            href="https://favouromirin.netlify.app/contact"
            className="font-semibold"
          >
            Contacts
          </a>
        </div>
        <div className="flex gap-2 sm:mr-5 justify-end">
          <button
            onClick={toggleMode}
            className={`w-20 transition-colors duration-500 ${
              isDarkMode ? "bg-gray-100" : "bg-black"
            }`}
          >
            {isDarkMode ? (
              <div className="absolute -ml-3 -mt-3 text-sm text-black">
                ☀️ dark
              </div>
            ) : (
              <div className={`absolute text-sm -mt-3 ${
                isDarkMode ? " text-black" : " text-white"
              }`}>light 🌘</div>
            )}
          </button>
          <button
            className={`transition-colors duration-500 text-sm px-2 py-1 ${
              isDarkMode ? "bg-gray-100 text-black" : "bg-black text-white"
            }`}
            onClick={handleEmailClick}
          >
            Let's talk
          </button>
        </div>
      </div>
      <div>
        <div className="grid  md:grid-cols-2 gap-5 mt-20 mx-3 lg:mx-24">
          <div className="shadow white p-10 rounded-3xl gap-5 grid lg:grid-flow-col">
            <img
              src="https://favouromirin.netlify.app/image2.png"
              className="rounded-br-3xl flex items-center rounded-tl-3xl"
              style={{ maxHeight: "250px" }}
            ></img>
            <div className=" mt-12">
              <p className="text-sm text-gray-400">A WEB DEVELOPER</p>
              <p className="text-3xl font-bold">
                Favour <br />
                Omirin.
              </p>
              <p className="font-semibold text-gray-500 mt-3">
                I'm a Web Designer based in Nigeria.
              </p>{" "}
              <a href="https://favouromirin.netlify.app/resume">
                <span class="material-icons w-full flex justify-end mt-8 text-gray-300">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="grid gap-5 font-semibold">
            <div className=" shadow white p-4 px-9 rounded-3xl">
              <div className="inline">
                <p className="inline text-gray-500">LATEST WORK AND</p>
                <p className="inline text-blue-500"> FEATURED </p>
                <p
                  className="inline text-gray-400 absolute text-2xl"
                  style={{ marginTop: "-1px" }}
                >
                  *
                </p>
              </div>
              <div className="inline p-2"></div>
              <div className="inline">
                <p className="inline text-gray-500">LATEST WORK AND</p>
                <p className="inline text-blue-500"> FEATURED</p>
                <div className="inline p-1"></div>
                <p
                  className="inline text-gray-400 absolute text-2xl"
                  style={{ marginTop: "-1px" }}
                >
                  *
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="shadow white p-10 rounded-3xl">
                <img
                  className="mb-5 w-full"
                  style={{ height: "120px", width: "300px" }}
                  src="./025ed5cc-8146-478b-b824-4c3ebc469c85.jpg"
                  alt=""
                />
                <p className="text-sm text-gray-400">MORE ABOUT ME</p>
                <p className="text-2xl">Credentials</p>
                <a href="https://favouromirin.netlify.app/about">
                  <span class="material-icons w-full flex justify-end -mt-10 text-gray-300">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="shadow white p-10 rounded-3xl">
                <img
                  className="mb-5  w-full"
                  style={{ height: "120px", width: "300px" }}
                  src="./21e9f360-b00b-42d9-a436-93229ca5b757.jpg"
                  alt=""
                />
                <p className="text-sm text-gray-400">SHOWCASE</p>
                <p className="text-2xl">Projects</p>
                <a href="https://favouromirin.netlify.app/portfolio">
                  <span class="material-icons w-full flex justify-end -mt-10 text-gray-300">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid  md:grid-flow-col my-5 gap-5 lg:mx-24  mx-3">
            <div className="shadow white p-10 rounded-3xl w-00">
              <img
                className=" w-full "
                style={{ maxHeight: "120px" }}
                src="./d1495e21-0617-4794-8eec-e16949ebb2b9.jpg"
                alt=""
              />
              <p className="text-sm mt-2 text-gray-400">BLOG</p>
              <p className="text-2xl">GFonts</p>
              <a href="https://favouromirin.netlify.app/blog">
                <span class="material-icons w-full flex justify-end -mt-10 text-gray-300">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="shadow white  p-10 rounded-3xl w-00">
              <img
                className="mt-4  w-full"
                style={{ maxWidth: "600px" }}
                src="./b31c9254-bbaa-4c6a-a6ac-62297125c7e9.jpg"
                alt=""
              />
              <p className="text-sm mt-14 text-gray-400">SPECIALIZATION</p>
              <p className="text-2xl">Services offering</p>
              <a href="https://favouromirin.netlify.app/resume">
                <span class="material-icons w-full flex justify-end -mt-10 text-gray-300">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="shadow  white p-10 rounded-3xl w-00">
              <img
                className=" w-full"
                style={{ maxWidth: "300px" }}
                src="./8d1120cf-c532-4c82-b0fc-52b3dc99a64c.jpg"
                alt=""
              />
              <p className="mt-10 text-sm text-gray-400">STAY WITH ME</p>
              <p className="text-2xl">Profiles</p>
              <a href="https://favouromirin.netlify.app/contact">
                <span class="material-icons w-full flex justify-end -mt-10 text-gray-300">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="grid md:grid-flow-col lg:mx-24 mx-3 gap-5">
            <div className="shadow white p-10 rounded-3xl">
              <div className="grid md:grid-cols-3 gap-5">
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }  p-3 rounded-3xl flex flex-col  items-center w-full`}
                >
                  <p className="text-3xl text-blue-500 mb-2">03</p>
                  <p className="text-sm text-gray-400">YEARS</p>
                  <p className="text-sm text-gray-400">EXPERIENCE</p>
                </div>
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }  p-3 rounded-3xl flex flex-col  items-center w-full`}
                >
                  <p className="text-3xl text-blue-500 mb-2">+125</p>
                  <p className="text-sm text-gray-400">CLIENTS</p>
                  <p className="text-sm text-gray-400">WORLDWIDE</p>
                </div>
                <div
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }  p-3 rounded-3xl flex flex-col  items-center w-full`}
                >
                  <p className="text-3xl text-blue-500 mb-2">+210</p>
                  <p className="text-sm text-gray-400">TOTAL</p>
                  <p className="text-sm text-gray-400">PROJECTS</p>
                </div>
              </div>
            </div>
            <div className="shadow white p-10 rounded-3xl">
              <p className="inline text-4xl">
                Let's <br />
                work{"     "}
              </p>
              {"     "}
              <p className="inline text-4xl text-blue-500"> together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
