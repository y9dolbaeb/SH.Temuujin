import React, { useState } from "react";

export default function Task4() {
  const [isGrid, setIsGrid] = useState(false);

  const toggleLayout = () => {
    setIsGrid((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white pt-8">
      <div className="fixed top-5 left-0 right-0 flex justify-center items-center z-50">
        <h1 className="text-4xl text-black m-0">Объявление</h1>
      </div>

      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggleLayout}
          className="px-5 py-2 bg-black text-white rounded-md cursor-pointer"
        >
          {isGrid ? "Switch to Column" : "Switch to Grid"}
        </button>
      </div>

      <div
        className={`${
          isGrid
            ? "grid grid-cols-2 gap-10"
            : "flex flex-col gap-5 items-stretch"
        } max-w-screen-lg w-full mt-10`}
      >
        <div className="bg-white border-2 border-black rounded-lg flex flex-col justify-start p-4 text-left">
          <h2 className="m-0 text-2xl text-black">Погода</h2>
          <p className="mt-2 text-base text-black">
            Сегодня солнечно, температура +25°C. Отличное время для прогулки на улице!
          </p>
        </div>
        <div className="bg-white border-2 border-black rounded-lg flex flex-col justify-start p-4 text-left">
          <h2 className="m-0 text-2xl text-black">Новости</h2>
          <p className="mt-2 text-base text-black">
            На мировом рынке акций наблюдается значительный рост. Экономисты прогнозируют дальнейшие изменения.
          </p>
        </div>
        <div className="bg-white border-2 border-black rounded-lg flex flex-col justify-start p-4 text-left">
          <h2 className="m-0 text-2xl text-black">Совет дня</h2>
          <p className="mt-2 text-base text-black">
            Начните утро с зарядки и стакана воды. Это поможет вам зарядиться энергией на весь день.
          </p>
        </div>
        <div className="bg-white border-2 border-black rounded-lg flex flex-col justify-start p-4 text-left">
          <h2 className="m-0 text-2xl text-black">Событие</h2>
          <p className="mt-2 text-base text-black">
            В эти выходные в городе пройдет музыкальный фестиваль. Не упустите шанс насладиться живой музыкой!
          </p>
        </div>
      </div>
    </div>
  );
}
