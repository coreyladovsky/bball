import React from "react";
import { Route, Switch } from "react-router-dom";
import TeamSelectContainer from "./components/team_select_container";
import ProjectInformation from "./components/project_information";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeams();
    this.props.fetchAllPlayers();
    this.checkPage = this.checkPage.bind(this);
  }

  checkPage() {
    if(this.props.location.pathname === "/") {
      $(".app-pages").css({"display": "flex", "flex-direction": "row", "justify-content": "space-around"});
      $(".intro-container").css("display", "block");
      $(".drop-down").css("width", "500px");
      $(".footer-container").css("bottom", "0");
    } else {
      $(".app-pages").css("display", "block");
      $(".intro-container").css("display", "none");
      $(".drop-down").css("width", "inherit");
      $(".footer-container").css("bottom", "inherit");


    }
  }

  render() {
    this.checkPage();
    return (
      <div >
        <div className="intro-container">
        <h1 className="welcome-line"> NBA Stats By The Minute</h1>
        <h3 className="name">By Corey Ladovsky</h3>
      </div>
        <div className="app-pages">
        <Route exact path="/" component={ProjectInformation} />
        <Switch>
          <Route path="/" component={TeamSelectContainer} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
