import Card from '../ui/Card';
import MeetupFormClass from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descripRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descripRef.current.value;

    const meetupReq = {
      title: title,
      image: image,
      address: address,
      description: description
    }

    props.onAddMeetup(meetupReq);
  }

  return (
    <Card>
      <form className={MeetupFormClass.form} onSubmit={submitHandler}>
        <div className={MeetupFormClass.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef}></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef}></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef}></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descripRef}></textarea>
        </div>
        <div className={MeetupFormClass.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;