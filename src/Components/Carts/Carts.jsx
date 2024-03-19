import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';
import WantToCook from '../WantToCook/WantToCook';

const Carts = ({ carts, handleCooking, cookings }) => {
  const totalCalories = cookings.reduce(
    (a, b) => a + parseInt(b.calories.slice(0, 3)),
    0
  );
  const time = cookings.reduce(
    (a, b) => a + parseInt(b.preparing_time.slice(0, 2)),
    0
  );
  console.log(totalCalories);
  return (
    <div className="w-full p-3 border-2 border-gray-500  bg-gray-50 rounded-3xl mt-5">
      <div>
        <WantToCook carts={carts} handleCooking={handleCooking}></WantToCook>
        <Cooking cookings={cookings}></Cooking>
      </div>

      <div className="mt-10 font-lexend font-bold text-lg">
        <h3 className="">Total Time = {time} minutes </h3>
        <h3>Total Calories = {totalCalories} calories </h3>
      </div>
    </div>
  );
};
Carts.propTypes = {
  carts: PropTypes.array.isRequired,
  handleCooking: PropTypes.func.isRequired,
  cookings: PropTypes.array.isRequired,
};
export default Carts;
