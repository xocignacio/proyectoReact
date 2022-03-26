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
    
    return (
  <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCart

  }}>
    {children}
 </ CartContext.Provider>
  )
}

export default CartContextProvider