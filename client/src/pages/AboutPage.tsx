import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">
            On our website you will be able to advertise all of your customers'
            businesses and thus you will be able to expose them to our many
            customers.
          </Typography>
          <br />
          <Typography variant="h5">
            We have a wide variety of customers so that any business that
            advertises on our website will receive many inquiries from customers
            that suit them.
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography
            variant="h5"
            color="secondary"
            sx={{ textDecoration: "underline", color: "primary" }}
          >
            To create a business card, follow these steps:
          </Typography>
          <Typography variant="h6" sx={{ color: "#01579b" }}>
            1. You must signup on the website.
          </Typography>
          <Typography variant="h6" sx={{ color: "#01579b" }}>
            !! It is important to mark "signup as a business" with a v!
          </Typography>
          <Typography variant="h6" sx={{ color: "#4fc3f7" }}>
            2. All fields must be filled in (the fields marked with * are
            mandatory!).
          </Typography>
          <Typography variant="h6" sx={{ color: "#01579b" }}>
            3. After registration you will be sent to the main cards page.
          </Typography>
          <Typography variant="h6" sx={{ color: "#4fc3f7" }}>
            4. In order to start creating your business cards, click on the "My
            Cards" tab located in the upper toolbar on the left.
          </Typography>
          <Typography variant="h6" sx={{ color: "#01579b" }}>
            5. On the "My Cards" page, click on the blue + and from there you
            will reach the page for creating a new card.
          </Typography>
          <Typography variant="h6" sx={{ color: "#4fc3f7" }}>
            * It is recommended to fill in all the fields and not just the
            mandatory fields!
          </Typography>
          <Typography variant="h6" sx={{ color: "#01579b" }}>
            * The more details you give about the business, the more inquiries
            you will receive from potential customers.
          </Typography>
          <Typography variant="h6" sx={{ color: "#4fc3f7" }}>
            * It is highly recommended to add a photo (in order to do that you
            need to add a link of the photo page in the “Image url” field) -
            business cards with photos receive much more inquiries!
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h5">
            After the card is created you can edit it or delete it.
          </Typography>
          <br />
          <Typography variant="h6">
            To edit the card, click on the pencil sign at the bottom of the card
            and from there you will reach the card editing page. When you're
            done editing, click on the submit button and it will update the
            changes you made.
          </Typography>
          <br />
          <Typography variant="h6">
            To delete the card, click on the bin sign at the bottom of the card
            and confirm in the message that will pop up that you do approve the
            deletion.
          </Typography>
          <br />
          <Typography variant="h5" color="error">
            Once a card is deleted it cannot be restored!!!
          </Typography>
          <br />
          <Typography variant="h5">
            You can only edit or delete the cards you have created!!
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h6" sx={{ color: "#2e7d32" }}>
            cards that you like...
          </Typography>
          <Typography variant="h6" sx={{ color: "#2e7d32" }}>
            You can mark as liked any of the cards on the website by clicking on
            the heart sign at the bottom of each card.
          </Typography>
          <Typography variant="h6" sx={{ color: "#2e7d32" }}>
            In order to see them you can click on the "Fav cards" link in the
            upper toolbar on the left side.
          </Typography>
          <Typography variant="h6" sx={{ color: "#2e7d32" }}>
            Clicking again on the heart sign will cancel the “like” and the card
            will no longer appear in your "Fav cards".
          </Typography>
          <br />
        </Grid>

        <Grid item xs={12} md={4} textAlign="right">
          <img src="/assets/images/cardP.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
