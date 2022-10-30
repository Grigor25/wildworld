import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
    main: {
        flex: 2,
        display: 'flex',
        justifyContent: 'start'
    },
    text: {
        fontFamily: 'monospase',
        fontSize: '2.9rem',
        color: 'black',
        transform: "rotate(2deg)",
        textShadow: "10px 5px 5px grey",
        cursor: 'pointer'
    }
})


function HeaderAppName(params) {
    const classes = useStyle();
   

return <div className={classes.main}><span className={classes.text}>WildWorld</span></div>
}

export default HeaderAppName