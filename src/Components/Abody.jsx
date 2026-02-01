import React from 'react'

function Abody() {
  return (
    <>
      <section>
        <div className="mx-auto w-11/12 sm:w-4/5 py-4 flex flex-col gap-4">
  <div className="flex justify-center">
    <img src="images/one.gif" alt="" className="w-[85%] h-auto" />
  </div>
  <div className="flex justify-center">
    <img src="images/two.webp" alt="" className="w-[85%] h-auto" />
  </div>
  <div className="flex justify-center">
    <img src="images/three.gif" alt="" className="w-[60%] h-[85%]" />
  </div>
  <div className="flex justify-center">
    <img src="images/four.gif" alt="" className="w-[85%] h-auto" />
  </div>
  <div className="flex justify-center">
    <img src="images/five.gif" alt="" className="w-[60%] h-[85%]" />
  </div>
  <div className="flex justify-center">
    <img src="images/six.gif" alt="" className="w-[85%] h-auto" />
  </div>
</div>


        <h4 className="px-4 sm:px-10 md:px-20 py-8 text-center sm:text-left text-sm sm:text-base md:text-lg">
          JOIN THE WAITLIST: BE FIRST TO SHOP OUR MODEST COLLECTION WHEN WE LAUNCH.
        </h4>

        <div className="px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
            <input 
              className="border border-gray-400 rounded-lg bg-white p-2 flex-1 sm:w-64 md:w-80" 
              type="text" 
              placeholder="Enter your email" 
            />
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            <img className="w-5 h-5" src="images/facebook.png" alt="" />
            <img className="w-5 h-5" src="images/instagram.png" alt="" />
            <img className="w-5 h-5" src="images/tik-tok.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Abody
