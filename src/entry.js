import nba from 'nba.js';

document.addEventListener("keypress", (e) => {
  let team = $("input")[0].value.toLowerCase();
  if(e.keyCode === 32) {
    nba.data.teamRoster({year: 2017, teamName: "nets"}).then((res) => console.log(res));

  }
});
