export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "akobaida" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "Ahmad" );
  }

  if (query.toLowerCase().includes("plus")) {
    return handleAddition(query);
  }

  if (query.toLowerCase().includes("largest")) {
    return handleLargest(query);
  }

  function handleAddition(query) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g).map(Number);
    if (numbers.length >= 2) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum.toString();
    } else {
        return "Addition query requires at least two numbers.";
    }
  }

  function handleLargest(query) {
    // Extract numbers from the query
    const numbers = query.match(/\d+/g).map(Number);
    if (numbers.length >= 2) {
        const largest = Math.max(...numbers);
        return largest.toString();
    } else {
        return "Largest number query requires at least two numbers.";
    }
  }

  return "";
}
