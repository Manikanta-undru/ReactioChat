import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className=" font-normal">
      <div className=" flex items-center bg-gray-100 rounded px-2 py-2">
        <BiSearch className=" text-xl text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full ml-2 bg-transparent text-sm   text-gray-400 placeholder:text-gray-400 focus-within:border-0 focus-within:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
