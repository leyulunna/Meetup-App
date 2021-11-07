import Card from '../ui/Card';
import itemClass from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={itemClass.item}>
      <Card>
        <div className={itemClass.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={itemClass.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <address>{props.address}</address>
        </div>
        <div className={itemClass.action}>
          <button></button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;