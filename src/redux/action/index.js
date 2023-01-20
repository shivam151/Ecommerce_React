

//The item is add to the cart
export const addCart =(product)=>{
    return{
        type :"ADDITEM",
        payload :product
    }
}
export const DELCart =(product)=>{
    return{
        type :"DELITEM",
        payload :product
    }
}