import React, {useEffect,useState} from 'react';
import styles from "./categories.module.css"
import axios from "axios"
import Sidebar from "./Sidebar/Sidebar";
import ImageContent from "./ImageContent/ImageContent";


const Categories = () => {
    const [categories,setCategories] = useState([{}])
    const [position,setPosition] = useState('')

    //GETTING CATEGORIES DATA
    useEffect(() => {
        const categories = axios.get('https://api.thecatapi.com/v1/categories')
        categories.then(data => setCategories(data.data))

    },[])
    //

    //GETTING SELECTED POSITION ON SIDEBAR
    const getSelectedPosition = (position) => {
        setPosition(position)
    }
    //


    return (
        <div>
            <div className={styles.wrapper}>
                <Sidebar getSelectedPosition={getSelectedPosition}  categories={categories}/>
                <ImageContent position={position}/>
            </div>
        </div>
    );
};

export default Categories;