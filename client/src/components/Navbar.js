import React, {Component} from 'react'
import { Link} from 'react-router-dom';

class Navbar extends Component{
render(){
    return(
    
    <nav className="navbar navbar-expand-sm bg-dark">
    <div className="container">
      <Link className="nav-link navbar-brand font-weight-bolder font-italic" style={{fontSize:'30px' }} to="/">Feed</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/create"> Create Post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    );
}
}

export default Navbar;