import "./home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../component/Card/Card";


const Home = ({buyFunc}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then(({ data }) => {
                console.log(data);
                setProduct(data)
            })
    }, [])
    return (
        <section>
            <div className="container">
                <div className="row">
                    {
                        product.map(item => {
                            return <div>
                                <div className="col-4">
                                    <Card item={item} />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Home