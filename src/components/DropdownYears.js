import { useState, useEffect } from "react";

const url = "http://127.0.0.1:3000";

function DropdownYears() {
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch(url + `/years`)
      .then((r) => r.json())
      /*
      .then(years => setYears(years))
      */
      .then((years) => console.log(years));
  }, []);

  return (
    <div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Year{" "}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {/**************************************

          {years.map((year) => (
            <EventList key={year.id}/>
          ))}



          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>


            *******************************************/}
        </ul>
      </div>
    </div>
  );
}

export default DropdownYears;
