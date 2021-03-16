import logo from './logo.svg';
import {Switch, Route, Link} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicList=(props)=>(
  <div>
    <h1>TOPIC LIST PAGE</h1>
    <Link to={`${props.match.url}/1`}>To topic 1</Link>
    <Link to={`${props.match.url}/2`}>To topic 2</Link>
  </div>
)

const TopicDetail=(props)=>(
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}
//exact default is exact={true}
// switch will match /first 
export default App;
