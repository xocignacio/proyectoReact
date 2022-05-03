/* export const productos = [
    { id: '1', categoria: 'Artesanal', name: "Ipa", price: '$250'   ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2020/08/receta-cerveza-india-pale-ale-clasica.jpg '},
    { id: '2', categoria: 'Artesanal', name: "Red ipa", price: '$250 ',foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2017/09/english-special-strong-bitter-receta-800x600.jpg' },
    { id: '3', categoria: 'Artesanal', name: "Black", price:  '$220'    ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2018/04/ipa-negra.jpg' },
    { id: '4', categoria: 'Artesanal', name: "Red", price: '$220'    ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2017/09/english-special-strong-bitter-receta-800x600.jpg' },
    { id: '5', categoria: 'Artesanal', name: "Honey", price:'$ 220' ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2020/02/neipa-kveik-cashmere-azacca.jpg' },
    { id: '6', categoria: 'Artesanal', name: "Red Honey", price:'$250' ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2021/06/american-amber-ale-cerveza-artesanal.jpg' },
    { id: '7', categoria: 'Industrial', name: "Honey sin alcohol", price: '$200'  ,foto:'https://www.cerveza-artesanal.co/wp-content/uploads/2018/09/100-brett-ipa.jpg'  }
  ]
 */

  
 /* const getFetch = new Promise((resolve, reject)=>{
    
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)                    
        }, 2000);
    } else {
        reject('400 - not found')        
    }
})
 */




/* No hace falta exportar el array por que la promise lo retorna */





/* codigo en el container */
/* 
    useEffect(()=> {
        const getFetch = new Promise((resolve, reject)=>{
    
            let condition = true
            if (condition) {
                setTimeout(() => {
                    resolve(productos)                    
                }, 2000);
            } else {
                reject('400 - not found')        
            }
        })
        if (id) {
            getFetch     
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch      
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id]) */





    /* 

useEffect(()=> {
    getFetch                              // => importo el getFetch con el array de objetos, la promise con retardo de 3 segundos. Sirve para simular un llamado a api
    .then(resp => setProds(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))              
}, [])
 */