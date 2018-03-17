# NBA Stats By The Minute in 2017

Welcome and thanks for reading about [NBA Stats By The Minute in 2017](https://nba-stats-corey-ladovsky.herokuapp.com)!


### The Concept:

NBA Stats By The Minute is a tool that allows people to dive deeper into players' stats.
The team graph shows each player's minute by minute impact compared to the rest of their teammates. The outside ring is their average number of minutes played per game. Each ring that follows represents the average in another stat (ex. Points Per Game) divided by their average Minutes Per Game. Each result is their average Stat Per Minute. I have chosen to represent their impact this way, because it eliminates the differences in a player's allotted play time.

An in-game situation where the graph could be useful: There's one more play left in the game, your team is ahead by 2 points and the other team has the ball. You absolutely need a stop. By quickly looking at my team graph it is easy to see which of the players have the strongest defensive minute by minute stats.

Click on a player to see a more individualized breakdown of that player's stats. These stats are again created by the "average stat per game" divided by "average minute per game". I have then multiplied the outcome by 48 as if that player were to play for the entire game.


![App in Action](https://thumbs.gfycat.com/SimplisticPaleCutworm-size_restricted.gif)


### The Technologies

This app uses an express server for api calls so that I am able to avoid a CORS error.
In the frontend I am using React Redux as well as d3 and JQuery.
I am working with HTML5 as well as CSS3 for design and styling purposes.
I am utilizing [react-faux-dom](https://github.com/Olical/react-faux-dom) in order to coerce d3 and React into working together.
Player pictures are coming from [nba-player-stats-api](https://github.com/hlyford/nba-player-stats-api).
All data is being called from [nba.js](https://github.com/kshvmdn/nba.js/blob/master/docs/api/DATA.md).

### The Tricky Parts

One of the trickiest parts was coercing React and d3 to work together. It's tricky because both libraries want control of the dom. I was able to accomplish this coordination with the aid of react-faux-dom. With react-faux-dom I was able to create a virtual node that I could then pass to d3. I was then able to write in d3 as normal. After all calculations and design were complete, the d3's virtual dom would then be turned into React. React then used it's virtual dom to diff the differences and update the real dom.

Another thing that caused some serious set backs was the CORS errors. I wasn't able to get the nba api to play nicely with my frontend. However, I was able to work around this by adding an express server to my backend to do all the heavy lifting.

### The Future

There are a few things I would like to continue to implement and improve. The number one thing I would like to add is a player search as well as player comparisons. I think it would be awesome to be able to build a hand picked team and see how their stats differ.

I'd also love to go back and refactor some of the code. This was my first attempt with d3, and I think there are many places I could dry up the code.
