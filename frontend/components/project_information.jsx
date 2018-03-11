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
          represent a players average stat in that categroy divied by their
          average number of minutes.{" "}
        </p>
        </li>
<li>


        <div className="interpretation">The Interpretation:</div>
        <p className="data-info">
          Using the charts, one can see the impact each player has per minute
          they play. Therefore the chart can be used as a tool to help decide
          whom should be getting more or less playing time based off of there
          minute by minute performance.
        </p>
        </li>
      </div>
    </div>
  );
};

export default ProjectInformation;
