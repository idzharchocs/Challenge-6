import FilterBox from "../components/Car/FilterBox";
import List from "../components/Car/List";
import Hero from "../components/LandingPage/Hero";
import CarContextProvider from "../store/car-filter-context";

function Cars() {
  return (
    <CarContextProvider>
      <Hero landingPage={false} />
      <FilterBox />
      <List />
    </CarContextProvider>
  );
}

export default Cars;
