import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledField, StyledError } from './QuizForm.styled';

const schema = Yup.object().shape({
  topic: Yup.string().min(1, 'Too Short!').required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
  time: Yup.number()
    .positive('Must be more > 0')
    .min(10, 'Not enough time')
    .required('Required'),
  questions: Yup.number()
    .positive('Must be more > 0')
    .min(3, 'Min 3 q')
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        level: 'beginner',
        time: 0,
        questions: 0,
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }
    }
    >
      <StyledForm>
        <label>
          Topic
          <StyledField name="topic" placeholder="Quiz topic..." />
          <StyledError name="topic" component="div" />
        </label>
        <label>
          Level
          <StyledField as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </StyledField>
          {/* <Field name="level" placeholder="Quiz level..." /> */}
          <StyledError name="level" component="div" />
        </label>

        <label>
          Time
          <StyledField name="time" type="number" placeholder="Quiz time..." />
          <StyledError name="time" component="div" />
        </label>

        <label>
          Questions
          <StyledField
            name="questions"
            type="number"
            placeholder="Quiz topic..."
          />
          <StyledError name="questions" component="div" />
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
