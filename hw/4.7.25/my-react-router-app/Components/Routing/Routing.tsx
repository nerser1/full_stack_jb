import { Flights } from "Components/Pages/Flights/Flights";
import type { JSX } from "react";
import { Route } from "react-router";
import Routes from "~/routes";

export function Routing(): JSX.Element {
    return (
        <div>
            <Routes>
                <Route path="/flights" element={<Flights/>} />
            </Routes>
        </div>
    )
}