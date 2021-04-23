import React from 'react';
import styles from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} of {props.quizLength}</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz