// Change code below this line
function calculateMeanTemperature(forecast) {
  const {today:{low:todayLow, high:todayHigh}, 
         tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}



// TAKIE COŚ BYŁO
//   {today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }}
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
function calculateMeanTemperature(forecast) {
  const {today:{low:todayLow, high:todayHigh}, 
         tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
