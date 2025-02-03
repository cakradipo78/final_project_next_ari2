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


const handleOnSubmit = async (e) => {
    e.preventDefault()
    let inputUser = {
    
        search: inputSearch
    }
    
    try {
        const requestData = await fetch(`/api/event-bysearch?search=${inputSearch}`)
        
    const result = await requestData.json()
    setDataEvent (result.data)
    
    } catch (error) {
        
    }
    
    
    }
    
    
    const handleInputText = (valueData) => {
    
        console.log(valueData,"==> req datanta");
        setInputSearch(valueData)
        
    }
    




    return (
<>

    <>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <Link href={`/home-page`} passHref>
             <button className="btn btn-primary me-4" >Home</button>
            </Link>
            {/* <Link href={`/home-page`}>Go to Home</Link> */}
        </div>
        </nav>
    </>

<h1 className ="text-center bg-info">Detail information</h1>
{/* <Link href={`/home-page`}>Go to Home</Link> */}



<div className="container text-center bg-warning">
<img src={dataById.image} alt="Gambar 01"  style={{ height: '400px', width: '700px' }}  />

<p className= "fw-bold fs-1">Title        : {JSON.stringify(dataById.title)}</p>
<p className= "fs-5">Description  : {JSON.stringify(dataById.description)}</p>
<p>Category  : {JSON.stringify(dataById.category)}</p>
<p>Date  : {JSON.stringify(dataById.date)}</p>
<p>Location  : {JSON.stringify(dataById.location)}</p>
{/* <p>{JSON.stringify(dataById.image)}</p> */}

</div>



</>



    )
}
