import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Header extends Component{

renderLinks(){
	if (this.props.authenticated){
//show a signout link
return (<li className="nav-item">
<Link className="nav-link" to="/signout"> Signout </Link>
</li> 
)
	} else{
	//show a link to sign in or sign up

return[		
<li className="nav-item" key={1}>
<Link className="nav-link" to="/signin"> Sign in </Link>
</li>,
<li className="nav-item" key={2}>
<Link className="nav-link" to="/signup" > Sign up </Link>
</li>,
<li className="nav-item" key={3}>
<Link className="nav-link" to="/about" > About </Link>
</li>
];

	}
}



render(){
return(

<div className="jumbotron jumbotron-fluid"> 
<nav className="navbar navbar-light">
<Link to="/" className="navbar-brand"> Main page </Link>

<ul className="nav navbar-nav">

{this.renderLinks()}

</ul>

</nav>
</div>

			);
	}
}


function mapStateToProps(state){
	return {authenticated: state.auth.authenticated};
}


export default connect(mapStateToProps)(Header);










