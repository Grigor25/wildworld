import { createUseStyles } from "react-jss";
import HomePageHeader from "./header/Header";
import ContainerOne from "./homePageContainerOne/ContainerOne";
import HomePageSeachInput from "./homePageSearchInput/HomePageSearch";
import WorldMap from "./worldMap/WorldMap";

const useStyle = createUseStyles({
  main: {},
});

function HomePage(params) {
  const classes = useStyle();
  return (
    <div className={classes.main}>
      <HomePageHeader />
      <HomePageSeachInput />
      <WorldMap />
      <ContainerOne />
    </div>
  );
}

export default HomePage;
