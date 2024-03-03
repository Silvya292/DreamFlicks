const description = () => {
  const descriptionText =
    '¡Explora las listas que has creado y sumérgete en tus propios universos cinematográficos! ' +
    'Compártelas con amigos y familiares para inspirar nuevas sesiones de cine o simplemente disfruta ' +
    'de tus propias creaciones como una biblioteca personalizada de tus títulos más queridos. ' +
    'Bienvenido a tu espacio cinematográfico personal, donde cada lista cuenta una historia única.';

  return (
    <div
      style={{
        fontSize: '1rem',
        textAlign: 'center',
        padding: '1rem',
        color: '#4d4f4d',
      }}
    >
      {descriptionText}
    </div>
  );
};

export default description;
