// AUTHENTICATED USER
const AUTHENTICATEDUSER = 'AUTHENTICATEDUSER'
const User = {
  setAuthenticatedUser(user) {
    localStorage.setItem(AUTHENTICATEDUSER, JSON.stringify(user))
  },
  getAuthenticatedUser() {
    return JSON.parse(localStorage.getItem(AUTHENTICATEDUSER))
  },
  isAuthenticated() {
    if (this.getAuthenticatedUser() !== null) {
      return true
    }
    return false
  },
  clear() {
    localStorage.removeItem(AUTHENTICATEDUSER)
  }
}

// ROLES
const ROLE = 'ROLE'
const Role = {
  setRoles(role) {
    localStorage.setItem(ROLE, JSON.stringify(role))
  },
  hasRole(role) {
    if (this.getUserRoles().indexOf(role) > -1) {
      return true
    }
    return false
  },
  getUserRoles() {
    return JSON.parse(localStorage.getItem(ROLE))
  },
  clear() {
    localStorage.removeItem(ROLE)
  }
}

// TOKEN
const TOKEN = 'TOKEN'
const Token = {
  setToken(token) {
    localStorage.setItem(TOKEN, JSON.stringify(token))
  },
  getUserToken() {
    return JSON.parse(localStorage.getItem(TOKEN))
  },
  clear() {
    localStorage.removeItem(TOKEN)
  }
}

// Credential Manager
export const CredentialManager = {

  setAuthenticatedUser(user) {
    User.setAuthenticatedUser(user)
  },
  getAuthenticatedUser() {
    return User.getAuthenticatedUser()
  },
  userIsAuthenticated() {
    return User.isAuthenticated()
    && Token.getUserToken() !== null
    && Token.getUserToken().accessToken !== null
  },
  userHasRole(role) {
    return Role.hasRole(role)
  },
  setUserRoles(roles) {
    Role.setRoles(roles)
  },
  getAuthorization() {
    return `${this.getUserToken().token_type} ${this.getUserToken().access_token}`
  },
  setUserTokenCallback(token, callback) {
    Token.setToken(token)
    callback()
  },
  setUserToken(token) {
    Token.setToken(token)
  },
  getUserToken() {
    return Token.getUserToken()
  },
  getUserRefreshToken() {
    return Token.getUserRefreshToken()
  },
  logout() {
    Role.clear()
    Token.clear()
    User.clear()
  }
}

export default CredentialManager