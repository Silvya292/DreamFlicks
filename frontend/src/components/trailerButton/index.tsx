import CustomButton from '../customButton';

interface TrailerProps {
  video: string | undefined;
}

const TrailerButton = ({ video }: TrailerProps) => {
  return (
    <CustomButton
      label="Ver tráiler"
      styles={{
        backgroundColor: '#93deff',
      }}
      textStyles={{
        textTransform: 'none',
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}
      onClick={() => {
        window.open(video);
      }}
      testId="watchTrailerButton"
    ></CustomButton>
  );
};

export default TrailerButton;
