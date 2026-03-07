import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen flex items-end justify-center pb-10 duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">

        <button
          onClick={() => setColor("red")}
          className="px-5 py-2 rounded-xl text-white font-semibold bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-5 py-2 rounded-xl text-white font-semibold bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-5 py-2 rounded-xl text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("purple")}
          className="px-5 py-2 rounded-xl text-white font-semibold bg-purple-500 hover:bg-purple-600 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Purple
        </button>

      </div>
    </div>
  );
}

export default App;