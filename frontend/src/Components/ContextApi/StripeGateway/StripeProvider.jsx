import { createContext } from "react";

export const StripeContext = createContext()





const StripeProvider = ({children}) => {


    const baseUrl = "http://localhost:3000"


    const handlePayment = async (price,destination)=>{
        const response = await fetch(`${baseUrl}/payment/check-out/${price}/${destination}`,{
          method:'POST',
          headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data.url)
        if (data.url) {
          window.location.href = data.url
          
        }



    }
  return (
    <StripeContext.Provider value={{handlePayment}}>
        {children}
    </StripeContext.Provider>
  )
}

export default StripeProvider