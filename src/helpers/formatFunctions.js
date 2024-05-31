function formatDate(date) {
  if(date==="" || !date)
    {
      return "";
    }
  date = new Date(date);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatMinsToHours(time) {
  time = +time;
  let mins = time % 60;
  let hours = Math.floor(time / 60);
  return hours > 0 ? hours + "h " + mins + "m" : mins + "m";
}

function formatCurrencyUS(amount) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedAmount = formatter.format(amount);
  return formattedAmount;
}

export { formatDate, formatMinsToHours, formatCurrencyUS };
