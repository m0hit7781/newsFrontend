import { useContext, useEffect, useState  } from "react"
import "../App.css"
import { GloabalCtx } from "../GlobalCtx"

const PrivacyPolicy = () => {
    const [state] = useContext(GloabalCtx);
    const [isAuth, setIsAuth] = useState('') 
    useEffect(() => {
        if(state.data){
            console.log(state)
            setIsAuth(state.data)
        }
    }, [state])
    return(
        <> 
        <h1 id="2"> {isAuth ?isAuth.firstName :'d'}</h1>
        <title>Privacy Policy</title>
        <h1>
            {/* {isAuth.data} */}
            This is privacy policy
        </h1>
        </>
       
    )
}

export default PrivacyPolicy