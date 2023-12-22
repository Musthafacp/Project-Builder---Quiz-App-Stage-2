import React, { Component } from 'react'
import './components.css'

export default class ResultComponent extends Component {
  playAgain = () =>{
    this.props.props1(1)
  }

  backTOHome= ()=>{
    this.props.props1(0)
  }
  render() {
    return (
        <>
        <div className='Main'>
            <div className='body'>
                <h2 className='resultHead'>Result</h2>
                <div className='InnerDiv'>
                    <h2 className='phrase'>You need more practice !</h2>
                    <h1 className='score'>Your Score is 20%</h1>
                    <div className='cell'>
                        <p>Total number of questions</p>
                        <p>15</p>
                    </div>
                    <div className='cell'>
                        <p>Number of attembted questions</p>
                        <p>9</p>
                    </div>
                    <div className='cell'>
                        <p>Number of correct answers</p>
                        <p>3</p>
                    </div>
                    <div className='cell'>
                        <p>Number of wrong answers</p>
                        <p>6</p>
                    </div>
                </div>
                <div className='twobuttons'>
                    <button className='playAgain' onClick={this.playAgain}> Play Again </button><button className='backToHome' onClick={this.backTOHome}>Back To Home</button>
                </div>
            </div>

        </div>
        </>
    )
  }
}
