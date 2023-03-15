import React,{Component} from 'react' 
import JSON from './user.json'
import Users from './Users'
 
class App extends Component
{
  constructor()
  {
    super()
    {
      this.state={
        json:JSON
      }
    }
  }
  render()
  {
    return<>
    <Users data={this.state.json}/>
    </>
  }
}

export default App