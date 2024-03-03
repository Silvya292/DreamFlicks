const PageTitle = () => {
  const label = 'Mis listas';
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
          fontSize: '3rem',
          textAlign: 'center'
        }}
      >
        {label}
      </div>
    </>
  );
};

export default PageTitle;
