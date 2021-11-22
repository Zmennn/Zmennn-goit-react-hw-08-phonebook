import { NavLink } from "react-router-dom";
import style from './style.module.css';

export function AppBar() {
    
    return (
    <section className={style.container}>
        <div className={style.innerContainerLeft}>
            <NavLink
                className={style.firstText}
                activeClassName={style.active}
                to="/">Home
            </NavLink>
            <NavLink
                    className={style.secondText}
                    activeClassName={style.active}
                    to="/contacts">Phonebook
            </NavLink>
        </div>
        <div className={style.innerContainerRight}>
                <NavLink
                    className={style.firstText}
                    activeClassName={style.active}
                    to="/register">Registration
                </NavLink>
                <NavLink
                    className={style.secondText}
                    activeClassName={style.active}
                    to="/login">Login
                </NavLink>
        </div>
    </section>  
    )
}