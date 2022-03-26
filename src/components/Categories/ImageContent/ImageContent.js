import React, {useEffect,useState} from 'react';
import axios from "axios"
import styles from "./imageContent.module.css"


const ImageContent = ({position}) => {
    const [images,setImages] = useState([{}])
    const [imagesCount,setImagesCount] = useState(10)


    //GETTING IMAGES AND SET THEM COUNT
    useEffect(()=>{
        const imagesData = axios.get(`https://api.thecatapi.com/v1/images/search?limit=${imagesCount}&page=1&category_ids=${position.id}`)
        imagesData.then(data => setImages(data.data))
    },[imagesCount,position])

    //MORE IMAGES LOGIC
    const onButtonClick = () => {
        setImagesCount(prevState => prevState + 10)
    }

    return (
        <div>
            <div className={styles.imagesBlock}>
                {images && images.map((el,i)=>{
                    return(
                        <div key={i} className={styles.imageWrapper} id={el.id}>
                            <img src={`${el.url}`} alt=""/>
                        </div>
                    )
                })}
            </div>
            <div className={styles.moreButton}>
                <button onClick={onButtonClick}>More Cats</button>
            </div>

        </div>
    );
};

export default ImageContent;