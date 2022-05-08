import { useContext } from "react";
import Card from "../components/ui/Card";
import FavoritesContext from "../store/favorite-context";
import MeetUpList from "../components/Meetups/MeetUpList";

function FavoritePage() {
  const favoriteContx = useContext(FavoritesContext);
  let context;
  if(favoriteContx.totalFavorites === 0){
      context = <p>You have no favorite yet...</p>;
  }else{
      context = <MeetUpList meetups = { favoriteContx.favorites } />
  }

  return (
    <section>
      <h1>My Favorites</h1>
       {context}
    </section>
  );
}

export default FavoritePage;
