import PropTypes from 'prop-types';
const Cooking = ({ cookings }) => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl text-center font-bold font-lexend">
        Currently cooking: {cookings.length}
      </h3>
      <div className="divider px-5"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {cookings.map((cooking, index) => (
                <tr key={index} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{cooking.recipe_name}</td>
                  <td>{cooking.preparing_time}</td>
                  <td>{cooking.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cookings: PropTypes.array.isRequired,
};
export default Cooking;
