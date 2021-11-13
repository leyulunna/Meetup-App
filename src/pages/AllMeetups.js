import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  }
];

function AllMeetups() {

  const [isLoading, setIsLoadiing] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setIsLoadiing(true);
    fetch('https://react-meetup-project-e6659-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
      .then(res => res.json())
      .then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup);
        }

        setMeetupsData(meetups);
        setIsLoadiing(false)
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <div>All Meetups Page</div>
      <MeetupList meetups={meetupsData} />
    </section>
  );
}

export default AllMeetups;