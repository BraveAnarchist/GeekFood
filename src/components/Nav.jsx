import { Link } from "react-router-dom"
function Nav() {

    return (
        <nav style={{ background: "#111827", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><img style={{ display: "block", height: "3.5vh", width: "3.5vw" }} src="https://flowbite.com/docs/images/logo.svg" alt="" /><a style={{fontSize:"1.5rem"}} href="">GeekFoods</a></div>
            <div style={{ display: "flex", justifyContent: "space-between", width:"30%" }}>
                <Link to="/" style={{color:"#397beb"}} href="">Home</Link>
                <Link to="/Quote">Quote </Link>
                <Link to="/Restaurant" href="">Restaurant</Link>
                <Link to="/Food" href="">Foods</Link>
                <Link to="/" href="">Contact</Link>
            </div>
            <div className="btn">Get started</div>
        </nav>
    )
}

export default Nav