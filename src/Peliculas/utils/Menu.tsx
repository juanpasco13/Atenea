import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = "1";

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <NavLink className="navbar-brand"
                activeClassName={claseActiva}
                to="/">Medflix </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="navbar-brand"
                        activeClassName={claseActiva}
                        to="/Generos">Generos</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        </>
    )
}