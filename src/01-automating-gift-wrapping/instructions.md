# Instructions

This year the elves have bought a gift-wrapping machine. But... it doesn't come programmed! We need to create an algorithm to help you with the task.

The machine is passed an array with the gifts. Each gift is a string. We need the machine to wrap each gift in gift paper and place it in an array of wrapped gifts.

The wrapping paper is the symbol _ and to wrap a gift the symbol _ is placed so that it completely surrounds the string on all sides. For example:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/\* [
"*****\n*cat*\n*****",
"******\n*game*\n******",
"********\n*socks*\n********"
] \*/
As you can see, the wrapping paper wraps the string. Above and below, so as not to leave any gaps, the corners are also covered by the wrapping paper.

Note: The \n character represents a line break.

Eye! Make sure you put the correct number of \* to completely wrap the string. But not too many. Only those necessary to cover the string.

Oh, and don't mute the original array.
