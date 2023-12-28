

const Form = ({data, setData}) => {
    return (
        <div>
            <input value={data} onChange={(e)=>{
                setData(e.target.value)
            }} type="text" />
            <button>send</button>
        </div>
    );
}

export default Form;
