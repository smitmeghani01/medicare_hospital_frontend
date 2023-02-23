import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  return (
    <div className="flex space-x-3 text-base font-title items-center py-5 text-tertiarygrey-500 w-[50%]">
      <FontAwesomeIcon className="text-[20px]" icon={faSearch} />
      <input
        value={props?.searchValue}
        onKeyDown={props?.onSearch}
        placeholder="Search appointments, patients, etc."
        className="bg-gray-100 flex-grow"
      />
    </div>
  );
}

export default SearchBar;
