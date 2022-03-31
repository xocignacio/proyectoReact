import { createContext, useState } from "react"

export const CartContext = createContext([])



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
   
    const addToCart=(item) => {
       setCartList ([ ... cartList, item ])
    }
    
   const vaciarCart= () => {
    setCartList ([])
   }   
  

const precioTotal =() =>{
  return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
}

    
    return (
  <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCart,
      precioTotal
 
  }}>
    {children}
 </ CartContext.Provider>
  )
}

export default CartContextProvider