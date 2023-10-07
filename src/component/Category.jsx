import React from 'react'

const Category = ({ allcategories }) => {
    return (
        <div className='btn-container'>
            {
                allcategories.map((Category, index) =>{
                    return (
                        <button className="filter-btn" key={index} onclick={()=>filterItems(Category)}>{Category}</button>
                    )
                })
            }
        </div>
    )
}


export default Category