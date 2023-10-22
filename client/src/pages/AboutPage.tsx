import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Projects Management"
        subtitle="Learn about Projects Management website"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Paper
            elevation={3}
            style={{ padding: "20px", background: "inherit" }}
          >
            <Typography
              sx={{ fontFamily: "-moz-initial", textAlign: "center" }}
              variant="h4"
              gutterBottom
            >
              Welcome to Projects Management
            </Typography>
            <Typography
              sx={{ fontFamily: "-moz-initial" }}
              variant="body1"
              paragraph
            >
              In project management, we aim to provide a platform that will
              organize your chosen projects.
            </Typography>
            <Typography
              sx={{ fontFamily: "-moz-initial" }}
              variant="body1"
              paragraph
            >
              The registrants can select the projects by clicking "Select", sort
              the projects by A-Z or by recently uploaded projects. You can
              enter any project and see the project description, status, project
              end date, contact information, project number and countdown time
              in real time.
            </Typography>
            <Typography
              sx={{ fontFamily: "-moz-initial" }}
              variant="body1"
              paragraph
            >
              In addition, business registrants can create, edit and delete
              projects.
            </Typography>
            <Typography
              sx={{ fontFamily: "-moz-initial" }}
              variant="body1"
              paragraph
            >
              You didn't register in Business, don't worry, you can register
              again as Business at any stage.
            </Typography>
            <Typography
              sx={{ fontFamily: "-moz-initial", textAlign: "center" }}
              variant="body1"
              paragraph
            >
              Example of a registered user
            </Typography>
            <Grid item xs={12} md={12}>
              <img
                src="/assets/images/registeredUser.png"
                alt="registered User"
                width="100%"
                style={{ borderRadius: "8px" }}
              />
            </Grid>
            <Typography sx={{ textAlign: "center", fontFamily: "inherit" }}>
              Inside the project you can see the description of the project, the
              time you have left, a phone number and email for inquiries and a
              project number.
            </Typography>
            <Grid item xs={12} md={12}>
              <img
                src="/assets/images/registeredUserpage.png"
                alt="registered User"
                width="100%"
                style={{ borderRadius: "8px", padding: "50px" }}
              />
            </Grid>
            <Divider
              sx={{
                backgroundColor: "#fff",
                margin: "10px auto",
                width: "50%",
              }}
            />
            <Typography sx={{ textAlign: "center", fontFamily: "inherit" }}>
              On the my projects page you can see the projects you have chosen
            </Typography>
            <Grid item xs={12} md={12}>
              <img
                src="/assets/images/myPr.png"
                alt="registered User"
                width="100%"
                style={{ borderRadius: "8px", padding: "50px" }}
              />
            </Grid>
            <Divider
              sx={{
                backgroundColor: "#fff",
                margin: "10px auto",
                width: "50%",
              }}
            />
            <Typography sx={{ textAlign: "center", fontFamily: "inherit" }}>
              Register a business, on the project creation page you can create a
              new project, see the projects you created, edit and delete
              projects
            </Typography>
            <Grid item xs={12} md={12}>
              <img
                src="/assets/images/CreatingProject.png"
                alt="registered User"
                width="100%"
                style={{ borderRadius: "8px", padding: "50px" }}
              />
            </Grid>
            <Divider
              sx={{
                backgroundColor: "#fff",
                margin: "10px auto",
                width: "50%",
              }}
            />
            <Typography sx={{ textAlign: "center", fontFamily: "inherit" }}>
              Contact page you will see our phone number, contact email and
              google maps to our address. We will be happy if you contact us
              with any problem
            </Typography>
            <Grid item xs={12} md={12}>
              <img
                src="/assets/images/ContactUs.png"
                alt="registered User"
                width="100%"
                style={{ borderRadius: "8px", padding: "50px" }}
              />
            </Grid>
            <Divider
              sx={{
                backgroundColor: "#fff",
                margin: "10px auto",
                width: "50%",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
