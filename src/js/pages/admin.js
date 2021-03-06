import React from "react";
import { IndexLink, Link } from "react-router";
import LoginForm from "../components/LoginForm"
import UserTable from "../components/UserTable"
import GameTable from "../components/GameTable"
import ResetVote from "../components/ResetVote"
import * as AdminActions from "../actions/AdminActions";
import AdminStore from "../stores/AdminStore";

export default class admin extends React.Component {
constructor() {
  super();
  this.state = {
    showLogin: true,
    showUserTable: false,
    showGameTable: false,
    showResetVote: false
  };
}
componentWillMount() {
  AdminStore.on("LOGIN_SUCCESS", this.loginSuccess.bind(this));
}
componentWillUnmount() {
  AdminStore.removeListener("LOGIN_SUCCESS", this.loginSuccess.bind(this));
}
loginSuccess(){
  this.hideLogin();
  this.showUserTable();
  this.showGameTable();
  this.showResetVote();
}
hideLogin(){
  this.setState({showLogin: false});
}
showUserTable(){
  this.setState({showUserTable: true});
}
showGameTable(){
  this.setState({showGameTable: true});
}
showResetVote(){
  this.setState({showResetVote: true});
}
  render() {
    return (
      <div>
        <h2 class="floatRight small"><IndexLink to="/">Back</IndexLink></h2>
        <h1>Admin Login</h1>
        {this.state.showLogin?<LoginForm />:null}
        {this.state.showGameTable?<GameTable />:null}
        {this.state.showUserTable?<UserTable />:null}
        <br></br>
        <br></br>
        {this.state.showResetVote?<ResetVote />:null}
      </div>
    );
  }
}
