export function countHours(year: number, holidays: string[]) {
  if (holidays?.length === 0) return 0;
  const EXTRA_HOURS = 2;
  let overtime = 0;
  holidays.forEach((holiday) => {
    const date = new Date(`${holiday}/${year}`);
    const day = date.getDay();
    if ([0, 6].includes(day)) return;
    overtime += EXTRA_HOURS;
  });
  return overtime;
}

export function countHoursReduce(year: number, holidays: string[]) {
  return holidays.reduce((overTimeHours, holiday) => {
    const EXTRA_HOURS = 2;
    const SATURDAY = 6;
    const SUNDAY = 0;
    const day = new Date(`${holiday}/${year}`).getDay();
    const isWorkday = ![SATURDAY, SUNDAY].includes(day);
    return isWorkday ? overTimeHours + EXTRA_HOURS : overTimeHours;
  }, 0);
}

// function itsLeapYear(year: string) {
//     if (!year) return "You dont pass a valid year";
//     const verifiedYear = typeof year === "string" ? parseInt(year) : year;
//     if (
//       (verifiedYear % 4 === 0 && verifiedYear % 100 !== 0) ||
//       verifiedYear % 400 === 0
//     ) {
//       return true;
//     }
//     return false;
//   }
