import { useRouter } from 'next/router';
import { QUESTIONNAIRE_CONFIG } from '@data/config';

export default function Home() {
  const router = useRouter();

  const firstQuestion = QUESTIONNAIRE_CONFIG[0];

  router.push(firstQuestion.id);

  return null;
}
