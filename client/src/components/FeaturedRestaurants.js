import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function FeaturedRestaurants() {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant A",
      description: "Best Italian food",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      name: "Restaurant B",
      description: "Authentic Asian cuisine",
      image: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      name: "Restaurant C",
      description: "Fast and fresh",
      image: "https://via.placeholder.com/400",
    },
    // Add more restaurants
  ];

  return (
    <Grid container spacing={4}>
      {restaurants.map((restaurant) => (
        <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
          <Card
            sx={{ maxWidth: 345, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
          >
            <CardMedia
              component="img"
              height="200"
              image={restaurant.image}
              alt={restaurant.name}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {restaurant.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeaturedRestaurants;
