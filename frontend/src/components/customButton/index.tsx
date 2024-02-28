import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const UploadFile = styled('input')({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const StyledCustomButton = styled(Button)({
  color: '#000000',
  padding: '0.6em 1em',
});

type style = {
  backgroundColor: string;
  border?: string;
  width?: string;
  height?: string;
};

type textStyle = {
  textTransform?: string;
  fontWeight?: string;
  fontSize?: string;
  fontStyle?: string;
};

type CustomButtonProps = {
  label?: string;
  styles?: style;
  textStyles?: textStyle;
  onClick?: () => void;
  file?: boolean;
  testId?: string;
};

const CustomButton = ({
  label,
  styles,
  textStyles,
  onClick,
  file = false,
  testId,
}: CustomButtonProps) => {
  return (
    <StyledCustomButton
      style={styles}
      sx={textStyles}
      onClick={onClick}
      data-testid={testId}
      startIcon={file && <CloudUploadIcon />}
    >
      {label}
      {file && <UploadFile type="file" />}
    </StyledCustomButton>
  );
};

export default CustomButton;
