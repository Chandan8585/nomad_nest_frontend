import React, { useEffect, useState } from 'react';
import "./category.scss";
import axios from 'axios';
import { useCategory } from '../../context/category-context';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);

   const {categoryDispatch, hotelCategory} = useCategory();
//    const {hotelCategory, setHotelCategory} = useCategory();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://nomad-nest-backend.onrender.com/api/category");
                setCategories(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleShowMoreRightClick = () => {
        setNumberOfCategoryToShow(prev => prev + 10);
    }

    const handleShowMoreLeftClick = () => {
        setNumberOfCategoryToShow(prev => prev - 10);
    }
   const handleCategoryClick = (category)=> {
         console.log("clicked");
           categoryDispatch({
            type: "HOTEL_CATEGORY",
            payload: category
           });

        
   }
    return (
        <section className="categories d-flex align-center gap-large cursor-pointer">
            {numberOfCategoryToShow >= 10 && (
                <button className="button btn-category btn-left fixed cursor-pointer"
                    onClick={handleShowMoreLeftClick}
                >
                    <span className="material-icons-outlined">chevron_left</span>
                </button>
            )}
            {categories.slice(numberOfCategoryToShow, numberOfCategoryToShow + 10).map(({ category , _id }) => (
                <span className={`${category===hotelCategory ? "border-bottom" : ""}`} key={_id} onClick={()=> handleCategoryClick(category)}>{category}</span>
            ))}
            {numberOfCategoryToShow < categories.length - 10 && (
                <button className="button btn-category btn-right fixed cursor-pointer"
                    onClick={handleShowMoreRightClick}
                >
                    <span className="material-icons-outlined">chevron_right</span>
                </button>
            )}
        </section>
    )
}

export default Category;
