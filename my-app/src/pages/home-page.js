import { useEffect, useState } from "react"
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css'




export default function HomePage() {
const [dataEvent, setDataEvent] = useState([])
const [inputSearch, setInputSearch] = useState("")

useEffect ( () => {

    getApi()
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
            <form onSubmit={handleOnSubmit} className="d-flex" role="search">
            <input className="form-control me-2" type="search" onChange={e => handleInputText(e.target.value)} placeholder="Search" aria-label="Search"/>
            {/* <button className="btn btn-outline-success" type="submit" onSubmit={handleOnSubmit} >Search</button> */}
             <input type= "submit" value={"Search"}/>
            </form>
        </div>
        </nav>


        </>
     


<h1 className ="text-center bg-info">Home Page Project</h1>

<form  className = "text-center"onSubmit={handleOnSubmit}>
        {/* <label>search</label> */}
        <input
            type="text"
            onChange={e => handleInputText(e.target.value)}
        />

        <input className="bg-info" type="submit" value="seach here.."/>
</form>

<br></br>

    {/* <ul> */}
        {
            dataEvent.map(el => (
                <>
   {/* {const image = '/path/to/your/image.jpg'} */}
                    <div className="card d-inline-flex bg-warning" style={{height: '25rem', width: '18rem',marginLeft: '50px' }}>
                        <img 
                            src={el.image} 
                            className="card-img-top" 
                            alt="..."
                            style={{ height: '250px', objectFit: 'cover' }} // Mengatur tinggi dan proporsional gambar
                        /> 
                    <div className="card-body">
                        <h5 className="card-title">{el.title}</h5>
                        <p className="card-text">{el.description}</p>
                        <Link href={`/detail-event/${el.id}`}>Go to detail</Link>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                    </div>
               
                     {/* <li key={el.id} >{el.title}</li> */}
                   {/* <Link href={`/detail-event/${el.id}`}>Go to detail</Link> */}

                </>
               
            ))

        }
        
    {/* </ul> */}


         

</>


    )


}