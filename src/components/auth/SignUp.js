import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import img from "../../img/lev1.jpg";
import "./SignUp.css";

const useStyle = createUseStyles({
  paper: {
    minWidth: "300px",
    minHeight: "400px",
    position: "absolute",
    right: "45px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  text: {
    fontFamily: "cursive",
    fontSize: "45px",
    color: "blue",
    textShadow: "12px 10px 11px",
  },
  signin: {
    color: "blue",
    cursor: "pointer",
  },
  homePage: {
    position: "absolute",
    top: "15px",
    left: "15px",
    fontFamily: "cursive",
    fontSize: "35px",
    color: "blue",
    cursor: "pointer",
  },
  helptext: {
    color: "white",
  },
  signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "35%",
  },
});

function SignUp(params) {
  const classes = useStyle();
  const navigate = useNavigate();
  const { HOME_PAGE, SIGN_IN } = paths;
  return (
    <div className={`img ${classes.container}`}>
      <span onClick={() => navigate(HOME_PAGE)} className={classes.homePage}>
        WildWorld
      </span>
      <div className={classes.paper}>
        <span className={classes.text}>Sign Up</span>
        <div className={classes.signup}>
          <TextField id="standard-basic" label="e-mail" variant="standard" />
          <TextField id="standard-basic" label="name" variant="standard" />
          <TextField id="standard-basic" label="password" variant="standard" />
          <TextField
            id="standard-basic"
            label="repeat-password"
            variant="standard"
          />
          <TextField id="standard-basic" label="phone" variant="standard" />
        </div>
        <Button className={classes.button} variant="contained" size="medium">
          Sign Up
        </Button>
        <div>
          <span className={classes.helptext}>Already have an account?</span>
          <span onClick={() => navigate(SIGN_IN)} className={classes.signin}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
