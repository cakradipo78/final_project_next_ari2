import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"




export default function DetailPage() {
const [dataById, setDataId] = useState({})
const router = useRouter()
const id = router.query.id

useEffect ( () => {
console.log(id,"ini idnya");

    getById()
},[id])
    

const getById = async () => {
    try {
        const allData = await fetch(`http://localhost:3000/api/ivent-id/${id}`)
        const result = await allData.json()

        console.log(result,"data dari API==>");
        

        
        setDataId(result.data)

        
        
      
        
    } catch (error) {
        console.log(error)
        return new Response (
            JSON.stringify({

                "massage" : "error"
            })
        )
        
    }

} 
    return (
<>

<h1>This DETAIL PAGE</h1>
<Link href={`/home-page`}>Go to Home</Link>


<p>Title        : {JSON.stringify(dataById.title)}</p>
<p>Description  : {JSON.stringify(dataById.description)}</p>
<p>Category  : {JSON.stringify(dataById.category)}</p>
<p>Location  : {JSON.stringify(dataById.location)}</p>
{/* <p>{JSON.stringify(dataById.image)}</p> */}
{/* <img src="../public/image/book-fair.jpg" alt="Gambar 01" /> */}



</>



    )
}
