import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactUs = () => {
  return (
    <Container maxWidth="xl">
      <PageHeader title="Contact Us" subtitle="Get in Touch" />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={5} style={{ padding: "30px", height: "100%" , background: "inherit" }}>
            <Typography variant="h5" gutterBottom sx={{fontFamily: "-moz-initial"}}>
              We are here to help you with your project management needs.
            </Typography>
            <Typography variant="body1" paragraph></Typography>
            <Divider />
            <div style={{ marginTop: 20 }}>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontFamily:"-moz-initial" }}>
                <PhoneIcon fontSize="small" sx={{ mr: 2 }} />
                Call us at: 03-6540206
              </Typography>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", marginTop: 2, fontFamily:"-moz-initial" }}>
                <EmailIcon fontSize="small" sx={{ mr: 2 }} />
                Email us at: ProjectsManagement@gmail.com
              </Typography>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", marginTop: 2, fontFamily:"-moz-initial" }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 2 }} />
                Visit us at: Tel Aviv, Shlomo Hamelech 4
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.7230957983143!2d34.77416587330487!3d32.076737419447866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b80d869622d%3A0xdd93cf7b667047d1!2sShlomo%20HaMelekh%20St%204%2C%20Tel%20Aviv-Jaffa!5e0!3m2!1sen!2sil!4v1697450738643!5m2!1sen!2sil"
              width="100%"
              height={450}
              style={{ border: 0 }}
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
