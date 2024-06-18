import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Drink() {
    const { id } = useParams();
    const [recipe, setrecipe] = useState([]);
    console.log(id);
    useEffect(() => {
        apifetch();
    }, [id])

    async function apifetch() {
        const url = 'https://the-vegan-recipes-db.p.rapidapi.com/' + id;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f8b4e0dc5dmsh37605f28de3c926p1f5db5jsn194918acab19',
                'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setrecipe(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (<div className="mt-[13vh]" style={{  }}>
        <img  className="mx-auto " src={recipe.image} style={{ height: "20%", width: "20%", borderRadius: "20px" }} alt="" />
        <div className="mt-[2vh] text-center ">{recipe.title}</div>
        <p style={{marginTop:"2vh",textAlign:"center",marginBottom:"2vh"}}><b>time:</b>{recipe.time}</p>
        
    
            
        
    </div>
    )

}