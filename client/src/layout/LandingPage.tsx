import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

type LandingProp = {
  onClick: () => void;
};
const StyledContainer = styled(Container)`
  // background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-top: 5rem;
`;
const StyledButton = styled(Button)`
  background-color: #00a9da;
  color: #fff;
  font-size: 1.2rem;
  padding: 1.5rem 3rem;
  margin-top: 3rem;
  &:hover {
    background-color: #00a5fa;
  }
`;
const LandingPage: React.FC<LandingProp> = ({ onClick }) => {
  return (
    <StyledContainer maxWidth="md">
      <Typography
        variant="h2"
        sx={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          mb: "2rem",
          color: "#333",
        }}
      >
        Welcome to the Projects Management
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "1.5rem", color: "#777", mb: "3rem" }}
      >
        Here you can choose the Projects you favourite, create and edit your
        Projects
      </Typography>
      <img src="/assets/images/download.jpg" alt="project" width="200px" />
      <StyledButton onClick={onClick} variant="contained">
        Get Started
      </StyledButton>
    </StyledContainer>
  );
};
export default LandingPage;
