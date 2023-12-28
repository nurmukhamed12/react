import React from "react";

const Wrapper = ({children}) => {
    const showMassage = (text)=>alert(text)
    return (
        <div>
            <h1>Wrapper</h1>         
            {
            Array.isArray(children)
            ? children.map(item => {
                return<>{React.cloneElement(item, {showMassage})}</>
            })
            : <>{React.cloneElement(children, {showMassage})}</>
            }
        </div>
    );
}

export default Wrapper;
