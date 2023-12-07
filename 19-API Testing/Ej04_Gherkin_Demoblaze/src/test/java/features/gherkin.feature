Feature: Prueba Gherkin Test 1
  Como nuevo usuario, quiero poder registrarme en el sitio web para poder acceder a las funciones de la plataforma.

  Scenario Outline: Registro de usuario
    Given Soy un nuevo usuario en la Home page de Demoblaze
    When Cliqueo en el boton de SignUp
    And Completo los datos requeridos de <Username> y <Password>
    And Cliqueo en el boton SignUp
    Then El nuevo usuario deberia ser creado y mostrarme el cartel de "Sign up successful"

    Examples:
      |Username|Password
      |PabloTest|1234
      |JuanTest|5678

Feature: Prueba Gherkin Test 2
  Como nuevo usuario registrado, quiero poder loguaerme con mi usuario en el sitio web para poder acceder a las funciones de la plataforma.

  Scenario Outline: Usuario Login
    Given Soy un usuario en la Home page de Demoblaze
    When Cliqueo en el boton de Log In
    And Completo los datos requeridos de <Username> y <Password>
    And Cliqueo en el boton LogIn
    Then Debo ingresar a la pagina de Demoblaze y mostrarme el cartel de "Welcome <Username>" en la esquina superior derecha

    Examples:
      |Username|Password
      |PabloTest|1234
      |JuanTest|5678