import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';
import './category.scss'

const Category = () => {

    const [category, setCategory] = useState([]);

    const getCategories = async () => {
        await fetch(BASE_URL + 'Category/getall')
            .then(a => a.json())
            .then(data => setCategory(data))
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div id="category">
            {
                category.map((cat) => (
                    <div className="dev-box">
                        <div className="svg-box">
                            {/* <svg width='50' height='50' className='icons' viewBox="0 0 467 508" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)">
                            </g>
                                <defs><clipPath><rect width="467.64" height="507.91" fill="white"></rect></clipPath></defs>
                                <g clip-path="url(#clip0)"><path d={cat.path} fill="#1D1D1D"></path></g>
                                <path className='icons' d={cat.path2} fill="#1D1D1D"></path>
                                <path d={cat.path3} fill="#1D1D1D"></path>
                            </svg> */}
                            <i className={cat.path}></i>
                        </div>

                        <span>{cat.name}</span>
                    </div>

                ))
            }
        </div>
    )
}

export default Category