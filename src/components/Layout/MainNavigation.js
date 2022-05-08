import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorite-context";
import { useContext } from 'react';


export default function MainNavigation() {
    const favoriteContx = useContext(FavoritesContext);

    return <header className={ classes.header }>
       <div className={ classes.logo }>Loan Shrek</div>
       <nav>
           <ul >
               <li><Link to="/">Some Link</Link></li>
               <li><Link to="/new-meetup">Add New MeetUp</Link></li>
               <li><Link to="/favorite">
                   My Favorite
                   <span className={classes.badge}> {favoriteContx.totalFavorites} </span>
                   </Link></li>
           </ul>
       </nav>
    </header>
}