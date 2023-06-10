export default function wrapping(gifts: string[]) {
  // Array to store the wrapped gifts
  let wrappedGifts: string[] = [];

  gifts.forEach((gift) => {
    // Creates a string of asterisks for the edge of the wrapping paper
    const edgePaper = "*".repeat(gift.length + 2);
    // Combines the edge paper, the wrapped gift, and the edge paper
    const wrappedGift = edgePaper + "\n*" + gift + "*\n" + edgePaper;
    // Adds the wrapped gift to the array of wrapped gifts
    wrappedGifts.push(wrappedGift);
  });

  // Returns the array of wrapped gifts
  return wrappedGifts;
}
