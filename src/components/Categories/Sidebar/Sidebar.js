import React,{useState,useEffect} from 'react';
import styles from "./sidebar.module.css";

const Sidebar = ({categories,getSelectedPosition}) => {
    const [selected,setSelected] = useState({
        name:"",
        id:""
    })

    useEffect(()=>{
        getSelectedPosition(selected)
    },[selected])

    return (
        <div>
            <div className={styles.sidebar}>
                <ul>
                    {categories && categories.map(el => {
                        return <li className={el.name === selected.name ? styles.active :''} onClick={() => setSelected(el)}>{el.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;