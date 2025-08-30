import { NavLink } from "react-router-dom";

export const Menu:React.FC = () => {
    return (
        <nav>
            <NavLink to="/flights">Flights</NavLink>
            <NavLink to="/trane-shedule">Trane Shedule</NavLink>
        </nav>
    )
}