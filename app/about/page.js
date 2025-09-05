import Link from 'next/link'

export const metadata = {
  title: 'About - GetMeAChai',
}

export default function AboutUs() {
  return (
    <div className="container flex-1  min-h-screen">
      <div className="h-full w-full  px-6 py-12 pb-[75px] sm:pb-[130px] background1 bg-opacity-90">
        {/* Hero Section */}
        <section className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            Behind the Cup: Our Story
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Get Me A Chai was brewed with the idea that small, kind gestures
            can fuel creativity. We&apos;re here to empower creators and help fans
            show appreciation in a simple and meaningful way.
          </p>
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-22 w-22 " viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5" />
              <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
            </svg>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16 px-6 py-12">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight ">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Empower Creators */}
            <div className="group flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition">
              <div className="mb-4 ">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold  mb-2">
                Empower Creators
              </h3>
              <p className="text-sm ">
                Creators put their heart into their work — we give them tools to receive appreciation and keep going.
              </p>
            </div>

            {/* Foster Connection */}
            <div className="group flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition">
              <div className="mb-4 ">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2m5-10v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold  mb-2">
                Foster Connection
              </h3>
              <p className="text-sm ">
                Fans can express gratitude directly. It’s not about money — it’s about human connection.
              </p>
            </div>

            {/* Fuel Ideas */}
            <div className="group flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition">
              <div className="mb-4">
                <svg
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4V2m6.364 3.636l1.414-1.414M22 12h-2M4 12H2m3.636-6.364l-1.414 1.414M12 22v-2m6.364-1.636l1.414 1.414M4.636 17.364l1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold  mb-2">
                Fuel Ideas
              </h3>
              <p className="text-sm">
                A chai can go a long way. Every sip is a step toward someone&apos;s next big idea.
              </p>
            </div>
          </div>
        </section>

        <section className='flex flex-col sm:flex-row items-center justify-center gap-12'>

          {/* Contact Section */}
          <div className="text-center  ">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">
              Want to collaborate or have questions? Reach out to me!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Email Contact */}
              <a
                href="mailto:kshitizsh.8@gmail.com"
                className=" w-auto rounded-lg  px-4 py-2.5 bg-white text-black hover:bg-gray-100 transition flex  justify-center items-center gap-3.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                <span>
                  Email Me
                </span>
              </a>

              {/* GitHub Contact */}
              <a
                href="https://github.com/CodzHorizon"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-auto rounded-lg bg-white px-4 py-2.5 text-black hover:bg-gray-100 transition flex  justify-center items-center gap-3.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                <span>
                  Visit my GitHub
                </span>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center ">
            <h2 className="text-2xl font-bold mb-4">
              Want to support a creator?
            </h2>
            <p className="mb-6">
              Find someone doing amazing work and buy them a chai today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative group flex justify-center w-full">
                <div
                  className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10"
                >
                  <div
                    className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"
                  ></div>

                  <div
                    className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black"
                  >
                    <Link
                      href="/"
                      className="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
                    >
                      Back to Home
                    </Link>
                  </div>
                  <div
                    className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}



