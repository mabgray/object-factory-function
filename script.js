const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log("Show-off your brand new outfit!");
    }
  };
  return outfit;
};
const tuesdayOutfit = createOutfit("pink", "beige");
const wednesOutfit = createOutfit("black", "white");
// console.log(tuesdayOutfit.shirt);
// tuesdayOutfit.showOff();
// console.log(tuesdayOutfit.isNew);
for (let key in tuesdayOutfit) {
  console.log(key, tuesdayOutfit[key]);
}

const outfitArr = [tuesdayOutfit, wednesOutfit];

for (let outfit of outfitArr) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
