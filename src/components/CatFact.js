import React, {useState} from 'react';
import { connect } from 'react-redux';
import { getRandomFact } from '../actions';


const CatFact = (props) => {
  console.log(props)

  const getFact = e => {
    e.preventDefault();
    props.getRandomFact();
  }

  console.log(props)

  return(
    <div>

      <h1>{props.fact}</h1>

      <button onClick={getFact}>Give me another one!</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    fact: state.catFact
  }
}

export default connect(mapStateToProps, { getRandomFact })(CatFact);