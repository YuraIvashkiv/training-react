import { Text, Topic, Wrapper } from "./QuizCard.styled";

export const QuizCard = ({ item: {id,  topic, level, time, questions }, onClick }) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
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
    </Wrapper>
  );
};