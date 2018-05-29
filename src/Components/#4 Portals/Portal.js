// CREATING A REUSABLE PORTAL COMPONENT
// PORTALS CAN BE USED TO CREATE MODALS
import { Component } from "react";
import ReactDOM from "react-dom";

// DEFINING A NEW PORTAL ROOT -> OUTSIDE THE COMPONENT
const portalRoot = document.getElementById("portal");

// PORTAL COMPONENT
class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div"); // CREATING WRAPPING ELEMENT
  }
  // ADDS THE ELEMENT TO THE DOCUMENT WHENEVER THE PORTAL COMPONENT MOUNTS
  // SO THAT WAY THE CHILDREN HAVE SOMETHING TO GO INTO
  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  // REMOVES ELEMENT FROM DOCUMENT WHENEVER THE COMPONENT UNMOUNTS
  componentWillUnMount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props; // COULD BE A COMPONENT OR ANYTHING IN A DIV
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
