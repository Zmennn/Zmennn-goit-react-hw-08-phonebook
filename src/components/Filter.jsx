import style from './ContactsList.module.css';
import React, {  } from 'react';
// import PropTypes from "prop-types";
// import { connect } from 'react-redux';
import {changeFilter} from '../redux/actions'
import { useDispatch } from 'react-redux';

export default function Filter() {
     

    const dispatch = useDispatch();
    const filter = (data) => dispatch(changeFilter(data));
    const filterData = (ev) => { filter(ev.target.value.toLowerCase()) };
     return (<>
            <label htmlFor="find">Find contacts by name</label>
            <input
                className={style.input}
                autoComplete="off"
                id="find"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]"
                onChange={filterData}
                ></input>
     </>   )
};

// const dispatchProps = dispatch => ({
//      filterData:ev=>dispatch(changeFilter(ev.target.value.toLowerCase()))
// })

// export default connect(null,dispatchProps)(Filter)
// Filter.propTypes = {
//     filterData: PropTypes.func.isRequired
// }