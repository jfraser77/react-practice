import Business from "./components/Business";
import BusinessImage from "./components/BusinessImage";

const RESTAURANTS = [{image: "ravenous/src/images/pizzapie.jpg", businessname: "MarginOtto Pizzeria", address: "1010 Paddington", city: "Bordertown", state: "NY", zipcode: "10101", category: "ITALIAN", rating: "4.5", viewcount: 0}];

export default function App(){
  const businessPic = {RESTAURANTS.map(restaurants => {
        <BusinessImage 
          restaurant={restaurants.image}
          altName={restaurants.businessname} />
      )}
      )
  return (
    <>
      <h1>Welcome to my page!</h1>
      
      {/* <BusinessImage restaurant={RESTAURANTS.image} altName={RESTAURANTS.businessname}/>
      <Business  name={RESTAURANTS.businessname} address={RESTAURANTS.address} city={RESTAURANTS.city} state={RESTAURANTS.state} zipcode={RESTAURANTS.zipcode} category={RESTAURANTS.category} rating={RESTAURANTS.rating} reviewCount={RESTAURANTS.viewcount} /> */}
    </>
  )
}

