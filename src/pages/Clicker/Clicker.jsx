import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Clicker.css"

export default function Clicker() {

    //[nazev_promenne, nazev setteru] = useState(vychozi_promenna)
    const [cookies, setCookies] = useState(0);

//setter - Funkce ktera prenastavuje promennou

    const increaseCookies = () => {
        setCookies(cookies + 1);
    }
    //kdyz [] prazdne / funkce se spusti kdyz se stranka nacte
    //Kdzy se hodnoty v [] zmeni, zavola se funkce
    useEffect(() => {
        document.title = "Cookie Clicker loaded"
    }, []);

    return(
        <>
        <h1>Clicker</h1>
        <button onClick={increaseCookies} className="clicker-button">Click me</button>
        <p>Counter: {cookies}</p>
        <Link to={"/"}>
            <p>Go home</p>
        </Link>
        </>
    )
}