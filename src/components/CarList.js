// for retrive data from the store or state we use the useSelectore hook
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../Store";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    if (!car) {
      console.log("وروره په دې وریبل کې ډیټا نشته ");
    } else {
      dispatch(removeCar(car.id));
    }
  };

  // retrive multiple data from the store we use the map method the method is lik a loope
  const renderdCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleCarDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  console.log(cars);

  return (
    <div className="car-list">
      {renderdCars}
      <hr />
    </div>
  );
}

export default CarList;
