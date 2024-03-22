

export default function Business(name, address, city, state, zipcode, category, rating, reviewCount) {
  return (
    <div className='business-tile'>
      <div className='business-image'>
        <h2>Possible Image location</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{address}</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>{city}</td>
            <td>{rating} stars</td>
          </tr>
          <tr>
            <td>{state} {zipcode}</td>
            <td>{reviewCount ? reviewCount : 0} reviews</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


