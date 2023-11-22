import React, { useEffect, useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto flex">
      <div className="bg-gray-100 w-3/5">
        <div className="px-5 py-2 bg-white shadow-lg border-b">
          <h4 className="font-medium text-xs uppercase">
            Amount of results: {data.length}
          </h4>
        </div>
        <div className="grid gap-4 grid-flow-row grid-cols-2 w-[95%] mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="px-8 border border-gray-200 bg-white rounded-lg shadow h-60"
            >
              <div className="justify-end flex">
                <button className="bg-[#A38A00] text-white text-sm p-1 max-w-xs capitalize mt-3">
                  on map
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-[#D1B000] font-bold">{item.company}</h2>
                <p className="font-bold text-sm">{item.city}</p>
                <p>{item.phone}</p>
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-sm">{item.addr1}</p>
                    <p className="font-medium text-xs text-[#D1B000]">
                      {item.category}
                    </p>
                  </div>
                  <div className="pr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#979797"
                      className="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
