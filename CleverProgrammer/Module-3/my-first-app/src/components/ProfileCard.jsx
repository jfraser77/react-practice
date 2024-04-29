import React from 'react'
import profiles from '../fakeData'




const ProfileCard = ({image, name, title, description}) => {
  return (
    <div style={{backgroundColor: 'white', margin: 10, padding: 3, borderRadius: 15}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img 
              src={image} 
              alt="" 
              height='50px'
              style={{borderRadius: 10}}
            />
        <div>
            <h2 style={{backgroundColor: 'white', marginLeft: '10px'}}>{name}</h2>
            <h4 style={{backgroundColor: 'white', marginLeft: '10px'}}>{title}</h4>
        </div>        
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{fontSize: '10px', padding: 5}}>Description: {description}.</p>
        </div>        
    </div>
  )
}

export default ProfileCard
