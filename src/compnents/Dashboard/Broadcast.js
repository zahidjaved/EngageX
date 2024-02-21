import React, { useEffect, useState } from "react";
import AsideBar from "./AsideBar";
import Topbar from "./Topbar";

function Broadcast() {

  const [cards, setCards] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    datee: "",
    timee: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputData((prevdata) => ({
      ...prevdata,
      [name]:value,
    }));
  };

  debugger
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      title: inputData.title,
      datee: inputData.datee,
      timee: inputData.timee,
    };
    setCards((prevCards) => [...prevCards, newCard]);

    setInputData({
      title: "",
      datee: "",
      timee: "",
    });
  };

  useEffect(() => {
    document.title = "Broadcast";
  }, []);
  return (
    <>
      {/* Asidebar */}
      <AsideBar />
      <main className="w-[84%] ml-auto pt-[39px] pr-[42px] ">
        {/* topbar */}
        <Topbar />

        {/* form data */}
        <div className="w-[700px] m-auto">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Enter title</label>
            <input
              className="bg-slate-100 w-full px-3 py-2 border-2"
              type="text"
              id="title"
              name="title"
              value={inputData.title}
              onChange={handleChange}
            />

            <label htmlFor="datee">Enter datee</label>
            <input
              className="bg-slate-100 w-full px-3 py-2 border-2"
              type="text"
              id="datee"
              name="datee"
              value={inputData.datee}
              onChange={handleChange}
            />

            <label htmlFor="datee">Enter timee</label>
            <input
              className="bg-slate-100 w-full px-3 py-2 border-2"
              type="text"
              id="timee"
              name="timee"
              value={inputData.timee}
              onChange={handleChange}
            />
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm mt-[10px] px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              add card
            </button>
          </form>
        </div>


        <div className="mt-[10px]">
        {cards.map((card, index) => (
          <div key={index} style={{ border: '1px solid', margin: '5px', padding: '5px' }}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
        </div>
      </main>
    </>
  );
}

export default Broadcast;
