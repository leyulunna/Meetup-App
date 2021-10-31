import itemClass from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={itemClass.item}>
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
    </li>
  )
}

export default MeetupItem;