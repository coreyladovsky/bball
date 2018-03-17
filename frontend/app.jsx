import React from "react";
import { Route, Switch } from "react-router-dom";
import TeamSelectContainer from "./components/team_select_container";
import ProjectInformation from "./components/project_information";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeams();
    this.props.fetchAllPlayers();
    this.checkPage = this.checkPage.bind(this);
    this.browserCheck = this.browserCheck.bind(this);
  }

  checkPage() {
    if (this.props.location.pathname === "/") {
      $(".app-pages").css({
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "space-around"
      });
      $(".intro-container").css("display", "block");
      $(".drop-down").css({"width":"500px"});
      $(".drop-container").css("min-width", "0");
      $(".footer-container").css("bottom", "0");
    } else {
      $(".app-pages").css("display", "block");
      $(".intro-container").css("display", "none");
      $(".drop-down").css("width", "inherit");
      $(".drop-container").css("min-width", "1300");
      $(".footer-container").css("bottom", "inherit");
    }
  }

  browserCheck() {
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if(isSafari) {
      return(
        <div className="safari-bubble"><div className="safari-text">Please Use Google Chrome </div></div>
      );
    }
  }

  render() {
    this.checkPage();

    return (
      <div className="app-start">
        {this.browserCheck()}
        <div className="intro-container">
          <h1 className="welcome-line"> NBA Stats By The Minute in 2017</h1>
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
