import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
import "./auth.css";

const useStyle = createUseStyles({
    main: {
        flex: 2,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
    }
})

function HeaderAuth(params) {
  const navigate = useNavigate();
  const classes = useStyle();
  const {SIGN_IN,SIGN_UP} = paths;
  return (
    <div className={classes.main}>
      <button
        onClick={() => navigate(SIGN_IN)}
        className="signin"
      >
        Sign In
      </button>
      <button className="signup" onClick={() => navigate(SIGN_UP)}>
        Sign UP
      </button>
    </div>
  );
}

export default HeaderAuth;
