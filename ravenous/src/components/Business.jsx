export default function Business(RESTAURANTS) {
  return (
    <div className='business-tile'>
      <div className='business-image'>
        <img src={RESTAURANTS.image} alt=''></img>
      </div>
      <table>
        <thead>
          <tr>
            <th>{RESTAURANTS.businessName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{RESTAURANTS.address}</td>
            <td>{RESTAURANTS.category}</td>
          </tr>
          <tr>
            <td>{RESTAURANTS.city}</td>
            <td>{RESTAURANTS.rating} stars</td>
          </tr>
          <tr>
            <td>{RESTAURANTS.state} {RESTAURANTS.zipcode}</td>
            <td>{RESTAURANTS.viewCount ? RESTAURANTS.viewCount : 0} reviews</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const RESTAURANTS = [{image: "ravenous/src/images/pizzapie.jpg", businessName: "MarginOtto Pizzeria", address: "1010 Paddington", city: "Bordertown", state: "NY", zipcode: "10101", category: "ITALIAN", rating: "4.5", viewCount: ""}];