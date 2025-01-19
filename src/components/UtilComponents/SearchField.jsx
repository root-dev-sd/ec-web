import { Search } from "lucide-react";
import { useState } from "react";

const SearchField = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <div className="relative ml-5">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={20} />
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className=" pl-10 pr-4 py-2 w-11/12 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
};

export default SearchField;
