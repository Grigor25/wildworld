import { Button, TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import img from "../../img/olen.jpg";
import "./SignIn.css";

const useStyle = createUseStyles({
  paper: {
    minWidth: "300px",
    minHeight: "400px",
    marginLeft: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "cursive",
    fontSize: "45px",
    color: "blue",
    textShadow: "12px 10px 11px",
  },
  container: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  signin: {
    color: "blue",
    cursor: "pointer",
  },
  signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "30%",
  },
  homePage: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontFamily: "cursive",
    fontSize: "35px",
    color: "blue",
    cursor: "pointer",
  },
  helptext: {
    color: 'white'
  }
});

function SignIn(params) {
  const classes = useStyle();
  const navigate = useNavigate();
  const { HOME_PAGE, SIGN_UP } = paths;
  const email = useSelector(function(state){
    return state.currentUserLogin.email
  });
  const password = useSelector(function(state){
    return state.currentUserLogin.password
  })
  const dispatch = useDispatch();
  return (
    <div className={`img1 ${classes.container}`}>
      <span onClick={() => navigate(HOME_PAGE)} className={classes.homePage}>
        WildWorld
      </span>
      <div className={classes.paper}>
        <span className={classes.text}>Sign In</span>
        <div className={classes.signup}>
          <TextField value={email} onChange={(evt) => dispatch({
            type:'edit-current-user-name',
            payload: {
              email: evt.target.value
            }
          })} id="standard-basic" label="e-mail" variant="standard" />
          <TextField value={password} id="standard-basic" label="password" variant="standard" />
        </div>
        <Button onClick={() => alert(email)} className={classes.button} variant="contained" size="medium">
          Sign In
        </Button>
        <div>
          <span className={classes.helptext}>Doesn't have an account?</span>
          <span onClick={() => navigate(SIGN_UP)} className={classes.signin}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
