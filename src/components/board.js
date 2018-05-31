import React from 'react';
import GuessBox from './guessBox';
import Card from './card';
import GameBody from './gameBody';
import './gameBody.css';
import './board.css';
import './guessBox.css'


export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correctAnswer: Math.floor(Math.random() * 101),
            currentGuess: -1,
            guessedArray: [],
            feedback: "Start the game!"
        }

        this.setCurrentGuess = this.setCurrentGuess.bind(this);
        this.addGuess = this.addGuess.bind(this);
        this.setFeedback = this.setFeedback.bind(this);
        this.restart = this.restart.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.isInArray = this.isInArray.bind(this);

    }

    setCurrentGuess(clientInput) {
        this.setState({
            currentGuess:clientInput
        })
    }

    isInArray(value, array) {
        return array.indexOf(value) > -1;
      }

    addGuess(guess) {
        if (this.isInArray(parseInt(guess), this.state.guessedArray)){
            alert('number already added!');
        } else if(this.isCorrect()){
            alert('you already got the correct answer!')
        }
        else {
            this.setState({
            guessedArray: [...this.state.guessedArray, parseInt(guess)],
            currentGuess: parseInt(guess)
        });
    }


    }

    setFeedback(fb) {
        this.setState({
            feedback: fb
        })
    }

    restart() {
        this.setState = ({
            correctAnswer: Math.floor(Math.random() * 101),
            currentGuess:  -1,
            guessedArray: [],
            feedback: "Start the game!"
        })        
    }

    isCorrect() {
        return this.state.currentGuess === this.state.correctAnswer
    }

    isTooHot() {
        if(this.state.correctAnswer < this.state.currentGuess) {
            return true;
        }
    }

    isTooCold() {
        if(this.state.correctAnswer > this.state.currentGuess) {
            return true;
        }
    }

    checkStatus() {
        if (this.state.currentGuess === -1) {
            return "Start a new game!"
        }else if(this.isCorrect()) {
            return "Is Correct!"   
        } else if (this.isTooHot()) {
            return "Too hot!"
        } else if (this.isTooCold()) {
            return "Too cold!"            
        }
    }


    
    render(){
            console.log('correct answer is:', this.state.correctAnswer);
            console.log(typeof this.state.correctAnswer);
            console.log('current guess array is:', this.state.guessedArray);
            console.log('current guess is:', this.state.currentGuess);
            console.log(typeof this.state.currentGuess);



            const count = this.state.guessedArray.length;
            return (
                <div className="main-content">
                    <h1>HOT or COLD</h1>
                    <div className="board">
        
                        <div className="cards">
                            <Card  feedback = {this.checkStatus()}/>
                        </div>
                        <div className="gamebody">
                            <GameBody onAdd={this.addGuess} count={count}/>
                        </div>
                        <div className="guessBox">
                            <GuessBox guessedArray={this.state.guessedArray}/>
                        </div>
                    </div>
                </div>
            );


    }

}

