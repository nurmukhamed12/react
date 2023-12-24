import React, { Component } from 'react';

class Home extends Component {
    state = {
        num: 0,
        str: 'Hello world'
    };

    componentDidMount(){
        console.log('did mount');
    }

    componentWillUnmount(){
        console.log('unmount');
    }

    componentDidUpdate(){
        console.log('update');
    }



    render() {
        const {num, str} = this.state
        const {data} = this.props

        return (
            <div>
                <h1>{num}</h1>
                <h1>{str}</h1>
                <h1>{this.props.data}</h1>
                <button onClick={()=>{
                    this.setState({num: num + 1, str: `hello geeks! `})
                }}>+1</button>
            </div>
        );
    }
}

export default Home;
