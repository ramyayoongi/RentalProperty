import React from 'react'

function agent() {
    return (
        <div>
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">Jessica Jones, <span className="font-light text-gray-500">27</span></h1>
                        <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

                        <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p className="mt-2 text-gray-500">University of Computer Science</p>
                    </div>

                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        <button
                            className="text-indigo-500 py-2 px-4  font-medium mt-4"
                        >
                            Show more
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default agent