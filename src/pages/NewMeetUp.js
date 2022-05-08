import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';


function NewMeetUpPage() {
   const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
      fetch(
          'https://meetup-react-53f62-default-rtdb.firebaseio.com/meetups.json', 
          {
              method: 'POST', 
              body: JSON.stringify(meetupData),
              headers: {
                'Content-Type': 'application-json'
              } 
          }).then(() => {
              navigate('/');
          })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
