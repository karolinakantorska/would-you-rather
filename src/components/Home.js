import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import QuestionList from './QuestionList'

class Home extends Component {
  state= {
    seeQuestion: true,
    linkText: 'Show Answered Questions'
  }

  toggleQuestions = () => {
    (this.state.seeQuestion) ?
      this.setState({seeQuestion: false, linkText: 'Show Unanswered Questions',})
    :
      this.setState({seeQuestion: true, linkText: 'Show Answered Questions',})
  }

  render () {

       const {  unanswered, answered, } = this.props
       const { seeQuestion, linkText }= this.state

      return (
        <div>
          <Menu />

          <div className= 'container' >
            <section className= 'question-toggle'>
              <p  id= 'toggleQuestions' onClick={ this.toggleQuestions }>{linkText}</p>
            </section>
            {(seeQuestion) ?
              <div>
                <QuestionList questionList={unanswered} text= 'Unanswert Questions' answered= {false} />
              </div>
              :
              <div>
                <QuestionList questionList={answered} text= 'Answert Questions' answered= {true}/>
              </div>
             }
          </div>
        </div>
      )
  }
}

function mapStateToProps (state) {
  const {questions, users } =state
  const questionsId = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  const unansweredID = questionsId.filter(
    (id)=> (
      !(questions[id].optionOne.votes.includes('johndoe')) && !(questions[id].optionTwo.votes.includes('johndoe'))
    )
  )
  const answeredID = questionsId.filter(
    (id)=> (
      questions[id].optionOne.votes.includes('johndoe') || questions[id].optionTwo.votes.includes('johndoe')
    )
  )

  const unanswered = []
  unansweredID.map((id) => {
    const author = questions[id].author
    unanswered.push([id,{author: questions[id].author, timestamp: questions[id].timestamp, optionOne: questions[id].optionOne, optionTwo: questions[id].optionTwo, avatar: users[author].avatarURL}])
  })
  const answered = []
  answeredID.map((id) => {
    const author = questions[id].author
    answered.push([id,{author: author, timestamp: questions[id].timestamp, optionOne: questions[id].optionOne, optionTwo: questions[id].optionTwo, avatar: users[author].avatarURL}])
  })

  return {
    unanswered,
    answered,

  }
}
export default connect(mapStateToProps)(Home)
