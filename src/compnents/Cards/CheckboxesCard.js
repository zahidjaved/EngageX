import React, { useState } from "react";
import CardLayout from "./CardLayout";
import { CardLayoutNew } from "./CardLayout";
import { Checkboxdata } from "../Data";

const CheckboxesCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [inputData, setInputData] = useState({
    titlee: "",
    datee: "",
    timee: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      titlee: inputData.titlee,
      datee: inputData.datee,
      timee: inputData.timee,
    };
    setCards((prevCards) => [...prevCards, newCard]);

    setInputData({
      titlee: "",
      datee: "",
      timee: "",
    });
    setShowModal(false);
  };
  return (
    <>
      {Checkboxdata.map((data, id) => {
        return (
          <CardLayoutNew>
            <div key={id}>
              <div className="flex py-[10px]">
                <div className="flex items-center h-5 w-[4%]">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="ms-2 text-sm w-[80%]">
                  <label
                    htmlFor="helper-checkbox"
                    className="font-medium  dark:text-gray-300"
                  >
                    {data.title}
                  </label>
                  <div className="flex justify-between w-full">
                    <p
                      id="helper-checkbox-text"
                      className="w-[90%] text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      {data.tim}
                    </p>
                  </div>
                </div>
                <p className="w-[10%] flex justify-end">{data.dat}</p>
              </div>
            </div>
          </CardLayoutNew>
        );
      })}

      {cards.map((ele, index) => (
        <CardLayoutNew>
          <div key={index}>
            <div className="flex py-[10px]">
              <div className="flex items-center h-5 w-[4%]">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ms-2 text-sm w-[80%]">
                <label
                  htmlFor="helper-checkbox"
                  className="font-medium  dark:text-gray-300"
                >
                  {ele.titlee}
                </label>
                <div className="flex justify-between w-full">
                  <p
                    id="helper-checkbox-text"
                    className="w-[90%] text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    {ele.timee}
                  </p>
                </div>
              </div>
              <p className="w-[10%] flex justify-end">{ele.datee}</p>
            </div>
          </div>
        </CardLayoutNew>
      ))}

      {/* add new task button */}
      <CardLayoutNew>
        <button
          className="block 0 focus:outline-none capitalize font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
          onClick={() => setShowModal(true)}
        >
          + Add new task
        </button>
      </CardLayoutNew>

      {/* Modal to add new checkbox */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 ">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="titlee">Enter title</label>
                    <input
                      className="bg-slate-100 w-full px-3 py-2 border-2"
                      type="text"
                      id="titlee"
                      name="titlee"
                      value={inputData.titlee}
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
                      className="mt-[15px] bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      add card
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add new checkbox
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CheckboxesCard;
