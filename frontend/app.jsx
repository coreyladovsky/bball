import React from "react";
import { Route, Switch } from "react-router-dom";
import TeamSelectContainer from "./components/team_select_container";
import ProjectInformation from "./components/project_information";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeams();
    this.props.fetchAllPlayers();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ProjectInformation} />
        <Switch>
          <Route path="/" component={TeamSelectContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
