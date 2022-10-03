import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@tanstack/react-location";
// import Link from "@mui/material/Link"

export default function ActionCard({
  price,
  image,
  href,
  title,
  description,
  AddToCart,
}: {
  price: number;
  image: JSX.Element;
  href: string;
  title: string;
  description: string;
  AddToCart: any;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {image}
      <CardContent>
        <Link to={`/${href}`}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box display="flex">
        <Typography>{price}DTSU*</Typography>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={AddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
