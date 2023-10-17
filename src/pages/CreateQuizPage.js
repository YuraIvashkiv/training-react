import { AiOutlineArrowLeft } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { QuizForm } from '../components/QuizForm/QuizForm';
import { createQuiz } from 'api';

const CreateQuizPage = () => {
  const addQuiz = async newQuiz => {
    try {
      await createQuiz(newQuiz);
      toast.success('все добре квіз добавлено');
    } catch (error) {
      toast.error('все погано');
    }
  };

  return (
    <div>
      <div>
        <Link to="/quizzes">
          <AiOutlineArrowLeft />
          Назад до квізів
        </Link>
      </div>
      <QuizForm onAdd={addQuiz} />
    </div>
  );
};

export default CreateQuizPage;
