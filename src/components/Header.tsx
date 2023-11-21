import '../style/header.css';
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>Boba Games</h1>
            <nav>
                <NavLink to="/">Главная</NavLink>  
                <NavLink to="/favs">Избранное</NavLink>  
                <Link to="">О сайте</Link>
            </nav>
        </header>
    );
  }
  
  export default Header;