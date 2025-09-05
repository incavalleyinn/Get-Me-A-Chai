import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center background1  w-full justify-between pb-2 pt-10 px-4 border-t-2 border-black">
            <div className='flex justify-center items-center text-center mb-8 sm:mb-2'>
                <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <li>
                        <Link href="/about" className="text-xl text-text-secondary hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms" className="text-xl text-text-secondary hover:underline ">
                            Privacy Policy 
                        </Link>
                    </li>
                    <li>
                        <Link href="/how" className="text-xl text-text-secondary hover:underline">
                            How It Works
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-center mb-3 sm:mb-2 gap-4'>
                <div className="group relative">
                    <button>
                        <a href="https://www.github.com/codzhorizon">
                            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-7 cursor-pointer hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </button>
                    <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border  border-gray-300 bg-white py-2 text-sm font-boldshadow-md transition-all duration-300 ease-in-out  group-hover:scale-100 text-black">
                        GitHub
                    </span>
                </div>
                <div className="group relative">
                    <button>
                        <a href="mailto:kshitizsh.8@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 cursor-pointer hover:scale-115 duration-200 hover:stroke-blue-500" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                            </svg>
                        </a>
                    </button>
                    <span className="absolute -top-14 left-[50%] -translate-x-[50%] text-black z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm  shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        kshitizsh.8@gmail.com
                    </span>
                </div>
            </div>
            <div className='flex justify-center items-center mb-2'>
                <p className=" w-full mt-4 text-sm text-text-secondary md:mt-0">© 2025 Get Me A Chai, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
