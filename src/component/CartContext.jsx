import { createContext, useState } from "react"

export const CartContext = createContext([])



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
   
    function  addToCart (items) {
      
      const indice=cartList.findIndex(i => i.id === items.id) // 0,1,2
    
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
 return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0) /////
}

const borrarItem = (id) => {
  setCartList( cartList.filter(prod => prod.id !== id) )
}

    
    return (
  <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCart,
      precioTotal,
      borrarItem
 
  }}>
    {children}
 </ CartContext.Provider>
  )
}

export default CartContextProvider