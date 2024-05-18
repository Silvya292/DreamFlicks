interface PageTitleProps {
  label: string;
  fontSize: string;
  textAlign: 'center' | 'left' | 'right' | 'justify';
  margin?: string;
}

const PageTitle = ({ label, fontSize, textAlign, margin }: PageTitleProps) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={''}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          fontFamily: 'Bangers, sans-serif',
          fontSize: fontSize,
          textAlign: textAlign,
          margin: margin,
        }}
      >
        {label}
      </div>
    </>
  );
};

export default PageTitle;
