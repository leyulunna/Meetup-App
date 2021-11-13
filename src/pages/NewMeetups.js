import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetups() {
  const history = useHistory();

  function addNewMeetupHandler(meetupReq) {
    fetch('https://react-meetup-project-e6659-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      { method: 'POST', body: JSON.stringify(meetupReq), headers: { 'Content-Type': 'application/json' } })
      .then(() => {
        history.replace('/');
      })
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addNewMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMeetups;