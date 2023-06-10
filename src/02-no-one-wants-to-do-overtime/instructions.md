# instructions

A millionaire has bought a social network and it does not bring good news. He has announced that every time a working day is lost due to a holiday, it will have to be compensated with two extra hours on another day of the same year.

Obviously the people who work in the company have not found it funny at all and are preparing a program that tells them the number of overtime hours they would do in the year if the new standard were applied.

As it is an office job, his working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, returns the number of overtime hours that would be done that year:

const year = 2022
const holidays = ['01/06', '01/04', '12/25'] // MM/DD format

// 06/01 is January 6th, Thursday. Account.
// 01/04 is April 1st, a Friday. Account.
// 12/25 is December 25, a Sunday. Does not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year
Things to keep in mind and tips:

The year can be a leap year. Do the checks you need to for this, if necessary.
Although December 31 is a holiday, overtime will be done the same year and not the following.
The Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.
