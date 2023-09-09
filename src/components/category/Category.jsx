import React, { useEffect, useState } from 'react';
import "./category.scss";
import axios from 'axios';
import { useCategory } from '../../context/category-context';
import { useFilter } from '../../context/filter-context';
import { toast } from 'react-toastify';


const Category = () => {
    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
   const {categoryDispatch, hotelCategory} = useCategory();
   const {filterDispatch} = useFilter(); 

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
        setNumberOfCategoryToShow(prev => prev + 9);
    }

    const handleShowMoreLeftClick = () => {
        setNumberOfCategoryToShow(prev => prev - 9);
    }
   const handleCategoryClick = (category)=> {
         console.log("clicked");
           categoryDispatch({
            type: "HOTEL_CATEGORY",
            payload: category
           });
           toast.success(`Rendering all hotels from ${category} category`);    
   }
   const handleFilterClick = ()=> {
      filterDispatch({
        type: "OPEN_FILTER_MODAL",
      })
   }
    return (
        <section className="categories d-flex align-center gap-large cursor-pointer">
            {numberOfCategoryToShow >= 9 && (
                <button className="button btn-category btn-left fixed cursor-pointer"
                    onClick={handleShowMoreLeftClick}
                >
                    <span className="material-icons-outlined">chevron_left</span>
                </button>
            )}
            {categories.slice(numberOfCategoryToShow, numberOfCategoryToShow + 9).map(({ category , _id }) => (
                <span className={`category ${category===hotelCategory ? "border-bottom" : ""}`} key={_id} onClick={()=> handleCategoryClick(category)}>{category}</span>
            ))}
            {numberOfCategoryToShow < categories.length - 9 && (
                <button className="button btn-category btn-right fixed cursor-pointer"
                    onClick={handleShowMoreRightClick}
                >
                    <span className="material-icons-outlined">chevron_right</span>
                </button>
            )}
        <button
          className="button btn-filter d-flex align-center gap-small cursor-pointer"
          onClick={handleFilterClick}
        >
          <span className="material-icons-outlined">filter_alt</span>
          <span>Filter</span>
        </button>
      
        </section>
    )
}

export default Category;
