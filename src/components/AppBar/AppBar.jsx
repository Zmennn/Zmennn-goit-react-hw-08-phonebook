import { NavLink } from "react-router-dom";
import style from './style.module.css';

export function AppBar() {
    
    return (
    <header className={style.container}>
        <div className={style.innerContainerLeft}>
            {/* <NavLink
                className={style.firstText}
                // activeStyle={{ backgroundColor: '#88e' }}
                to="/">Home
            </NavLink> */}
            <NavLink
                    className={style.secondText}
                    // activeStyle={{ backgroundColor: '#88e' }}
                    to="/contacts">Phonebook
            </NavLink>
        </div>
        <div className={style.innerContainerRight}>
                <NavLink
                    className={style.firstText}
                    // activeStyle={{ color: '#88e' }}
                    to="/register">Registration
                </NavLink>
                <NavLink
                    className={style.secondText}
                    // activeStyle={{ backgroundColor: '#88e' }}
                    to="/login">Login
                </NavLink>
        </div>
    </header>  
    )
}