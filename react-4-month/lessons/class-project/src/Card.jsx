

const Card = ({showMassage, item}) => {
    return (
        <div className="card">
            <h1 className="card__title">{item.name}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ratione.</p>
            <button className="card__btn" onClick={()=>{
                showMassage(item.phone)
            }}>phone</button>
        </div>
    );
}

export default Card;
