import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Food() {

    const [drinks, setdrinks] = useState([]);

    async function fetchApi() {
        const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
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
            setdrinks(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect((e) => { fetchApi() }, [])

    return (<div style={{ display: "flex", flexWrap: "wrap", gap: "1vh", marginTop: "13vh", justifyContent: "space-around" }}>
        {
            drinks.map((ele, idx) => {
                return (<Link key={idx} to={`/Food/${ele.id}`} className="hover:cursor-pointer" style={{ width: "20%" }}>
                    <img src={ele.image} style={{ height: "50%", width: "50%", borderRadius: "20px" }} alt="" />
                    <div className="mt-[2vh] hover:cursor-pointer hover:text-[blue]">{ele.title}</div>
                </Link>
                )
            })
        }
    </div>)
}