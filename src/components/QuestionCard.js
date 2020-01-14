import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { handleSaveAnswer } from '../actions/shared'


class QuestionCard extends Component {
  state={
    option: '',
    answered: this.props.location.state.answered,

  }

  addOptionToState = (e) => {
        this.setState({ option: e.target.value})
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { id } = this.state
    const { dispatch, logedUserId } = this.props
    const { option } = this.state
    console.log( id )
    dispatch(handleSaveAnswer(logedUserId, id, option ))
    this.setState({ answered: true})

  }

  render() {


      const { questionList, answered }= this.props.location.state
      console.log(questionList)


       return(
         <div >
           <Menu />

            <div className='container card'>

           </div>

       </div>
       )

  }
}

export default QuestionCard

// const author= questionList[0].author
// const userAvatar = questionList[0].avatar
// const optionOne= questionList[0].optionOne.text
// const optionTwo= questionList[0].optionTwo.text
// // const answer= logedUserAnswers[id]
// const nrAnsOne= questionList[0].optionOne.votes.length
// const nrAnsTwo= questionList[0].optionTwo.votes.length
// const nrAns = nrAnsOne + nrAnsTwo
//
//  const percent= (partialValue, totalValue) => (
//    (100 * partialValue) / totalValue
//  )


// {(answered) ?
//   <React.Fragment>
//     <h2 className='special-text'>You would rather...</h2>
//       {(answer===optionOne) ?
//         <p className='special-text option'>{optionOne}</p>
//       : <p className='special-text option'>{optionTwo}</p>}
//
//       <p>{nrAnsOne}{(nrAnsOne === 1) ? ' user' : ' users'} / {percent(nrAnsOne, nrAns)}% of users choose: {optionOne}</p>
//       <p>{nrAnsTwo} {(nrAnsTwo === 1) ? ' user' : ' users'} / {percent(nrAnsTwo, nrAns)}% of users choose: {optionTwo}</p>
//       <hr />
//   </React.Fragment>
//
//   :
//   <React.Fragment>
//     <h2 className='special-text'>Would you rather...</h2>
//       <div className='form-vote'>
//          <input type='radio' name={id} value='optionOne' onChange= {this.addOptionToState} />
//          <label>{optionOne}</label><br/>
//          <input type='radio' name={id} value='optionTwo' onChange= {this.addOptionToState} />
//          <label>{optionTwo}</label><br/>
//          <input type='submit' value='Vote' onClick= {this.handleSubmitAnswer} />
//       </div>
//       <hr />
//   </React.Fragment>
//
// }
//
//  <div className='questionAuthor'>
//    <p >{author}</p>
//    <div className='user-avatar'
//     style= {{
//            backgroundColor: 'LightSteelBlue' ,
//            backgroundImage: `url(${userAvatar[0][1]})`,
//            backgroundSize: '80px 100px',
//          }}
//    ></div>
//  </div>
