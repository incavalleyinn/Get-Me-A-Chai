"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [topCreators, setTopCreators] = useState([]);
  const [newCreators, setNewCreators] = useState([]);
  const [activeTab, setActiveTab] = useState("top");

  useEffect(() => {
    fetch("/api/topcreators")
      .then((res) => res.json())
      .then(setTopCreators)
      .catch(() => setTopCreators([]));
    fetch("/api/newcreators")
      .then((res) => res.json())
      .then(setNewCreators)
      .catch(() => setNewCreators([]));
  }, []);

  const creatorsToShow = activeTab === "top" ? topCreators : newCreators;

  return (
    <div className="flex-1 background2">
      <div className="h-full w-full darkbackground  customborder  px-6 py-12 pb-[75px] sm:pb-[130px]  background1">
        <section className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">Support the creators you love.</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary">Get Me A Chai is a place where you can directly support your favorite artists, musicians, writers, and more. Get exclusive content and a closer connection to the creators behind the work.</p>
          <div className="flex relative mx-auto max-w-2xl gap-10 justify-center items-center flex-col sm:flex-row ">
            <button
              className="relative group  transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-12 text-lg pl-[4rem] pr-6 mainbtn cursor-pointer"
            >
              <div
                className="absolute left-0 top-0 mt-1 ml-1 bg-white text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-10 w-10"
              >
                <img
                  src="/animatedchai.gif"
                  alt="Chai.png"
                  width={400}
                  height={400}
                  className="flex h-8 w-8 justify-center items-center self-center"
                />
              </div>

              <Link href="/codzhorizon">Buy Me a Chai</Link>

              <div
                className="bg-orange-400 absolute flex rounded-full animate-ping opacity-75 h-5 w-5 -top-2 -right-2"
              ></div>
              <div
                className="bg-orange-600 absolute flex rounded-full scale-[90%] h-5 w-5 -top-2 -right-2"
              ></div>
            </button>
            <button
              className="relative group  transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[-3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-12 text-lg pl-[4rem] pr-6 mainbtn  cursor-pointer"
            >
              <div
                className="absolute left-0 top-0 mt-1 ml-1 bg-white text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-10 w-10"
              >
                <img
                  src="/faq.gif"
                  alt="faq.png"
                  width={400}
                  height={400}
                  className="flex h-8 w-9 justify-center items-center self-center"
                />
              </div>
              <Link href="/how">How to do</Link>
            </button>

          </div>
        </section>
      </div>
      <div className="bg-transparent">
        <section className="mb-16 px-6 py-12">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">It’s simple</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group flex flex-col gap-2 overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-2xl p-4">
              <div className="flex justify-center items-center  ">
                <img src="/man.gif" alt="man.gif" className="h-28 w-28" />
              </div>
              <div className=" text-center">
                <h3 className="mb-1 text-xl font-bold text-text-primary">Find a creator you love</h3>
                <p className="text-sm text-text-secondary">Writers, designers, developers, musicians, and more.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-2 overflow-hidden rounded-xl  transition-shadow duration-300 hover:shadow-2xl p-4">
              <div className="flex justify-center items-center  ">
                <img src="/group.gif" alt="group.gif" className="h-28 w-28" />
              </div>
              <div className=" text-center">
                <h3 className="mb-1 text-xl font-bold text-text-primary">Buy them a chai</h3>
                <p className="text-sm text-text-secondary"> Quick, easy, and heartfelt.</p>
              </div>
            </div>
            <div className="group flex flex-col gap-2 overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-2xl p-4">
              <div className="flex justify-center items-center  ">
                <img src="/coin.gif" alt="coin.gif" className="h-28 w-28" />
              </div>
              <div className=" text-center">
                <h3 className="mb-1 text-xl font-bold text-text-primary">Feel good </h3>
                <p className="text-sm text-text-secondary">You just made someone’s day a little warmer.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 pt-12">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Browse by Category</h2>
          <div className="border-b border-gray-200 mb-8">
            <nav aria-label="Tabs" className="-mb-px flex justify-center space-x-8">
              <button
                className={`whitespace-nowrap border-b-2 px-1 py-4 text-base font-semibold transition-colors ${activeTab === "top"
                  ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "border-transparent text-text-secondary hover:border-gray-300 hover:text-text-primary"
                  }`}
                onClick={() => setActiveTab("top")}
              >
                Top Supported Creators
              </button>
              <button
                className={`whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium transition-colors ${activeTab === "new"
                  ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "border-transparent text-text-secondary hover:border-gray-300 hover:text-text-primary"
                  }`}
                onClick={() => setActiveTab("new")}
              >
                New Creators
              </button>
            </nav>
          </div>
          <section className="relative px-2 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {creatorsToShow.length === 0 ? (
                <div className="text-center  absolute m-auto top-5 w-full">No creators yet.</div>
              ) : (
                creatorsToShow.map((creator) => (
                    <a className="article-wrapper m-auto w-[230px] sm:w-[240px]" key={creator.username}
                      href={`/${creator.username}`}>
                      <div className="rounded-lg container-project">
                        <img
                          src={creator.profilePicture || "/pfp.svg"}
                          alt={creator.username}
                          className="w-full h-full rounded-lg border-1 border-black"
                        />
                      </div>
                      <div className="project-info">
                        <div className="flex-pr">
                          <div className="project-title text-nowrap">@{creator.username}</div>
                          <div className="project-hover">
                            <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                        </div>
                        <div className="types">
                          {creator.total && (
                            <span className="project-type">Raised: ₹{creator.total}</span>
                          )}
                        </div>
                      </div>
                    </a>
                ))
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}


