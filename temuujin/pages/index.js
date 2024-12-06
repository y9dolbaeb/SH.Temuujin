export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-yellow-200 to-teal-300 min-h-screen p-8 flex">
      {/* Левый столбец */}
      <aside className="bg-white rounded-xl shadow-xl p-6 w-1/4 mr-8 relative overflow-hidden">
        {/* Украшение в виде градиента */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-purple-300 to-blue-300 rounded-t-xl"></div>

        {/* Фото и заголовок */}
        <div className="relative text-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/4/4d/Wojak.png"
            alt="Wojak"
            className="rounded-full w-32 h-32 mx-auto mt-8 border-4 border-white shadow-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Shinebayar Temuujin</h2>
          <p className="text-gray-600">Кто я такой то блять</p>
        </div>

        {/* Основная информация */}
        <div className="relative mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <span className="material-icons mr-2 text-blue-500">info</span> General Info
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Age:69</li>
            <li>Favorite Activity: Пинать хуй</li>
            <li>Hobby: Дереализация,Прокрастинация,Пинать хуи</li>
            <li>Philosophy: "Жизнь — это боль, но я всё равно пинаю её в ответ"</li>
          </ul>
        </div>

        {/* Навыки */}
        <div className="relative mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
            <span className="material-icons mr-2 text-green-500">star</span> My Skills
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Беру в рот профессионально</li>
            <li>Сосу free с гарантией</li>
            <li>Глотаю без остатка</li>
            <li>y9dolbaeb, но с опытом</li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div className="relative text-center mt-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Me</h3>
          <p className="text-gray-700 mb-2">Тема 300М от вас , обязательно свяжитесь со мной</p>
          <p className="text-2xl font-bold text-gray-800 mb-2">99999225</p>
          <a
            href="mailto:wojak@example.com"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            Email Me
          </a>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to My Website</h1>
          <p className="text-xl text-gray-600">
            Как же мне было похуй когда я делал эту залупу ебаную наконец-то блять!
          </p>
        </header>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the Project</h2>
          <p className="text-lg text-gray-700">
            Ебал блять в рот эту хуйню ебучую, потому что мне было абсолютно похуй, и даже желания не было что-либо делать. В принципе, я всё в рот ебал гандоны ебучие!
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Skills</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Беру в рот</li>
            <li>Сосу free</li>
            <li>Глотаю</li>
            <li>Уйду долбоёб</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-700">
            Если честно, я нихуя не сделал за последние пару месяцев. Просто профессионально пинал хуй, так же сногшибательно, как я их в рот брал.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Залупа 1</h3>
              <p className="text-gray-600">Тут нихуя нету</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Залупа 2</h3>
              <p className="text-gray-600">Тут тоже, долбоёб</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
