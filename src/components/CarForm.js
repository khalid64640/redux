import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../Store";
import "bulma/css/bulma.css";

function CarForm() {
  const dispatch = useDispatch();

  // the useSelector function give me all state from the state and we use the destructuring object for extracting the name and cost from the boject 
  const {name,cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  });

  
  // console.log(name);
  // console.log(cost);
 

  // const cost = useSelector((state) => {
  //   return state.form.cost;
  // });



  // when we write text in the input box the value of input box store in the state
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  // function for the second input box when the user enter the text in the box 
  // this function take the text from the input box in store the carCost variable
  //and we call the changeCost function by the dispatch function to store the input value 
  //in the state
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  // function for the form submit not load the browser

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch(addCar({
    //   name: name,
    //   cost: cost
    // }));

    dispatch(addCar({ name, cost }))
  }

  return (
    <div className="car-form panel p-5">
      <h4 className="subtitle is-3 has-text-centered has-text-link">
        Add Car
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field-group">
            <div className="field">
              <label className="label">Name</label>
              <input
                type="string"
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="field">
              <label className="label">Cost</label>
              <input
                type="number"
                className="input is-expanded"
                value={cost || ""}
                onChange={handleCostChange}
              />
            </div>
          </div>

          <div className="field mt-2">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
