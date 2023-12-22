import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userImg from "../../assets/user.png";
import logo from "/logos.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  console.log(user?.photoURL);
  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <div className='bg-transparent flex justify-end flex-row-reverse lg:flex-row lg:justify-around h-28 text-white items-center'>
        <div className='mx-auto lg:mx-0 mt-5 text-white flex flex-row items-center gap-4'>
          <img src={logo} className='w-24 rounded-full' />
          <h3 className='text-xl text-white font-bold'>TaskBoard</h3>
        </div>

        <div className='flex justify-center text-white'>
          {/*Navbar for desktop (Mobile Hidden) */}

          <div className='flex-none hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li className='mx-2'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='mx-2'>
                <NavLink to='/todo'>Todo Task</NavLink>
              </li>
              <li className='mx-2'>
                <NavLink to='/ongoing'>On-Going Task</NavLink>
              </li>
              <li className='mx-2'>
                <NavLink to='/complete'>Complete Task</NavLink>
              </li>
              {user ? (
                <>
                  <li className='mx-2'>
                    <NavLink to='/taskbroad'>Task Broad</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <li className='mx-2'>
                  <NavLink to='/login'>Join US</NavLink>
                </li>
              )}
            </ul>
          </div>
          {user && (
            <div className='dropdown ml-4 hidden lg:flex'>
              <label tabIndex='0' className='btn btn-ghost btn-circle'>
                {user?.photoURL ? (
                  <img
                    src={`${user?.photoURL}`}
                    className='w-24 rounded-full'
                  />
                ) : (
                  <img src={userImg} className='rounded-full' />
                )}
              </label>
              <ul
                tabIndex='0'
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li className='border-b-2 my-2'>
                  <div className='flex flex-col gap-2 items-center tooltip'>
                    <p> {user.displayName}</p>
                  </div>
                </li>
                <li>
                  <Link to='/dashboard'>DashBoard</Link>
                </li>
              </ul>
            </div>
          )}
          {/* Desktop Navbar section END */}

          {/* Mobile and Tablet navbar start */}

          <div className='w-3/12 lg:hidden'>
            <div className='dropdown'>
              <label tabIndex='0' className='btn btn-ghost btn-circle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  />
                </svg>
              </label>
              <ul
                tabIndex='0'
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li className='my-2 border-b-2 border-gray-400'>
                  <div className='flex flex-col gap-2 items-center tooltip '>
                    <label tabIndex='0' className='btn btn-ghost btn-circle'>
                      <img src={userImg} className='rounded-full' />
                    </label>
                    <p> User Name</p>
                  </div>
                </li>
                <li className='mt-2'>
                  <Link to='/dashboard'>DashBoard</Link>
                </li>

                <li className='mt-2'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='mx-2'>
                  <NavLink to='/todo'>Todo Task</NavLink>
                </li>
                <li className='mx-2'>
                  <NavLink to='/ongoing'>On-Going Task</NavLink>
                </li>
                <li className='mx-2'>
                  <NavLink to='/complete'>Complete Task</NavLink>
                </li>
                <li className='mt-2'>
                  <NavLink to='/login'>Join US</NavLink>
                </li>
                <li className='mt-1'>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
