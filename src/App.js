import React, { Component } from 'react';
import {SearchBox} from "./components/searchbox/searchbox.components";

import {Cardlist} from "./components/cardlist.components";
import './App.css';
//import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Dracula"
        },
        {
          id: 2,
          name: "Frank"
        },
        {
          id: 3,
          name: "zombie"
        }

      ],
      string: "orange",
      searchString:"",
      isToggleOn: true
    };


  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(result => this.setState({monsters:result}))

    

  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }

  calcRectArea(width, height) {
    return width * height;
  }



  //  else{
  //   element.setState({ string: "#FF0000" })

  //  }
  handleClick() { 
    this.setState(
      {string:this.getRandomColor()}
    )
    
   
   
    

  }




  

  render() {
    const {monsters,searchString}=this.state
    const filteredmonsters=monsters.filter(monster => monster.name.toLowerCase().includes(searchString.toLowerCase()))
    return (<div className="App">
      
     {/* <header style={{ backgroundColor: this.state.string }} className="App-header"> */}
      <h1>monsters</h1>
      <SearchBox placeholder="search monster" handleChange= {(Element)=>{this.setState({searchString:Element.target.value},()=>{
          console.log(this.state.searchString)})}}></SearchBox>
       
        <Cardlist monsters={filteredmonsters}>
        

        </Cardlist>
        

        <button onClick={ this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        
      </button>


      {/*</header>*/}
    </div>)

  }


}




export default App;
