import PropTypes from 'prop-types';
import Item from '../Item/Item';

const Items = ({ recipes, handleCarts }) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 mt-5 gap-5 w-full">
      {recipes.map(recipe => (
        <Item
          key={recipe.recipe_id}
          recipe={recipe}
          handleCarts={handleCarts}
        ></Item>
      ))}
    </div>
  );
};

Items.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleCarts: PropTypes.func.isRequired,
};
export default Items;
