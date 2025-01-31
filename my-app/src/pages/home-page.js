import { useEffect, useState } from "react"
import Link from "next/link"




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
        {/* <>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>


        </>
      */}


<h1>This is Home Page</h1>

<form onSubmit={handleOnSubmit}>
        <label>search</label>
        <input
            type="text"
            onChange={e => handleInputText(e.target.value)}
        />

        <input type="submit" value="seach ya"/>
</form>



    <ul>
        {
            dataEvent.map(el => (
                <>

<div class="card" style="width: 18rem;">
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
               
                     <li key={el.id} >{el.title}</li>
                   <Link href={`/detail-event/${el.id}`}>Go to detail</Link>

                </>
               
            ))

        }
        
    </ul>


         

</>


    )


}