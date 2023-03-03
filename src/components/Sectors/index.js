const Sectors = () => {
  return (
    <div className="w-[90%] lgw-[80%] mx-auto mt-32 mb-16">
      <div className="w-full flex flex-row items-center">
        <div className="lg:w-[150px] text-zinc-800">Our Sectors</div>
        <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
      </div>
      <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
        Some of the economic sector.
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 h-[500px] ">
        <div className="row-span-2 sector relative">
          <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
            Low Carbon BioFuels
          </div>
        </div>
        <div className="row-span-2 sector relative">
          <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
            Solar and Wind
          </div>
        </div>
        <div className="row-span-2 sector relative">
          <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
            Food and Pharmaceuticals
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
