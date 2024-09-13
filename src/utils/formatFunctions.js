const formatDate = (date) => {
  if (date === "" || !date) {
    return "";
  }
  date = new Date(date);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const formatMinsToHours = (time) => {
  time = +time;
  let mins = time % 60;
  let hours = Math.floor(time / 60);
  return hours > 0 ? hours + "h " + mins + "m" : mins + "m";
};

const formatCurrencyUS = (amount) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedAmount = formatter.format(amount);
  return formattedAmount;
};

const capitalize = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export { formatDate, formatMinsToHours, formatCurrencyUS, capitalize };
