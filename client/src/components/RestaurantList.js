import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const restaurants = [
  {
    id: 1,
    name: "Texas Roadhouse",
    description: "Steakhouse",
    image: `${process.env.PUBLIC_URL}/Texas_Roadhouse.svg.png`,
  },
  {
    id: 2,
    name: "Olive Garden",
    description: "Italian cuisine",
    image: `${process.env.PUBLIC_URL}/oliveGarden.jpeg`,
  },
  {
    id: 3,
    name: "Red Lobster",
    description: "Seafood",
    image: `${process.env.PUBLIC_URL}/Redlobster.png`,
  },
];

function RestaurantsList() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        All Restaurants
      </Typography>
      <Grid container spacing={4}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={restaurant.image}
                alt={restaurant.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {restaurant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }} fullWidth>
                  View Menu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RestaurantsList;
