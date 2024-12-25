import React from "react";
import banner from "/Banner.jpg"


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500"> new everyday!! </span>
            </h1>

            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, rem voluptas? Velit iure ipsam similique sint et
              possimus molestiae vitae fugiat omnis voluptas inventore ducimus
              voluptatum voluptates illo, quod minus harum expedita soluta,
              laboriosam in! Alias minus corrupti adipisci porro?
            </p>

            <label className="input input-bordered flex items-center gap-2  dark:bg-slate-900 dark:text-white dark:border">
              <input type="text" className="grow " placeholder="Email " />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
           
            </label>
          </div>

          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        <div className="order-1 w-full md:w-1/2 mx-5 mt-10">
        < img src={banner} className="w-92 h-92" alt=""/>
        
        </div>
      </div>
    </>
  );
}

export default Banner;
