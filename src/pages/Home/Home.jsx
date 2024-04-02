import { Link } from "react-router-dom"

export default function Home() {


    return(
        <>
        <h1>Home</h1>
        <Link to={"/about"}>
            <p>Here is about</p>
        </Link>

        <Link to={"/clicker"}>
            <p>Here is Clicker</p>
        </Link>
        </>
    )
}