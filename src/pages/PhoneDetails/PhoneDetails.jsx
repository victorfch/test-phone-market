import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useSinglePhone } from "../../hooks/useSinglePhone"

export const PhoneDetails = () => {
  const { id } = useParams()
  const { phone } = useSinglePhone(id)
  const keys = Object.keys(phone)
  const dispatch = useDispatch()

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <img src={phone.img} alt={`${phone.brand} ${phone.model}`} />
      </div>
      <div>
        <div>
          {keys.map((key, id) => {
            if (key !== "id" && phone[key] && key !== "img")
              return (
                <div key={id}>
                  <span>{key}:</span>
                  {phone[key]}
                </div>
              )
          })}
        </div>
        <div>
          <input type="text" placeholder="select almacenamiento" />
          <input type="text" placeholder="select color" />
          <button
            onClick={() => dispatch({ type: "@cart/add", payload: phone })}
          >
            Add to cart
          </button>

          {/* 
            Al guardar el producto al carrito se añadira la info de:
            id producto
            cod color
            cod capacidad almacenamiento
          */}
        </div>
      </div>
    </div>
  )
}
