import Login from "../views/pages/login/Login";

/**
 * factory Route that relavant  link, title in page and maybe permission .
 *
 * @param {Component} component  component that show in this particular path.
 * @param {ENUM Varriable} groupPath specific group that lead on endpoint in prop path use to grouping endpoint that related each other.
 * @param {String} endpoint The string following groupPath in prop path that tell you about and direct to specific page .
 */
class RouteComponent {
  constructor(component, groupPath, endpoint) {
    this.component = component;
    this.path = `${groupPath}${endpoint}`;
    this.group = groupPath;
  }
}

const components = {
  login: new RouteComponent(Login, "/login", ""),
};

const allowPages = {
  guest: {
    routes: [components.login],
    redirect: components.login.path,
  },
  user: {
    routes: [],
    redirect: "/",
  },
};

export default allowPages;
