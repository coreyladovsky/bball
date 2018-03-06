import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeamContainer from './components/team_container';

class App extends React.Component  {
  componentWillMount() {
    this.props.fetchAllTeams();
    this.props.fetchAllPlayers();
  }

  render() {
    return(
      <div>
        <Switch>
          <TeamContainer />
        </Switch>
      </div>
    );
  }

}

export default App;
