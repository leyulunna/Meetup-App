import cardClass from './Card.module.css';

function Card(props) {
  return <div className={cardClass.card}>{props.children}</div>
}

export default Card;