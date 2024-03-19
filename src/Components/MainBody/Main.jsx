import { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Items from '../Items/Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cookings, setCookings] = useState([]);

  useEffect(() => {
    fetch('Recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const handleCooking = cooking => {
    const remainingCard = carts.filter(
      cart => cart.recipe_id !== cooking.recipe_id
    );

    setCarts(remainingCard);

    setCookings([...cookings, cooking]);
  };

  const handleCarts = cart => {
    const totalCards = [...carts, ...cookings];

    const isExist = totalCards.find(item => item.recipe_id == cart.recipe_id);

    if (!isExist) {
      const newCarts = [...carts, cart];
      setCarts(newCarts);
    } else {
      toast.warn('You have already selected this recipe...');
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mt-5 p-5 lg:mt-10">
        <h1 className="text-5xl mb-5 font-lexend font-bold">Our Recipes</h1>
        <p className="font-lexend text-black fill-slate-900">
          The goal at Damn Delicious is to make amazing food quick and easy. Its
          perfect for those <br /> who want yummy meals without spending hours
          in the kitchen.You can choose of our any delicious recipe.
        </p>
      </div>

      <div className="container mx-auto flex justify-between flex-col md:flex-row lg:flex-row gap-5">
        <div className="w-full md:w-[45%] lg:w-[58%]">
          <Items recipes={recipes} handleCarts={handleCarts}></Items>
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%]">
          <Carts
            carts={carts}
            handleCooking={handleCooking}
            cookings={cookings}
          ></Carts>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
