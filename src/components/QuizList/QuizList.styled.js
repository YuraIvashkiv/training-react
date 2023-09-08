import styled from 'styled-components';
import 'modern-normalize';
// import superImg from '../images/...'


export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  /* background-image: url(superImg); */

  /* :hover{
    background-color: red
}; */
`;

const getBorderColor = ({level, theme}) => {
   
    switch (level) {
        case 'beginner':
            return theme.colors.success;
        case 'intermediate':
            return theme.colors.warning;
        case 'advanced':
            return theme.colors.error;
        default:
            return theme.colors.black;
    } };

export const ListItem = styled.li`
  border: 5px solid ${getBorderColor};
     border-radius: 4px; 
  
  /* :hover {
    background-color: red;
  } */
`;
