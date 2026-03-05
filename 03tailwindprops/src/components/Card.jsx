function Card({ name, description, image, btnText = "visit me" }) {
  // instead of using props.usernmae we did destructor it.
  // gave default value of btnText
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={name} />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          {btnText}
        </button>
        {/* here we can use btnText || "visit me" as well*/}
      </div>
    </div>
  );
}

export default Card;
