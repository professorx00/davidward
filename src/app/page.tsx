/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-500 to-slate-800 ">
      <section className="bg-gradient-to-tr from-bgGray via-bgGray to-dark rounded-xl p-24 border-slate-900 m-4 w-7/12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              David Ward
            </h1>
            <h3 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-xl xl:text-4xl text-resumeBlue dark:text-white">
              Full Stack Developer
            </h3>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              React JS, Vue JS, React Native, Node JS, Nuxt JS, Next JS, Express
              JS, Passport JS,HTML 5,Handlebars, Firebase
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-resumeBlue rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mx-7 m-5"
            >
              Contact
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-resumeBlue rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mx-7 m-5"
            >
              Portfolio
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center lg:items-center xl:border-8 xl:border-resumeBlue xl:rounded-full xl:bg-slate-700">
            <Image
              src="/me-blue.png"
              width={500}
              height={500}
              alt="Picture of Dave"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full ">
          <div className="text-lg md:text-xl italic font-semibold text-resumeBlue dark:text-white w-full min-w-full flex flex-col md:flex-row">
            <div className="flex flex-row">
              <svg
                className="w-8 h-8 text-resumeBlue dark:text-gray-600 mb-10 mx-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <p className="mt-4">
                When you have a dream, you've got to grab it and never let go.
              </p>
              <svg
                className="w-8 h-8 text-resumeBlue dark:text-gray-600 md:mb-4 md:mx-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>

            <p className="mt-10">-Carol Burnett</p>
          </div>
        </div>
      </section>
      <section className="bg-dark rounded-xl p-24 border-slate-900 w-7/12 ">
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center md:text-5xl xl:text-6xl text-resumeBlue">
          Technologies Known
        </h1>
        <div className="flex flex-row gap-6">
          <div className="w-1/2">
            <div className="mb-1 text-base font-medium text-orange-300 dark:text-blue-500">
              React
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-orange-300 h-5 rounded-full w-[75%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-amber-300 dark:text-blue-500">
              Nuxt JS
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-amber-300 h-5 rounded-full w-[65%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-rose-300 dark:text-blue-500">
              Next JS
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-rose-300 h-5 rounded-full w-[65%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-blue-300 dark:text-blue-500">
              Express JS
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-300 h-5 rounded-full w-[75%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-green-300 dark:text-blue-500">
              React Native
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-green-300 h-5 rounded-full w-[35%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-resumeBlue dark:text-blue-500">
              Microsoft SQL
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-resumeBlue h-5 rounded-full w-[65%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-fuchsia-300 dark:text-blue-500">
              Python
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-fuchsia-300 h-5 rounded-full w-[35%]"></div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-1 text-base font-medium text-resumeBlue dark:text-blue-500">
              Javascript
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-resumeBlue h-5 rounded-full w-[90%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-red dark:text-blue-500">
              GIT
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-red h-5 rounded-full w-[70%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-green-300 dark:text-blue-500">
              MongoDB
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-green-300 h-5 rounded-full w-[45%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-rose-300 dark:text-blue-500">
              Vue 2/3
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-rose-300 h-5 rounded-full w-[85%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-orange-300 dark:text-blue-500">
              Adobe Illustrator
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-orange-300 h-5 rounded-full w-[75%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-blue-300 dark:text-blue-500">
              Adobe Photoshop
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-300 h-5 rounded-full w-[75%]"></div>
            </div>

            <div className="mb-1 text-base font-medium text-emerald-300 dark:text-blue-500">
              Django
            </div>
            <div className=" bg-gray-200 rounded-full h-5 mb-4 dark:bg-gray-700">
              <div className="bg-emerald-300 h-5 rounded-full w-[35%]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
