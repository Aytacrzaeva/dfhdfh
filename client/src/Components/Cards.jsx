import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Cards.css'
const Cards = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="cards">
        {data.map((item, index) => (
        <div className="card">
            <div className="card__img">
                <img src={item.image} alt="" />
            </div>
            <div className="card__content">
                <h5>{item.category}</h5>
                <p>{item.date}</p>
            </div>
            <div className="card__content2">
                <h2>{item.title}</h2>
            </div>
            <div className="card__content3">
                <p>{item.description}</p>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Cards
