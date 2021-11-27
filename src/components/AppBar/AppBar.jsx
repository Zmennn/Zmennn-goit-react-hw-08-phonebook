import { NavLink } from "react-router-dom";
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { Greetings } from './Greetings';


export function AppBar() {

    const isAuth = useSelector(state => state.isAuth);


    return (<>
    <header className={style.container}>
        <div className={style.innerContainerLeft}>
            
            <NavLink
                    className={style.secondText}                   
                    to="/contacts">Phonebook
            </NavLink>
        </div>
            
     {isAuth?<Greetings/>:<Navigation/>}

            
        </header>
        
   </> )
}