import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { Question } from './Question';

const renderQuestion = (question: QuestionData) => <div>{question.title}</div>;

export const HomePage = () => (
    <Page>
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
            `}
        >
            <PageTitle>Unanswered Questions</PageTitle>
            <PrimaryButton>Ask a question</PrimaryButton>
        </div>
        <QuestionList
            data={getUnansweredQuestions()}
            renderItem={renderQuestion}
        />
        ;
    </Page>
);
