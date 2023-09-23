import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className, key} = cardsList
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-para">{description}</p>
      <img src={imgUrl} className="card-image" alt={title} />
    </li>
  )
}

export default CardItem
