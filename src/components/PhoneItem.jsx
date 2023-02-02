import { Link } from "react-router-dom"

export const PhoneItem = ({ phone }) => {
  return (
    <Link
      style={{ width: "fit-content", textDecoration: "none", color: "black" }}
      to={`/phone/${phone.id}`}
    >
      <div>
        <img src={phone.img} alt={`{phone.brand} {phone.model}`} />
      </div>
      <div>
        {phone.brand} {phone.model}
      </div>
      {phone.price} &euro;
    </Link>
  )
}
