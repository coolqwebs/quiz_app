import React, { Component } from "react";
import styles from "./Quiz.module.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: "Какого цвета небо?",
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: "Black", id: 1 },
                    { text: "Blue", id: 2 },
                    { text: "Red", id: 3 },
                    { text: "Green", id: 4 },
                ],
            },
            {
                question: "Какая марка у моей машины?",
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: "Ford", id: 1 },
                    { text: "BMW", id: 2 },
                    { text: "Audi", id: 3 },
                    { text: "Ferrari", id: 4 },
                ],
            },
        ],
    };

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === "success") {
                return;
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = "success";
            }
            this.setState({
                answerState: { [answerId]: "success" },
                results,
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = "error";
            this.setState({
                answerState: { [answerId]: "error" },
                results,
            });
        }
    };
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: 0,
            isFinished: false,
            results: {},
        });
    };
    componentDidMount() {
        console.log("Quiz ID =", this.props.match.params.id);
    }
    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.isFinished ? (
                        <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                    ) : (
                        <ActiveQuiz
                            answers={
                                this.state.quiz[this.state.activeQuestion]
                                    .answers
                            }
                            question={
                                this.state.quiz[this.state.activeQuestion]
                                    .question
                            }
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default Quiz;
