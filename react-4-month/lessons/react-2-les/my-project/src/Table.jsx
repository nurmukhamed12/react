import React from 'react';

const Table = ({ data }) => {
    return (
        <div >
            {
                JSON.stringify(data) === '{}' ? "" :
                    <table className='table'>
                        <tr className='1'>
                            <td>city</td>
                            <td>{data.name}</td>
                        </tr>

                        <tr className='2'>
                            <td>temp:</td>
                            <td>{(data.main.temp - 273.15).toFixed(1)}°C </td>

                        </tr>
                        <tr className='3'>
                            <td>descr</td>
                            <td>{data.weather[0].description}</td> {}
                        </tr>
                    </table>
            }
        </div>
    );
}

export default Table;
