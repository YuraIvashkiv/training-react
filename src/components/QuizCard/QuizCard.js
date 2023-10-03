import { useState } from 'react';
import Modal from 'react-modal';
import { Text, Topic, Wrapper } from './QuizCard.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onClick,
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
 


  return (
    <Wrapper>
      <Topic onClick={() => setIsModalOpen(true)}>{topic}</Topic>
      <Text>
        <b>Level:</b> {level}
      </Text>
      <p>
        <b>Time:</b> {time} min
      </p>
      <p>
        <b>Questions:</b> {questions}
      </p>
      <div>
        <button onClick={() => onClick(id)}>Delete</button>
        {/* <button onClick={onClick}>Delete</button> */}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <h1>{topic}</h1>
        <button onClick={() => setIsModalOpen(false)}>close</button>
      </Modal>
    </Wrapper>
  );
};
