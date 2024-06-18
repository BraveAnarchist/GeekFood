export default function Card(props){
    return (<div style={{background:"#1f2937",color:"white",margin:"10vh",padding:"5vh",borderRadius:"10px"}}>
        <h2 style={{fontSize:"30px",marginBottom:"1vh"}}>{props.quote}</h2>
        <p style={{fontSize:"18px",textAlign:"center",color:"#6d7a88"}}>{props.author}</p>
    </div>
    )
}