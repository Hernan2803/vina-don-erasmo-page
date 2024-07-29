function getDateConverted(dateStr) {
  // Parse the date in YYYYMMDD format
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  // Create a Date object
  const date = new Date(year, month - 1, day);

  // Get the name of the month in Spanish
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const nameMonth = months[date.getMonth()];

  // Format the date to 'Month DD, YYYY'
  const dateFormatted = `${nameMonth} ${day}, ${year}`;

  return dateFormatted;
}

export default getDateConverted;
