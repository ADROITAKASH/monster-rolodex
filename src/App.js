import React from 'react';
import {CardList} from './components/cardList/cardList';
import {Search} from './components/search/search'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      search:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters:user}))
  }

  render(){
    const {monsters,search}=this.state;
    const filterdMonsters = monsters.filter(monster=>(monster.name.toLowerCase().includes(search.toLowerCase())));
    return(
      <div className='App'>
        <Search placeholder='search monsters' onchange={(e)=>(this.setState({search:e.target.value}))}></Search>
        <CardList monsters={filterdMonsters}></CardList>
      </div>
    );
  }
}

export default  App;



