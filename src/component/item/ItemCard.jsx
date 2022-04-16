import React from 'react'

function ItemCard() {
  return (
  <Link to={`detalle/${prod.id}`}> 
   
  <div className='card' key={prod.id}  > 
   <div className='card-body' >
   <Card.Img  className="image" variant="top" src= {prod.foto}  />
   <h2 className='card-title' >   {`${prod.name} - ${prod.categoria}`} </h2>
    <h2 className='card-price' >   {prod.price}  </h2>
   <p className='card-description' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni, reprehenderit vitae fugit saepe necessitatibus labore voluptatum repudiandae libero quos aliquam minus explicabo temporibus eius! Cumque eligendi impedit tenetur? Nesciunt. </p>
   </div>

   <button className='card-btn'> Detalles </button>


  </div>
  
  
</Link>
    )
}

export default ItemCard