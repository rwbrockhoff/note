import React, { Component } from 'react'
import './TextEditor.css';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import {Link} from 'react-router-dom';
let defaultPic = "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png";

class TextEditor extends Component {
  constructor(){
    super()

    this.state = {
      user: {picture: defaultPic }
    };
  }
 
  componentDidMount(){
    axios.get('/api/user-data').then(res => {
      this.setState({user: res.data.user || null})
    })
  }

  logout(){
    axios.post('/api/logout').then( () => {
      this.setState({user: {picture: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"}})
    })
  }
  
  render() {
    let image = defaultPic
    if (this.state.user){
      image = this.state.user.picture
    }


    return (
      <div className='editorFrame'>

        <Sidebar/>

         <div className='editor'>
            <input placeholder='Title'/>
            <Link to ='/'><img className='profilepic' alt="profilepic" src={image}
            onClick={() => this.logout()}/></Link>
            <textarea placeholder='Begin typing...'/>
         </div>
      </div>
    )
  }
}
export default TextEditor;