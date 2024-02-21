import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const [card, setCard] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    username: "",
  });


  const handlechange = (e)=>{
   const {name , value} = e.target;
   setInputs((prevdata)=>({
      ...prevdata , [name]: value,
   }))
  }

  const handleform = (e) => {
   e.preventDefault();
   const newCard ={
     title: inputs.title,
     username: inputs.username,
   }

   setCard((prevcard)=>[...prevcard, newCard])
   setInputs(
    {
        title: "",
        username: "",
      }
   )
  };
       
  return (
    <>
      <section class="bg-white dark:bg-gray-900 ">
        <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div class="flex flex-col items-center max-w-sm mx-auto text-center">
            <p class="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn't exist. Here are some helpful
              links:
            </p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link to="/">
                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>Go back</span>
                </button>
              </Link>
              <Link to="/dashboard">
                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Take me home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* form */}
      <div className="w-[600px] m-auto">
        <form onSubmit={handleform}> 
          <label htmlFor="title">Enter title</label>
          <input
            className="bg-slate-100 w-full px-3 py-2 border-2 text-black"
            type="text"
            id="title"
            name="title"
            value={inputs.title}
            onChange={handlechange}
          />

          <label htmlFor="username">Enter title</label>
          <input
            className="bg-slate-100 w-full px-3 py-2 border-2 text-black"
            type="text"
            id="username"
            name="username"
            value={inputs.username}
            onChange={handlechange}
          />
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm mt-[10px] px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            add card
          </button>
        </form>
      </div>



      {card.map((ele,index)=>(
         
          <div>
           
            <h2>{ele.title}</h2>
            <p>{ele.username}</p>
          </div>
      ))}
    </>
  );
};

export default PageNotFound;
