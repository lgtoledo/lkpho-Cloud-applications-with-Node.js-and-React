module.exports.getDate = function getDate() {
  var aestTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Montevideo",
  });
  return new Date(aestTime);
};
