import React, { Component } from 'react'
import './App.css'
import HomeComponent from './Components/HomeComponent '
import QuizComponent from './Components/QuizComponent '
import ResultComponent from './Components/ResultComponent'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      pageNo : 0
    }
  }

  updatestate=(page)=>{
    console.log(this.state.pageNo)
    this.setState(()=>{
      return {
        pageNo: page
      }
    })
  }


  render() {
    if(this.state.pageNo == 0){
        return(
          <HomeComponent props1 = {this.updatestate}/>
        )
    }
    else if(this.state.pageNo == 1){
      return(
        <QuizComponent props1 = {this.updatestate}/>
      )
    }
    else if(this.state.pageNo == 2){
      return (
        <>
          <ResultComponent props1 = {this.updatestate}/>
        </>
    )
    }
    
  }
}

