
import './App.css';
import React, {Component} from "react";
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
      super();
      this.state= {monsters: [
        
      ],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters, searchField}  = this.state;
    const filteredMonster= monsters.filter(f=>f.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="Search monster" handleChange={e=>this.setState({searchField: e.target.value})}/>
          <CardList monsters= {filteredMonster}> 
          
          </CardList>
          {/* <header className="App-header">
           
          
           
          </header> */}
        </div>
      );
  }
}

export default App;
