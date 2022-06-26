// Change code below this line
function calculateMeanTemperature(forecast) {
  const {today:{low:todayLow, high:todayHigh}, 
         tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
