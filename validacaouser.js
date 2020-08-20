function validaLogin(login, senha) {
    return (login == "adm" && senha == "admin") && true;
  }
   
  const usuarios = [
    { login: "adm", senha: "12345" },
    { login: "adm", senha: "admin" },
    { login: "admin", senha: "admin" },
  ];
   
  for (const i in usuarios)
   {
    const verifica = validaLogin(usuarios[i].login, 
  usuarios[i].senha
  );
    console.log(verifica);
  }