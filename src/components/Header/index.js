import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  closeMenu = () => {
    this.setState({showMenu: false})
  }

  render() {
    const {showMenu} = this.state
    const {match} = this.props
    const {path} = match
    const homeClassName = path === '/' ? 'link-name highlight' : 'link-name'
    const aboutClassName =
      path === '/about' ? 'link-name highlight' : 'link-name'

    return (
      <>
        <nav className="header-list">
          <Link to="/" className="link-logo">
            <span className="app-name">COVID19</span>
            <span className="app-name blue-text">INDIA</span>
          </Link>
          <ul className="nav-list">
            <Link className="link-logo" to="/">
              <li key="1">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </li>
            </Link>
            <Link className="link-logo" to="/about">
              <li key="2">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="menu-button"
            onClick={this.toggleMenu}
          >
            <img
              src="https://res.cloudinary.com/dyjmh036b/image/upload/v1700921594/add-to-queue_1a_vjfh3l.svg"
              alt="menu item"
              className="menu-image"
            />
          </button>
        </nav>
        {showMenu ? (
          <ul className="menu-list">
            <Link className="link-item" to="/">
              <li key="1">
                <button type="button" className={homeClassName}>
                  Home
                </button>
              </li>
            </Link>

            <Link className="link-item" to="/about">
              <li key="2">
                <button type="button" className={aboutClassName}>
                  About
                </button>
              </li>
            </Link>
            <li className="close-item" key="1">
              <button
                label="sai"
                type="button"
                className="close-button"
                onClick={this.closeMenu}
              >
                <IoMdClose />
              </button>
            </li>
          </ul>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
