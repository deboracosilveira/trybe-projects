import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { updateScore } from '../../redux/actions';
import { Header } from '../../components';
import loading from '../../images/loading.png';
import './Question.css';

const shuffleAnswers = (allAnswers) => {
  const shuffledAnswers = [...allAnswers];
  shuffledAnswers.forEach((answer, index, array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomAnswer = shuffledAnswers[randomIndex];
    shuffledAnswers[randomIndex] = answer;
    shuffledAnswers[index] = randomAnswer;
  });

  return shuffledAnswers;
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
      questionNumber: 0,
      redirect: false,
      colorAnswer: false,
      answers: [],
      timer: false,
      disabled: false,
      hurry: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isFetching } = this.props;
    const { questionNumber } = this.state;
    if (prevProps.isFetching !== isFetching || prevState.questionNumber !== questionNumber) {
      this.createAnswers();
      this.timer();
    }
  }

  handleHurry(seconds) {
    if (seconds <= 10) {
      this.setState({ hurry: true });
    }
  }

  timer() {
    const { timer } = this.state;
    this.setState({ seconds: 30 });

    if (timer) {
      clearInterval(timer);
    }

    const timerFunc = setInterval(() => {
      const { seconds } = this.state;
      this.handleHurry(seconds);
      if (seconds <= 1) {
        this.setState({ disabled: true });
        clearInterval(timer);
      }
      if (seconds > 0) {
        this.setState((state) => ({
          seconds: state.seconds - 1,
        }));
      }
    }, 1000);

    this.setState({ timer: timerFunc, disabled: false });
  }

  nextQuestion() {
    this.setState({ colorAnswer: false });
    let { questionNumber } = this.state;
    const { questions } = this.props;
    if (questionNumber === questions.length - 1) {
      return this.setState({ redirect: true, hurry: false });
    }
    questionNumber += 1;
    this.updateRanking();
    return this.setState({ questionNumber, hurry: false });
  }

  createAnswers() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    const correctAnswer = {
      answer: questions[questionNumber].correct_answer,
      isCorrect: true,
      difficulty: questions[questionNumber].difficulty,
    };
    const incorrectAnswers = questions[questionNumber].incorrect_answers.map((answer, index) => ({
      answer,
      isCorrect: false,
      index,
    }));
    const allAnswers = [{ ...correctAnswer }, ...incorrectAnswers];
    const answers = shuffleAnswers(allAnswers);
    return this.setState({ answers });
  }

  updateRanking() {
    const { name, assertions, score, gravatarEmail } = this.props;
    const state = {
      player: {
        name,
        assertions,
        score,
        gravatarEmail,
      },
    };
    localStorage.state = JSON.stringify({ ...state });
    if (localStorage.ranking) {
      const filteredRanking = JSON.parse(localStorage.ranking).filter(
        ({ picture }) => picture !== gravatarEmail,
      );
      const newRanking = [...filteredRanking, { name, score, picture: gravatarEmail }];
      localStorage.ranking = JSON.stringify(newRanking);
      return newRanking;
    }
    localStorage.ranking = JSON.stringify([{ name, score, picture: gravatarEmail }]);
    return { name, score, picture: gravatarEmail };
  }

  handleClick(answer) {
    const { timer, seconds } = this.state;

    clearInterval(timer);
    this.setState({ colorAnswer: true, disabled: true });

    let assertions = 0;
    let score = 10;

    if (answer.isCorrect) {
      assertions = 1;
      switch (answer.difficulty) {
        case 'hard':
          score += seconds * 3;
          break;
        case 'medium':
          score += seconds * 2;
          break;
        case 'easy':
          score += seconds;
          break;
        default:
          break;
      }
      this.props.updateScore(assertions, score);
    }
    return score;
  }

  renderQuestions() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    return (
      <div className="question">
        <span data-testid="question-category" className="question-category">
          {decodeURIComponent(questions[questionNumber].category)}
        </span>
        <p data-testid="question-text" className="question-text">
          {decodeURIComponent(questions[questionNumber].question)}
        </p>
      </div>
    );
  }

  renderAnswers() {
    const { answers, colorAnswer, disabled } = this.state;
    return answers.map((answer) => {
      const dataTestid = answer.isCorrect ? 'correct-answer' : `wrong-answer-${answer.index}`;
      const className = answer.isCorrect ? 'answers-option correct' : 'answers-option incorrect';
      return (
        <button
          onClick={() => this.handleClick(answer)}
          type="button"
          className={colorAnswer ? className : 'answers-option'}
          data-testid={dataTestid}
          key={answer.answer}
          disabled={disabled}
        >
          {decodeURIComponent(answer.answer)}
        </button>
      );
    });
  }

  render() {
    const { isFetching } = this.props;
    const { redirect, disabled, hurry } = this.state;
    if (isFetching) return <img src={loading} alt="loading" className="loading-icon" />;
    if (redirect) {
      return <Redirect to="/feedback" />;
    }
    return (
      <div className="question-page-container">
        <Header />
        <div className="question-and-answers">
          {this.renderQuestions()}
          <div className="answers-options">{this.renderAnswers()}</div>
          <div className="timer-and-next-button">
            <div className={hurry && !disabled ? 'hurry timer' : 'timer'}>
              TIME: {this.state.seconds}
            </div>
            <button
              type="button"
              data-testid="btn-next"
              className="btn-next"
              onClick={this.nextQuestion}
              disabled={!disabled}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.questionsReducer.isFetching,
  questions: state.questionsReducer.questions,
  assertions: state.loginReducer.assertions,
  name: state.loginReducer.name,
  gravatarEmail: state.loginReducer.gravatarEmail,
  score: state.loginReducer.score,
});

export default connect(mapStateToProps, { updateScore })(Question);

Question.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      type: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  updateScore: PropTypes.func.isRequired,
  assertions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
