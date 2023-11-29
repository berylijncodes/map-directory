import React, { useEffect, useState } from "react";
import axios from "axios";

import MapComponent from "./components/MapComponent";
import LocationCards from "./components/LocationCards";

const url = process.env.REACT_APP_API_URL;

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 27.664827,
    lng: -83.915754,
  });

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
    <div className="container mx-auto flex overflow-hidden h-screen">
      <div className="bg-gray-100 w-3/5 overflow-y-auto">
        <div className="px-5 py-2 bg-white shadow-lg border-b overflow-y-auto">
          <h4 className="font-medium text-xs uppercase">
            Amount of results: {data.length}
          </h4>
        </div>
        <div className="grid gap-4 grid-flow-row grid-cols-2 w-[95%] mx-auto">
          {data.map((item, index) => (
            <LocationCards
              key={index}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              item={item}
            />
          ))}
        </div>
        <div style={{ height: "0.75rem" }}></div>
      </div>
      <div className="w-3/5 h-full">
        <MapComponent selectedLocation={selectedLocation} />
      </div>
    </div>
  );
}

export default App;
