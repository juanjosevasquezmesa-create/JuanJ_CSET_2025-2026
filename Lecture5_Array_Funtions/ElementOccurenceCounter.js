    const fruits = ['apple', 'banana', 'apple', 'orange'];
    const counts = fruits.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {}); // counts = { apple: 2, banana: 1, orange: 1 }

console.log(counts);
