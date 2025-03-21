import React from 'react'

export default function Signin() {
  return (
    <>
      {/* component */}
      <section className=" flex flex-col md:flex-row h-screen items-center">
        <div className="bg-orange-500hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus=""
                  autoComplete=""
                  required=""
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                  required=""
                />
              </div>
              {/* <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div> */}
              <button
                type="submit"
                className="w-full block bg-orange-500 hover:bg-orange-400 focus:bg-orange-500 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>
         
          
           

              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold mt-5"
              >
                Create an account
              </a>
            
          </div>
        </div>
      </section>
    </>

  )
}
