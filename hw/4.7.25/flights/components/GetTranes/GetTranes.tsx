import axios from "axios";
import { useEffect, useState } from "react";

export const GetTranes:React.FC = () => {

    const URL = "https://data.gov.il/api/3/action/datastore_search?resource_id=1ebbbb91-1d44-4f41-a85c-4a93a35e32d6&limit=5"
    const [tranes, setTranes] = useState<any[]>([])
    useEffect(() => {
        const fetchTranes = async() => {
            try {
                const result = await axios.get(URL)
                console.log(result.data.result.records)
                setTranes(result.data.result.records)
            } catch (error) {
                
            }
        }
        fetchTranes()
    },[])
    return <div>
        <ul>
            {tranes.map((train, id) => (
                <li key={id}>{JSON.stringify(train)}</li>
            ))}
        </ul>
    </div>
}