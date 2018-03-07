import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeamSelectContainer from './components/team_select_container';

class App extends React.Component  {
  componentWillMount() {
    this.props.fetchAllTeams();
    this.props.fetchAllPlayers();
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path="/" component={TeamSelectContainer}/>
        </Switch>
      </div>
    );
  }

}

export default App;
