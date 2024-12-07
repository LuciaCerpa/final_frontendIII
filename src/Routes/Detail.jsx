import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [ dentist, setDentist ] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/"+params.id;

  useEffect(() => {
      axios(url).then(res => setDentist(res.data))
  },[])

  return (
    <main>
      <h1>Detail Dentist id </h1>
      <div className='detail'>
        <img src="/images/doctor.jpg" alt={dentist.username} height={250} />
        <div className='detail_info'>
          <p>Name: <span>{dentist.name}</span></p>
          <p>Email: <span>{dentist.email}</span></p>
          <p>Phone: <span>{dentist.phone}</span></p>
          <p>Website: <span>{dentist.website}</span></p>
          <p>Company: <span>{dentist.company?.name}</span></p>
          <p>Address: <span>{`${dentist.address?.street}, ${dentist.address?.city}`}</span> </p>
          <p>Zipcode: <span>{dentist.address?.zipcode}</span></p>
        </div>
      </div>
    </main>
  )
}

export default Detail