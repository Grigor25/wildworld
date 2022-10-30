import { border } from "@mui/system";
import { createUseStyles } from "react-jss";
import "./ContainerOne.css";
import safariImg from "../../../img/Safari/Wallpers/safari.jpg";
import elephant from "../../../img/Safari/Elephants/elephant.png";

const useStyle = createUseStyles({});

function ContainerOne(params) {
  const classes = useStyle();
  return (
    <div className="main">
      <div className="boxes">
        <div className="box"></div>
        <div className="box">
            <img className="wallper" alt="elp" src={elephant}></img>
            <div className="banner">Африканский Слон</div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default ContainerOne;
