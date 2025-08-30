import { JSX } from "react"
import axios from "axios"

const URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=5"

export async function GetFlights(): JSX.Element {
    try {
        const result = await axios.get(URL)
        console.log(result)
    } catch (error) {
        
    }finally {
        console.log(URL)
    }
}