/* eslint-disable react/no-unknown-property */
import { FaUserCircle } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* Nav content */}
      <div>
        <nav class="w-full my-5">
          <div class=" flex justify-between lg:gap-10 font-rail w-full">
            <div class="flex justify-between">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class=" text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a> Home</a>
                  </li>
                  <li>
                    <a>Recipes</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <div class=" flex justify-start items-center">
                <a class="hover:bg-slate-300">
                  <img
                    className="w-20  h-16 rounded-2xl"
                    src="https://i.ibb.co/6W51jmC/cooking-zone-logo-removebg-preview.png"
                    alt=""
                  />
                </a>
                <h3 className="text-3xl font-lexend font-extrabold  hidden md:block lg:block lg:text-4xl">
                  Cooking Zone
                </h3>
              </div>
            </div>
            <div class="navbar-center hidden lg:block  ">
              <ul class="menu menu-horizontal px-1 text-base">
                <li>
                  <a> Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>

                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative ">
                <input
                  className="bg-gray-100 font-bold text-black py-3 pl-10 w-28 md:w-44 lg:w-60 rounded-2xl"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
                <span className="absolute top-4 left-5">
                  <FaMagnifyingGlass></FaMagnifyingGlass>
                </span>
              </div>
              <div>
                <button className=" btn bg-[#0BE58A] text-xl rounded-full">
                  <FaUserCircle></FaUserCircle>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="text-white font-lexend">
        <div className=" w-full rounded-3xl h-auto md:h-[450px] lg:h-[600px] bg-[url(https://i.ibb.co/FW2K9bh/Rectangle-1.png)]  image-full bg-center">
          <div className="flex w-full h-full text-center px-5 md:px-20 lg:px-40 flex-col justify-center pt-5 md:pt-10 lg:pt-0 items-center space-y-3 md:space-y-5 lg:space-y-10">
            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-bold font-lexend">
              Discover an exceptional cooking class tailored for you!
            </h2>
            <p>
              Cooking zone is one of the best food blogs out there! Its a
              perfect blend of simplicity and adventure. Lindsays cooking
              website is all about fun, tasty recipes. Cooking zone is one of
              the best food blogs out there! Lindsays cooking website is all
              about fun, tasty recipes.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-5 ">
              <a href="">
                <div className="hover:bg-gray-300 border-2 w-40  rounded-3xl px-5 py-4 mb-5  bg-[#0BE58A] text-black">
                  Explore Now
                </div>
              </a>

              <a href="">
                {' '}
                <div className="hover:bg-slate-400 border-2 w-40 border-white rounded-3xl  px-5 py-4 text-white mb-5">
                  Our Feedback
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
