import { useEffect, useState } from "react"
import axios from "axios"
import { GetTable } from "../GetTable/GetTable"

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
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "CHOPER", headerName: "Airline", flex: 1 },
    { field: "CHFLTN", headerName: "Flight #", flex: 1 },
    { field: "CHLOC1D", headerName: "From", flex: 1 },
    { field: "CHLOC1T", headerName: "To", flex: 1 },
    { field: "CHSTOL", headerName: "Scheduled", flex: 1 },
    { field: "CHPTOL", headerName: "Estimated", flex: 1 },
  ]

  // Map API records → rows with unique id
  const rows = flights.map((f, idx) => ({
    id: idx,
    ...f,
  }))
      return (
    <GetTable rows = {rows} columns = {columns} />
    )

}