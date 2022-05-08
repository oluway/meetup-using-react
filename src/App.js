import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritePage from "./pages/Favorite";
import NewMeetUpPage from "./pages/NewMeetUp";
import MainNavigation from "./components/Layout/MainNavigation";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" exact element={ <AllMeetUpsPage /> } />
          <Route path="/new-meetup" element={ <NewMeetUpPage /> } />
          <Route path="favorite" element={ <FavoritePage /> } />
        </Routes>
        </Layout>
        
    </Router>
  );
}

export default App;
