export default function Footer() {
    return (
        <footer style={{ background: "#f3f4f6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh",padding:"5vh" }}>
            <div style={{width:"100%",padding:"5vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{ color: "#0e9488", textAlign: "center", marginBottom:"2vh"}}>logoisum</h2>
                <p style={{ color: "#918788" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p style={{ color: "#918788" ,marginBottom:"5vh"}}>Incidunt consequuntur amet culpa cum itaque neque.</p>
                <div style={{ display: "flex", justifyContent: "space-around" ,width:"40%",marginBottom:"5vh" }}><span>About</span>
                    <span>Careers</span>
                    <span>History</span>
                    <span>Services</span>
                    <span>Projects</span>
                    <span>Blog</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", width:"20%" }}><span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-github"></i></span>
                    <span><i className="fa-thin fa-basketball"></i></span>
                </div>
                
            </div>
        </footer>
    )
}