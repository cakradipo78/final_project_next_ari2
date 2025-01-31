import { useRouter } from "next/router"
import { useEffect, useState } from "react"




export default function DetailPage() {
const [dataById, setDataId] = useState({})
const router = useRouter()
const id = router.query.id

useEffect ( () => {

    getById()
},[])
    
const getById = async () => {
    try {
        const data = await fetch(`/api/event-detail/${id}`)
        const result = await data.json()

        console.log(result,"ini datanya ya");
        setDataId(result.data)
        
    } catch (error) {
        console.log(error);
        
    }

} 
    return (
<>

<h1>This DETAIL PAGE</h1>


<p>{JSON.stringify(dataById)}</p>
</>



    )
}
