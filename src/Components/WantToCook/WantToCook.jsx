import PropTypes from 'prop-types';
const WantToCook = ({ carts, handleCooking }) => {
  return (
    <div className="mt-5 font-fira">
      <h3 className="text-2xl text-center font-bold font-lexend">
        Want to cook:{carts.length}
      </h3>
      <div className="divider px-5"></div>
      <div>
        <div className="w-full font-fira">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="font-bold font-fira">
                  <th className="hidden md:block lg:block"></th>
                  <th className="p-1 md:p-3 lg:p-3">Name</th>
                  <th className="p-1 md:p-3 lg:p-3">Time</th>
                  <th className="p-1 md:p-3 lg:p-3">Calories</th>
                  <th className="p-1 md:p-3 lg:p-3"></th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, index) => (
                  <tr key={index} className="bg-base-200 font-fira">
                    <th className="hidden md:block lg:block  text-center md:p-3 lg:p-3 my-4">
                      {index + 1}
                    </th>
                    <td className="p-1 md:p-3 lg:p-3">{cart.recipe_name}</td>
                    <td className="p-1 md:p-3 lg:p-3">{cart.preparing_time}</td>
                    <td className="p-1 md:p-3 lg:p-3">{cart.calories}</td>
                    <td className="p-1 md:p-3 lg:p-3">
                      <button
                        onClick={() => handleCooking(cart)}
                        className="p-1 md:p-3 lg:p-3 rounded-2xl hover:bg-slate-400 font-fira font-bold border-0 bg-[#0BE58A]"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  carts: PropTypes.array.isRequired,
  handleCooking: PropTypes.func.isRequired,
};
export default WantToCook;
