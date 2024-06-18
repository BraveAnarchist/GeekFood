import Data2 from "./Data2"
import Nav from "./Nav";
import { useState } from "react";

export default function Restaurant() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState(0);
    const [restList, setRestList] = useState(Data2.slice(0, 24));
    function namefunc(e) {
        setName(e.target.value)
        if (e.target.value.length > 3) {
            setRestList(Data2.filter((ele) => {
                return ele.name.toLowerCase().includes(name.toLowerCase())
            }))
        }
        else {
            setRestList(Data2.slice(0, 24));
        }
    }
    function ratefunc(e) {
        setRate(e.target.value)
        if (e.target.value > 0) {
            setRestList(Data2.filter((ele) => {
                return ele.stars >= rate;
            }))
        }
        else {
            setRestList(Data2.slice(0, 24));
        }
    }
    return (
        <>
            <div className=" flex justify-between mt-[15vh] px-[3vw]" >
                <input className="b-[#e5e7eb] border-2 border-solid" value={name} onChange={(e) => namefunc(e)} type="text" placeholder="Search restaurants..." />
                <p>Minimum rating: <input className="b-[#e5e7eb] border-2 border-solid" value={rate} onChange={(e) => ratefunc(e)} type="number" min={0} max={5} /> </p>
            </div>

            <div className="flex flex-wrap px-[3vw] pt-[10vh] justify-between gap-y-[6vh]">
                {
                    restList.map((ele, idx) => {

                        return (
                            <div key={idx} className="w-[30%] bg-[#f3f4f6]">
                                <div className={"flex"}> <h2 className="font-semibold text-xl">{ele.name}</h2>  {Array(ele.stars).fill().map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-[#facc15]"></i>
                                ))} </div>

                                <div className="flex gap-[1vw]" >{ele.categories.map((ele2, id) => { return <p key={id}>{ele2}</p> })}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}