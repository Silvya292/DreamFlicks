export interface CustomTextProps {
  label: string;
}

const CustomText = ({ label }: CustomTextProps) => {
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
          fontSize: '1.2rem',
          paddingRight: '2rem',
          margin: '1rem 0',
        }}
      >
        {label}
      </div>
    </>
  );
};

export default CustomText;
