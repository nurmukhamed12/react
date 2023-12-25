import './header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import Cart from '../../pages/Cart/Cart';
import App from '../../App';

const Header = ({cartData,setCartData}) => {
    const [category,setCategory]=useState([]);

useEffect(()=>{
axios ('https://fakestoreapi.com/products/categories')
.then(({data})=>setCategory(data));
},[])

    return (

        <header>
          
            <div className="container header-container">
  
<h1><Link to={'/'}>Shop</Link> </h1>

                <nav>
{
    category.map(item=>{
        return <Link key={item} to ={`/category/${item}`}>{item}</Link>
    })
}


                    <Link to={'/'}>Home</Link>
                    <Link to={'/cart' } >Cart </Link>
                    <Link to={'/cart' } > <b>Количество</b> :
                    {
                        cartData.reduce((acc, rec) => {
                            return acc + (rec.count + 0)
                        }, 0).toFixed(0)

                    }
                    <button onClick={() => {
    setCartData([])
                    }}>clear</button></Link>

                    
                </nav>
             
            </div>
        </header>
    );
}

export default Header;
