function Titulo() {
  const nombre = "Jose";
  if (nombre) {
    return <h1>Hola {nombre}!</h1>;
  }

  return (
    <div>
      <h1>Hello Mundo!</h1>
    </div>
  );
}

export default Titulo;
