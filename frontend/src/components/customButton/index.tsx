import { Button } from '@mui/material';

type style = {
  backgroundColor: string;
  color: string;
};

type CustomButtonProps = {
  label?: string;
  buttonColors?: style;
  onClick?: () => void;
  testId?: string;
};

const CustomButton = ({
  label,
  buttonColors,
  onClick,
  testId,
}: CustomButtonProps) => {
  return (
    <Button
      children={label}
      style={buttonColors}
      sx={{ textTransform: 'none' }}
      onClick={onClick}
      data-testid={testId}
    />
  );
};

export default CustomButton;
