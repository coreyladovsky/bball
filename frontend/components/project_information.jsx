import React from "react";

const ProjectInformation = () => {
  return (
    <div>

      <div className="overview">
        <li>

        <div className="understanding"> Understanding The Data: </div>
        <p className="data-info">
          {" "}
          Every graph is a visual representation of a team and the impact each
          player has on that team. The outside ring is the average number of
          minutes each player plays per game. The following inner-circles
          represent a player's average stat in that categroy divided by their
          average number of minutes.{" "}
        </p>
        </li>
<li>


        <div className="interpretation">The Interpretation:</div>
        <p className="data-info">
          Using the charts, one can see the impact each player has per minute
          they play. The chart can be used as a tool to help decide
          whom should be getting more or less playing time based off of their
          minute by minute performance.
        </p>
        </li>
        <li>
          <div className="interpretation">The Fun:</div>
          <p className="data-info">
            Select different teams to find their superstars!
            Click on the player's names to see their individualized minute stats mulitipled by 48.
          </p>
        </li>

      </div>
    </div>
  );
};

export default ProjectInformation;
