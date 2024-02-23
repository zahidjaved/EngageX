import React from "react";
import CardLayout from "./CardLayout";
import { CardLayoutNew } from "./CardLayout";

const DatePickerCard = () => {
  return (
    <>
      <div className=" border-2 border-zinc-300 rounded-md pr-[1px] mb-[11px]">
        <div className="flex items-center justify-center py-3 px-1">
          <div className=" w-full shadow-lg">
            <div className="md:p-2 p-2 dark:bg-gray-800 bg-white rounded-t">
              <div className="px-4 flex items-center justify-between">
                <span
                  tabIndex="0"
                  className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                >
                  February 2024
                </span>
                <div className="flex items-center">
                  <button
                    aria-label="calendar backward"
                    className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <button
                    aria-label="calendar forward"
                    className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler  icon-tabler-chevron-right"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between xl:pt-12 lg:pt-[20px] overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Mo
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Tu
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            We
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Th
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Fr
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Sa
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Su
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            1
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            2
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            3
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            4
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            5
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            6
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            7
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-full h-full">
                          <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <a
                              role="link"
                              tabIndex="0"
                              className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                            >
                              8
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            9
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            10
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            11
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            12
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            13
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            14
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            15
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            16
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            17
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            18
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            19
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            20
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            22
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            23
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            24
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            25
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            26
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            27
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            28
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            29
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            30
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default DatePickerCard;
