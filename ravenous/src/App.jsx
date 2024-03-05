import Business from "./components/Business";

function businessImage({RESTAURANTS}) {
  return (
    <>
      <img src={RESTAURANTS.image}></img>
    </>
  )
}

const RESTAURANTS = [{image: "ravenous/src/images/pizzapie.jpg", businessName: "MarginOtto Pizzeria", address: "1010 Paddington", city: "Bordertown", state: "NY", zipcode: "10101", category: "ITALIAN", rating: "4.5", viewCount: ""}];

export default function App(){
  return (
    <>
      <Business />
    </>
  )
}

