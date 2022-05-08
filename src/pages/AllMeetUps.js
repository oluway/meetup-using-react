import MeetUpList from "../components/Meetups/MeetUpList";
import { useState, useEffect } from "react";


function AllMeetUpsPage() {
  const [isLoading, updateIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    updateIsLoading(true);
    fetch("https://meetup-react-53f62-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => 
      response.json()
    ).then((data) => {
        const meetups = [];
      for(const key in data){
         const meetup = {
            id: key,
            ...data[key]
         };
         meetups.push(meetup);
         console.log("What is here ", meetups)
      }  
      
      updateIsLoading(false);
      setLoadedMeetups(meetups)
    });
  }, [] )
  
  if (isLoading) {
    return <section><p>Loading ... </p> </section>;
  }

  return (
    <section>
      <h1>All Meet Ups</h1>
      <MeetUpList meetups={ loadedMeetups } />
    </section>
  );
}

export default AllMeetUpsPage;
