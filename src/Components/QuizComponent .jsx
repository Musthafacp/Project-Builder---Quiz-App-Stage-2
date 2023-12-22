import React, { Component } from 'react'
import quizQuestion from '../resources/quizQuestion.json'

export default class  extends Component {

    constructor(){
        super()
        
        this.state = {
            data : quizQuestion,
            ind : 0
        }
    }

    next = () => {
        if(this.state.ind == 14){
            console.log(this.props.props1)
            this.props.props1(2)
        }
        this.setState(()=>{
            return{
              ind : this.state.ind+1
            }
          })
    }

    previous = () => {

        if(this.state.ind == 0){
            alert("There is no previous question.!")
            this.setState(()=>{
                return{
                  ind : this.state.ind = 1
                }
              })
        }

        this.setState(()=>{
            return{
              ind : this.state.ind-1
            }
          })
    }

    quit = () => {
        alert('Are you sure you want to quit ..?')
        this.setState(()=>{
            return{
              ind : this.state.ind = 0
            }
          })
    }


  render() {

    return (
        <>
            <div className='innerDiv'>
                <h2 className='questionhead'>Question</h2>
                <p className='qnNo'>{this.state.ind + 1} of 15</p>
                <p className='question'>{this.state.data[this.state.ind].question}</p> 
                <div className='buttons'>
                    <button>
                        {this.state.data[this.state.ind].optionA}
                    </button>
                    <button>
                    {this.state.data[this.state.ind].optionB}
                    </button>
                    <button>
                    {this.state.data[this.state.ind].optionC}
                    </button>
                    <button>
                    {this.state.data[this.state.ind].optionD}
                    </button>
                </div>
                <div className='downbuttons'>
                    <button className='previous' onClick={this.previous}>Previous</button> <button className='next' onClick={this.next}>Next</button> <button className='quit' onClick={this.quit}>Quit</button>
                </div>
            </div>
        </>
    )
  }
}
