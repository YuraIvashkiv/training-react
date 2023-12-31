import Select from 'react-select';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
width: 200px;
`
const options = [
  { value: 'all', label: 'All' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export const LevelFilter = ({ value, onChange }) => {

  const defaultOption = options.find(option => option.value === value);


  return (
    <StyledSelect
      options={options}
      value={defaultOption}
      onChange={option => onChange(option.value)}
    />
  );
 }

