import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../Store";
function CarSearch() {
  const dispatch = useDispatch();

  // const searchTerm = useSelector((state) => {
  //   return state.cars.searchTerm;
  // });

  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  }; 

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label mt-2">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default CarSearch;
