import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../Store";

function CarList() {

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.data);
  
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCarDelete = (car) => {
    if (!car) {
      console.log("Not! Found Data");
    } else {
      dispatch(removeCar(car.id));
    }
  };

  const renderdCars = filteredCars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderdCars}
      <hr />
    </div>
  );
}

export default CarList;
