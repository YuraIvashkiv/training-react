import { Button } from './IconButton.styled';

// sm = 24
// md=36
// lg=48

export const IconButton = ({ children, variant, size }) => {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  );
};
