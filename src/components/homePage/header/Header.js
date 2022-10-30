import { createUseStyles } from "react-jss"
import HeaderAppName from "./HeaderAppName";
import HeaderAuth from "./HeaderAuth";
import HeaderButtons from "./HeaderButtons";

const useStyle = createUseStyles({
    header: {
        height: "120px",
        maxWidth: '100%',
        paddingLeft: "50px",
        paddingRight: "50px",
        display: 'flex',
        background: 'bisque',
        alignItems: 'center'
    }
})


function HomePageHeader() {
    const classes = useStyle();
    return <div className={classes.header}>
        <HeaderAppName />
        <HeaderButtons />
        <HeaderAuth />
    </div>
}

export default HomePageHeader