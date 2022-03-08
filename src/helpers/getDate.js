export function getDate() {
  
  let month = new Date().getMonth();
  let day = new Date().getDay();
  let monthName = "";
  const dayNames = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wenesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const dateArr = [];

  const date = new Date();

  if (month >= 0 || month <= 12) {
    date.setMonth(month);
    monthName = Intl.DateTimeFormat("en-EN", { month: "long" }).format(date);
  }

  dateArr[0] = dayNames[day];
  dateArr[1] = date.getDate();
  dateArr[2] = monthName;
  dateArr[3] = date.getFullYear();

  return dateArr;
}
