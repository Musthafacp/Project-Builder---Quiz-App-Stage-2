import React, { Component } from 'react'
import './components.css'

export default class HomeComponent  extends Component {

  

  stateChanging = () => {
    console.log(this.props.props1)
    this.props.props1(1)
  }

  render() {
    
    return (
      <> 
        <div className='Body'>
            <h2 className='Quizapp'>Quiz App</h2>
            <button className='PlayButton' onClick={()=>this.stateChanging()}>Play</button>
        </div>
      </>
    )
  }
}
