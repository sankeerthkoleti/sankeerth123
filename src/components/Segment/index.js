const Segment = () => {
    return (
      <div className="rounded-xl mb-5">
        <div className="ml-5 mr-5 lg:ml-20 lg:mr-20 bg-[#D3D3D3] flex p-4 rounded-md">
          <img src="/Frame.png" alt="Frame" />
          <p className="text-md lg:text-2xl font-bold text-[#030303] ml-4">Segments</p>
        </div>
        <ul className="p-4 ml-5 mr-5 flex overflow-x-auto lg:justify-around lg:ml-20 lg:mr-20 space-x-2">
  <li className="bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg')] rounded-lg h-[30vw] w-[30vw] lg:h-60 lg:w-40 p-4 flex flex-col justify-between items-center">
    <p className="text-sm lg:text-lg font-bold text-[#030303]">Residential</p>
    <button className="bg-[#1B1B1B] h-7 text-[7px] lg:text-[15px] w-full lg:w-40 lg:h-8 text-[#ffffff] rounded-xl">View More</button>
  </li>
  <li className="bg-cover bg-[url('https://i.pinimg.com/736x/8b/33/80/8b3380d7de68e5ec90c4ea17d1c7a404.jpg')] rounded-lg h-[30vw] w-[30vw] lg:h-60 lg:w-40 p-4 flex flex-col justify-between items-center">
    <p className="text-sm lg:text-lg font-bold text-[#030303]">Institutional</p>
    <button className="bg-[#1B1B1B] h-7 text-[7px] lg:text-[15px] w-full lg:w-40 lg:h-8 text-[#ffffff] rounded-xl">View More</button>
  </li>
  <li className="bg-cover bg-[url('https://3.imimg.com/data3/AO/VT/GLADMIN-25576/commercial-buildings-250x250.jpg')] rounded-lg h-[30vw] w-[30vw] lg:h-60 lg:w-40 p-4 flex flex-col justify-between items-center">
    <p className="text-sm lg:text-lg font-bold text-[#030303]">Commercial</p>
    <button className="bg-[#1B1B1B] h-7 text-[7px] lg:text-[15px] w-full lg:w-40 lg:h-8 text-[#ffffff] rounded-xl">View More</button>
  </li>
</ul>
      </div>
    );
  };
  
  export default Segment;