import React, {Component}  from "react"
import { hot } from 'react-hot-loader' // maintains the state
import styles from "./main.sass"
// import styled from "@emotion/styled"
//
import {Fancy} from "./Fancy";
// const Fancy = styled("h1")`
//   color: ${ props => props.wild ? 'hotpink': 'gold'};
//   font-size: ${props => props.children+1}em;
//   cursor: pointer;
// `
// import { css } from "emotion"
// const red = "#f00"
//
// const className = css`
// color: ${red};
// font-size: 13em;
// `
// <h1  className={className}  onClick={this.Add}>  {this.state.counter}</h1>
 class Counter extends Component{
  constructor(props){
    super(props)
    this.state ={
      counter: 0
    }
    this.Add = this.Add.bind(this);
  }
  Add(){
    this.setState((state,props)=>{
    return {
      counter : state.counter+1
    }
    })
  }

  render(){
    const isWild = this.state.counter % 2 === 0;
    // console.log(this.state.count);
    return (
      <div className={styles.counter}>
        <Fancy wild={isWild}  onClick={this.Add}>{this.state.counter}</Fancy>
      </div>
    );
  }
}


export default hot(module)(Counter);
