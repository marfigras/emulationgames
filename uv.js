const game = document.querySelector("#gameiframe");
var plink = localStorage.getItem("plink")

if (plink == "r.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/" + game.dataset.gamelink;
  game.setAttribute('id', 'riframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (plink == "r2.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/" + game.dataset.gamelink;
  game.setAttribute('id', 'r2iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
} else if (plink == "r3.emulatoros.ga") {
  console.log('start ' + plink + ' change');
  var site = plink + "/" + game.dataset.gamelink;
  game.setAttribute('id', 'r3iframe');
  game.setAttribute('allowfullscreen', 'true')
  game.setAttribute('scrolling', 'yes')
  game.src = site;
  console.log('finish ' + plink + ' change link');
}
console.log(game.dataset.gamelink);
