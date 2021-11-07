import Card from '../ui/Card';
import MeetupFormClass from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form className={MeetupFormClass.form}>
        <div className={MeetupFormClass.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title"></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image"></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address"></input>
        </div>
        <div className={MeetupFormClass.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description"></textarea>
        </div>
        <div className={MeetupFormClass.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;