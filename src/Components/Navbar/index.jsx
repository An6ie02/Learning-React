import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className="font-semibold text-lg">
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink 
          to='/'
          className={({ isActive }) => isActive ? activeStyle : ''}
          >
            All</NavLink>
        </li>
        <li>
          <NavLink 
          to='/clothes'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            Clothes</NavLink>
        </li>
        <li>
          <NavLink 
          to='/electronics'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            Electronics</NavLink>
        </li>
        <li>
          <NavLink 
          to='/furnitures'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            Furnitures</NavLink>
        </li>
        <li>
          <NavLink 
          to='/toys'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            Toys</NavLink>
        </li>
        <li>
          <NavLink 
          to='/others' 
          className={({ isActive }) => isActive ? activeStyle : ''}>
            Others</NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className="text-black/60">
          nataliamojica@gmail.com
        </li>
        <li>
          <NavLink 
          to='/my-orders'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            My Orders</NavLink>
        </li>
        <li>
          <NavLink 
          to='/my-account'
          className={({ isActive }) => isActive ? activeStyle : ''}>
            My Account</NavLink>
        </li>
        <li>
          <NavLink 
          to='/sign-in'
          className={({ isActive }) => isActive ? activeStyle : ''}>Sign-In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;