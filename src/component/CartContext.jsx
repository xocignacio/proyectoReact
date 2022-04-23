import { createContext, useContext, useState } from "react"

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)  /// segunda forma de exportar un context


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])       ///// cartList es el array de los productos que tengo en el carrito
   
    function  addToCart (items) {
      
      const indice=cartList.findIndex(i => i.id === items.id) 
    
      if (indice > -1){
          const qtyVieja=cartList[indice].cantidad

          let qtyNueva= qtyVieja + items.cantidad

          cartList[indice].cantidad = qtyNueva
          
          let arrAux = [...cartList]
          
          setCartList(arrAux)

      }else{
         setCartList([...cartList, items])
      }
 }
    
    const vaciarCart= () => {
     setCartList ([])
   }     

    const precioTotal =() =>{
    return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0) 
    }

    const borrarItem = (id) => {
      setCartList( cartList.filter(prod => prod.id !== id) )
    }

    const cantidadTotalItem = () => {
      return cartList.reduce((acum, prod) => acum += prod.cantidad , 0) 
    }
    
    return (
  <CartContext.Provider value={{
      cartList,
      setCartList,
      addToCart,
      vaciarCart,
      precioTotal,
      borrarItem,
      cantidadTotalItem
 
  }}>
    {children}
 </ CartContext.Provider>
  )
}

export default CartContextProvider