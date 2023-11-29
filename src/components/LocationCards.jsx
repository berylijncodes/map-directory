import React from "react";

function LocationCards({ setSelectedLocation,item, index }) {
  const { latitude, longitude, company, city, phone, addr1, category } = item;

  const handleSelectLocation = () => {
    setSelectedLocation({
      lat: Number(latitude),
      lng: Number(longitude),
    });
  };
  return (
    <div
      key={index}
      className="px-8 border border-gray-200 bg-white rounded-lg shadow h-60"
    >
      <div className="justify-end flex">
        <button
          className="bg-[#A38A00] text-white text-sm p-1 max-w-xs capitalize mt-3"
          onClick={handleSelectLocation}
        >
          on map
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-[#D1B000] font-bold">{company}</h2>
        <p className="font-bold text-sm">{city}</p>
        <p>{phone}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-sm">{addr1}</p>
            <p className="font-medium text-xs text-[#D1B000]">{category}</p>
          </div>
          <div className="pr-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#979797"
              className="w-7 h-7"
              onClick={handleSelectLocation}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
