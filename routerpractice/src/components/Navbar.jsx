import {Link} from 'react-router-dom';
function Navbar() {
   
    return ( 
        <>
        <ul>
            <li>
            <Link to='/'>
            Home Page
            </Link>
            </li>
            <li>
            <Link to='/about'>About Page </Link>
            </li>
            <li>
            <Link to='/dashboard'>Dashboard </Link>
            </li>
        </ul>
        </>
     );
}

export default Navbar;
