import { ListGroup, ListGroupItem } from 'reactstrap';
import { useEffect, useState } from 'react';

const CategoryList = ({ title, changeCategory, categoryName , currentCategory }) => {

    const [categories, setCategories] = useState([]);


    useEffect((category) => {
        getCategories();
        
    }, []);


    const getCategories = () => {
        fetch("http://localhost:3002/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }




    return (


        <div>
            <h3>{title}</h3>

            <ListGroup >
                {
                    categories.map((category/* ,categoryID */) => (
                        <ListGroupItem style={{cursor:"pointer"}} active={category.categoryName===currentCategory?true:false} // o anki kategorinin ismi currentCategory ye esit mi? esitse true döner, degilse false döner.
                            onClick={() => changeCategory(category)}
                            key={category.id}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))
                }


            </ListGroup>
            

        </div>

    )
}
export default CategoryList;