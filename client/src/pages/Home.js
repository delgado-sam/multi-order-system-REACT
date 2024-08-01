import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/Welcome.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#fff",
        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ flex: 1, p: 3 }}>
          <Typography
            variant="h2"
            gutterBottom
            color="primary"
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            Food Court
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            sx={{ maxWidth: "600px", color: "#fff" }}
          >
            Discover the best restaurants and order your favorite dishes for
            quick and easy pickup.
          </Typography>
          <Grid
            marginTop={2}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    fontWeight: "bold",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                >
                  Featured Restaurants
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    fontWeight: "bold",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                >
                  Browse by Category
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid item>
                <Button
                  component={Link}
                  to="/restaurants"
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    fontWeight: "bold",
                    borderColor: "#fff",
                    color: "#fff",
                  }}
                >
                  All <br /> Restaurants
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
