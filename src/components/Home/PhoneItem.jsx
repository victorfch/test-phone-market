import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const PhoneItem = ({ phone }) => {
  return (
    <div>
      <Link
        style={{ width: "fit-content", textDecoration: "none", color: "black" }}
        to={`/phone/${phone.id}`}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={`${phone.brand} ${phone.model}`}
            image={phone.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {phone.brand} {phone.model}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {phone.price} &euro;
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
