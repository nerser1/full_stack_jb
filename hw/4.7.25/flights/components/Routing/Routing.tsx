import {Route, Routes} from "react-router-dom"
import { Flights } from "../Pages/Flights/Flights";
import { TraneShedule } from "../Pages/TraneShedule/TraneShedule";

export const Routing: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/flights" element={<Flights />} />
                <Route path="/trane-shedule" element={<TraneShedule />} />
            </Routes>
        </div>
    )
}