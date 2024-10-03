const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-500 w-full p-3 fixed top-0  z-50  ">
        <div className="text-white text-xl ">
          <h1>Countries App</h1>
        </div>
        <div className=" px-4 py-2 rounded">
          <input
            className="px-10 py-3 outline-none rounded "
            type="text"
            placeholder=" Searce countries "
          />
        </div>
      </header>
    </>
  );
};

export default Header;
