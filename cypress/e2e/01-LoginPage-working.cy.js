describe('Login', () => {
  beforeEach(() => {
    // Visitar la página de inicio de sesión antes de cada prueba
    cy.visit('http://localhost:3000/');
  });

  it('allows a valid user to log in', () => {
    // Introducir las credenciales correctas en los campos de email y contraseña
    cy.get('input[name="email"]').type('edgar@example.com');
    cy.get('input[name="password"]').type('123456');

    // Hacer clic en el botón de enviar formulario
    cy.get('button[type="submit"]').click();

    // Verificar que se ha redirigido al usuario al dashboard
    cy.url().should('include', '/dashboard');

    // Verificar que se ha guardado un token de autenticación en localStorage
    cy.window()
      .its('localStorage.token')
      .should('be.a', 'string')
      .and('not.be.empty');

    // Verificar que se ha mostrado una alerta de éxito
    cy.get('.swal2-success').should('be.visible');
  });

  it('displays an error message for invalid credentials', () => {
    // Introducir credenciales incorrectas en los campos de email y contraseña
    cy.get('input[name="email"]').type('correo@ejemplo.com');
    cy.get('input[name="password"]').type('contraseña');

    // Hacer clic en el botón de enviar formulario
    cy.get('button[type="submit"]').click();

    // Verificar que se muestra una alerta de error
    cy.get('.swal2-error').should('be.visible');
  });
});
