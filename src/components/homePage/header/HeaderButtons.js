import { createUseStyles } from "react-jss";
import "./Header.css";

const useStyle = createUseStyles({
  main: {
    display: "flex",
    justifyContent: "space-between",
    flex: 2,
  },
  span: {
    transform: "rotate(-2deg)",
    color: "#3DD1E7",
  },
  home: {
    transform: "rotate(-2deg)",
    color: "#3DD1E7",
    position: "relative;",
  },
  list1: {
    display: "none",
  },
});
function HeaderButtons(params) {
  const classes = useStyle();
  return (
    <div className="main">
      <p className="home">
        Home
        {/* <div className="modal"></div> */}
      </p>
      <p className="home">
        Areals
        <ul className="list1">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </p>
      <p className="home">
        Categories
        <ul className="list1">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </p>
      <p className="home">
        Countries
        <ul className="list1">
          <li>Africa</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>South America</li>
          <li>North America</li>
          <li>Australia</li>
        </ul>
      </p>
      <p className="home">
        Red Book
      </p>
    </div>
  );
}

export default HeaderButtons;
