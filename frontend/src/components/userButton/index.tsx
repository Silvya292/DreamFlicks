import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
  color: '#000000',
  width: '2.8rem',
  height: 'auto',
});

const StyledEmojiEmotionsIcon = styled(EmojiEmotionsIcon)({
  color: '#000000',
  width: '2.8rem',
  height: 'auto',
});

type CustomButtonProps = {
  label?: string;
  onClick?: () => void;
  registered?: boolean;
  testId?: string;
};

const UserButton = ({
  label,
  onClick,
  registered = false,
  testId,
}: CustomButtonProps) => {
  let icon = <StyledAccountCircleIcon />;

  if (registered) {
    icon = <StyledEmojiEmotionsIcon />;
  }

  return (
    <Button
      style={{ backgroundColor: 'transparent', color: '#000000' }}
      sx={{ textTransform: 'none' }}
      onClick={onClick}
      data-testid={testId}
      endIcon={icon}
    >
      {label}
    </Button>
  );
};

export default UserButton;
