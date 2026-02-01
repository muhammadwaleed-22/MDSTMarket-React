import React from 'react'

function Hbody() {
  return (
    <>
    <section class="mt-5">
      <div class="flex flex-wrap justify-center items-start gap-4 w-full p-4">
        <img
          src="images/tv.webp"
          alt="TV"
          class="w-full sm:w-80 md:w-auto md:h-72 object-contain"
        />
        <img
          src="images/poster.jpg"
          alt="Poster"
          class="w-full sm:w-56 md:w-72 h-72 object-cover"
        />
      </div>
      <div class="px-4 sm:px-10 md:px-20">
        <h4
          class="mb-5 text-center sm:text-left text-sm sm:text-base md:text-lg"
        >
          JOIN THE WAITLIST: BE FIRST TO SHOP OUR MODEST COLLECTION WHEN WE
          LAUNCH.
        </h4>
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto my-5">
            <input
              class="border border-gray-400 rounded-lg bg-white p-2 flex-1 sm:w-64 md:w-80"
              type="text"
              placeholder="Enter your email"
            />
            <button
              class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          <div class="flex flex-wrap justify-center sm:justify-end gap-2">
            <img class="w-5 h-5" src="images/facebook.png" alt="" />
            <img class="w-5 h-5" src="images/instagram.png" alt="" />
            <img class="w-5 h-5" src="images/tik-tok.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hbody