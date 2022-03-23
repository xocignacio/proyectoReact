import    './itemDetail.css'                    //////////////cart de detalles
function ItemDetail({producto}) {
    return (
      <div className='detalles'>
        <center>
            <img src={producto.foto} alt = 'imagen' />
            <p className='detallesName alert alert-primary w-25'>{producto.name}</p>
            <p className='detallesPrice alert alert-primary w-25'>{producto.price}</p>
            <p className='detallesCategori alert alert-primary w-25'>{producto.categoria}</p>
        </center>
      </div>
    )
  }
  
  export default ItemDetail
  