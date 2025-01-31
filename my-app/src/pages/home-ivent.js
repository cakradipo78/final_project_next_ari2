import { useEffect, useState } from "react"

export default function HomeEvent() {

const [dataEvent, setDataEvent] = useState([])
const [inputSearch, setInputSearch] = useState("")

useEffect(() => {


},[])

const getApi = async () => {
    try {
        const data = await fetch("/api/event-detail")
        const result = await data.json()

        console.log(result,"ini datanya ya");
        setDataEvent(result.data)
        
    } catch (error) {
        console.log(error);
        
        
        
    }

    
}







}