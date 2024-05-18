interface DescriptionProps {
  descriptionText: string;
}

const Description = ({ descriptionText }: DescriptionProps) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={''}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '1rem',
          textAlign: 'center',
          padding: '1rem',
          width: '100%',
          color: '#4d4f4d',
        }}
      >
        {descriptionText}
      </div>
    </>
  );
};

export default Description;
