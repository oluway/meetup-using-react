import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from 'react';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

  function handleSubmitedData(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const endteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: endteredAddress,
        description: enteredDescription
    }

  props.onAddMeetup(meetupData);
}

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmitedData}>
        <div className={classes.control}>
          <label htmlFor="title"> Title </label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image </label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Address </label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea
          ref={descriptionInputRef}
            type="description"
            required
            id="description"
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
