import PropTypes from 'prop-types';

import { MdOutlineWatchLater } from 'react-icons/md';
import { FaFire } from 'react-icons/fa';

const Item = ({ recipe, handleCarts }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    calories,
    preparing_time,
    recipe_image,
  } = recipe;

  return (
    <div className="w-full h-full">
      <div className="card w-full h-full card-compact border-2 border-gray-500  bg-base-100 shadow-xl p-3">
        <figure>
          <img src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-lexend">{recipe_name}</h2>
          <p className="font-fira">{short_description}</p>
          <div>
            <p className="font-bold font-lexend">Ingredients:06 </p>
            <ul className="font-fira list-disc pl-5">
              {ingredients.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between ">
            <p className="flex gap-2 items-center">
              <MdOutlineWatchLater></MdOutlineWatchLater> {preparing_time}
            </p>
            <p className="flex gap-2 items-center">
              <FaFire></FaFire> {calories}
            </p>
          </div>

          <div className="card-actions justify-start">
            <button
              onClick={() => handleCarts(recipe)}
              className="btn bg-[#0BE58A] font-bold font-fira"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCarts: PropTypes.func.isRequired,
};
export default Item;
