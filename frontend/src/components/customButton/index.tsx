import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const UploadFile = styled('input')({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
});

type style = {
  backgroundColor: string;
  color: string;
  border?: string;
  width?: string;
  height?: string;
};

type CustomButtonProps = {
  label?: string;
  buttonColors?: style;
  onClick?: () => void;
  file?: boolean;
  testId?: string;
};

const CustomButton = ({
  label,
  buttonColors,
  onClick,
  file = false,
  testId,
}: CustomButtonProps) => {
  return (
    <Button
      style={buttonColors}
      sx={{ textTransform: 'none' }}
      onClick={onClick}
      data-testid={testId}
      startIcon={file && <CloudUploadIcon />}
    >
      {label}
      {file && <UploadFile type="file" />}
    </Button>
  );
};

export default CustomButton;
