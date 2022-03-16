
function ItemDetail({producto}) {
    return (
      <div>
          <img src={producto.foto} alt = 'imagen' />
          <p>{producto.name}</p>
          <p>{producto.price}</p>
          <p>{producto.categoria}</p>
      </div>
    )
  }
  
  export default ItemDetail
  