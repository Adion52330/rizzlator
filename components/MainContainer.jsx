import React, { useEffect, useState } from "react";

const MainContainer = () => {
  const [rizzLine, setRizzLine] = useState("");

  const fetchLine = () => {
    fetch("https://vinuxd.vercel.app/api/pickup", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRizzLine(data.pickup);
      });
  };

  useEffect(() => {
    fetchLine();
  }, []);

  return (
    <div className="h-screen rounded-xl max-w-6xl mx-auto bg-gray-700">
      <div className="flex justify-center items-center mt-24">
        <div className="px-8 py-4 bg-gray-600 rounded-2xl max-w-5xl flex flex-col items-center justify-center">
          <p className="text-4xl font-bold tracking-tighter rizz-txt">
            {rizzLine}
          </p>
          <p
            className="text-center font-bold mt-4 cool-btn btn-16 flex justify-center items-center"
            onClick={fetchLine}
          >
            &#8635;
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
