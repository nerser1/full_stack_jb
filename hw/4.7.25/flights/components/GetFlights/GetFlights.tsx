import { useEffect, useState } from "react"
import axios from "axios"

const URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=5"



export const GetFlights: React.FC = () => {

    const [flights, setFlights] = useState<any[]>([])
    useEffect(() =>{
        const fetchFlithits =  async () => {
            try {
                const result = await axios.get(URL)
                console.log(result.data.result.records)
                setFlights(result.data.result.records)
            } catch (error) {
                
            }finally {
                
            }
        }
        fetchFlithits()
    } , [])
    return (
    <div>
        {flights.map((flight,idx) => (
            <p key={idx}>{JSON.stringify(flight)}</p>
        ))}
    </div>
    )

}