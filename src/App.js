import React,{Component} from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state= {
    details:[
      {name: "Akshay", hobbie:"Cricket"},
    ],
  }
  changeHandler = (event) => {
    this.setState( {
      details:[
        {name: event.target.value, hobbie:"Cricket"},
      ],
    } )
  }

  
  render (){
    return (
      <div className='App'> 
      <UserInput  name={this.state.details[0].name} change={this.changeHandler}/>
      <UserOutput name={this.state.details[0].name} hobbies={this.state.details[0].hobbies}>jkdhahfkds fksh fkjshkf skfh kdfhkjd kjh k</UserOutput>
      <UserOutput name={this.state.details[0].name} hobbies={this.state.details[0].hobbies}>jkdhahfkds fksh fkjshkf skfh kdfhkjd kjh k</UserOutput>
      <UserOutput name="rahul" hobbies="Pubg">jkdhahfkds fksh fkjshkf skfh kdfhkjd kjh k</UserOutput>
      </div>
    );
  };

} 

export default App;
