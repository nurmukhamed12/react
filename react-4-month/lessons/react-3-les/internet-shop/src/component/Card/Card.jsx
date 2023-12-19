import './Card.css'
import App from '../../App'

const Card = ({item, buyFunc})=>{

    const textFunc = (str = 'hello world', length = 10)=>{
        return str.length > length
        ? str.substr(0, length - 3).trim() + '...'
        : str
    }

    return(
        <div className='card'>
            <img src={item.image} alt="" />
            <h2>{textFunc(item.title, 30)}</h2>
            <p>{textFunc(item.description , 40)}</p>
            <p>{item.categorty}</p>
            <div className='card-bottom'>
                <p>${item.price}</p>
                <button onClick={()=>{
                    buyFunc(item)
                }}>buy</button>
            </div>

        </div>
    )
}

export default Card