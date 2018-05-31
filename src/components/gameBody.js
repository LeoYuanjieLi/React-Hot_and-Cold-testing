import React from 'react';

import './gameBody.css';

export default class GameBody extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    
    handleSubmit(event){
        event.preventDefault();
        const number = this.state.value;
        this.props.onAdd(number);

    }
    handleChange(event){
        this.setState({value: event.target.value});

    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="number" placeholder="Type Your Guess" value={this.state.value} onChange={this.handleChange} max={100} min={0}/>
                </label>
                <div>
                    <button type="submit" value="Submit" >Guess!</button>
                </div>
                <div className="count">
                    <p>Guessed: {this.props.count} times!</p>
                </div>
            </form>
        );
    }

};