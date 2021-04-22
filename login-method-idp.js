AuthenticationFlowError = Java.type("org.keycloak.authentication.AuthenticationFlowError");

function authenticate(context) {

  context.getAuthenticationSession().setUserSessionNote("login-method", "Identity Broker");

  LOG.info(script.name + " --> trace auth for: " + context.getAuthenticationSession().getAuthenticatedUser().getUsername() );

  context.success();
}