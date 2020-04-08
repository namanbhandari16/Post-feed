import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Create from './components/Create';
import Read from './components/Read';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
    		<div className="App">
    		<Navbar />
  			<Route exact path="/" component={Landing} />
  			<div className="container">
  				<Route exact path="/create" component={Create} />
          <Route exact path="/read" component={Read} />
  			</div>
    		<Footer />
    		</div>
    	</Router>
    );
  }
}

export default App;
