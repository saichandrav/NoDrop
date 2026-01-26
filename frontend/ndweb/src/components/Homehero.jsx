const Homehero = () => {
  return (
    <div className="flex flex-col items-center mt-5 sm:mt-10 lg:mt-30 ">
      
      <h1
        id="herosec"
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold leading-tight"
      >
        PURE WATER <br />
        <span className=" bg-linear-to-r from-blue-400 to-red-600 text-transparent bg-clip-text">
          DELIVERED, AT YOUR DOORSTEP
        </span>
      </h1>

      <p className="mt-5 text-md  sm:mt-8 text-md sm:text-lg text-center text-neutral-500 max-w-xl sm:max-w-3xl">
        Empower your convenience and keep hydration effortless with NO DROP.
        <br className="hidden sm:block" />
        Simplify your daily life with our smart water delivery app — order, track,
        and receive pure water cans right at your doorstep.
        Get started today and make hydration as seamless as a single tap!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 my-8 sm:my-10">
        <a
          href="#products"
          className="bg-linear-to-r from-blue-500 to-blue-800 py-3 px-4  rounded-md text-center text-white"
        >
          Order Now
        </a>
        <a
          href="#subscription"
          className="py-3 px-6 rounded-md border text-center"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Homehero;
