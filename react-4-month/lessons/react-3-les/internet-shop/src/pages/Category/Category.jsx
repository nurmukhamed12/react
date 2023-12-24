import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom"; 
import axios from "axios"; 
import Card from "../../component/Card/Card"; 
 
const Category = ({ buyFunc }) => { 
    const [product, setProduct] = useState([]); 
    const params = useParams(); 
 
    useEffect(() => { 
        setProduct([]); 
        axios(`https://fakestoreapi.com/products/category/${params.category}`) 
        .then(({data})=>setProduct(data)); 
    }, [params]) 
 
 
 
 
    return ( 
        <section> 
   <div className="container"> 
                <div className="row"> 
                    { 
                        product.map(item => { 
                            return <div key={item.id} className='col-4'> 
                               <Card buyFunc={buyFunc} item={item}/> 
 
                            </div> 
                        }) 
                    } 
                </div> 
            </div> 
        </section> 
    ); 
} 
 
export default Category;