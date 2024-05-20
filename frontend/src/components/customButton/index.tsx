import { Button, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ReactNode, useState } from 'react';

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
  backgroundColor?: string;
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
  children?: ReactNode;
  label?: string;
  styles?: style;
  textStyles?: textStyle;
  onClick?: () => void;
  onChange?: (event: any) => void;
  file?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
  testId?: string;
};

const CustomButton = ({
  children,
  label,
  styles,
  textStyles,
  onClick,
  onChange,
  file = false,
  type,
  name,
  testId,
}: CustomButtonProps) => {
  return (
    <StyledCustomButton
      style={styles}
      sx={textStyles}
      onClick={onClick}
      onChange={onChange}
      type={type}
      name={name}
      data-testid={testId}
      startIcon={file && <CloudUploadIcon />}
    >
      {children}
      {label}
      {file && (
        <UploadFile
          type="file"
          id="documentUrls"
          name="documentUrls"
          onChange={onChange}
        />
      )}
    </StyledCustomButton>
  );
};

export default CustomButton;
