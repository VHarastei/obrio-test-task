import { useEffect } from 'react';
import { MainLayout } from '@layouts';
import { useRouter } from 'next/router';
import { QUESTIONNAIRE_CONFIG } from '@data/config';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { IQuestion } from '@features/questionnaire/types';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import {
  DataQuestion,
  InfoQuestion,
  questionnaireActions,
  questionnaireSelectors,
} from '@features/questionnaire';

interface IProps {
  question: IQuestion;
}

export default function QuestionPage({ question }: IProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // only for demonstation purpose
  const demonstrationData = useAppSelector(questionnaireSelectors.data);

  const navigateToNextQuestion = (questionId: string) => {
    router.push(questionId);

    // only for demonstation purpose
    if (question.isLastQuestion) {
      alert(
        `You can find questionnaire data in Redux Dev tools or down below: \n ${JSON.stringify(demonstrationData, null, 4)}`
      );
      dispatch(questionnaireActions.resetData());
    }
  };

  useEffect(() => {
    dispatch(questionnaireActions.setThemeMode(question?.themeMode || 'light'));
  }, [dispatch, question]);

  return (
    <MainLayout title="Questionnaire" showBackButton={!!question.prevQuestionId}>
      {question.type === 'infoQuestion' ? (
        <InfoQuestion question={question} onNextQuestion={navigateToNextQuestion} />
      ) : (
        <DataQuestion question={question} onNextQuestion={navigateToNextQuestion} />
      )}
    </MainLayout>
  );
}

export const getStaticPaths = (async () => {
  const paths = QUESTIONNAIRE_CONFIG.map((question) => ({
    params: {
      questionId: question.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const question = QUESTIONNAIRE_CONFIG.find((q) => q.id === ctx?.params?.questionId);

  if (!question)
    return {
      notFound: true,
    };

  return {
    props: { question },
  };
};
