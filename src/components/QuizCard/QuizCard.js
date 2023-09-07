import { Text, Topic, Wrapper } from "./QuizCard.styled";

export const QuizCard = ({ item: { topic, level, time, questions } }) => {
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
    </Wrapper>
  );
};