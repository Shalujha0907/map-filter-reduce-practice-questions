// start of suqaresOf
const square = function (number) {
  return Math.pow(number, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

// console.log(squaresOf([1, 2, 3, 4]), squaresOf([0, 1, 5]));
/*                   end of squaresOf                    */

// start of lengthsOf
const lengthOfElement = function (element) {
  return element.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthOfElement);
};

// console.log(
//   lengthsOf(["apple", "banana", "kiwi"]),
//   lengthsOf(["", "grapes", "  "])
// );

/*                   end of lengthsOf                   */

// start of uppercaseOf
const intoUpperCase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(intoUpperCase);
};

// console.log(
//   uppercaseOf(["something"]),
//   uppercaseOf(["hello", "world"]),
//   uppercaseOf(["", "  "])
// );

/*                      end of upperCaseOf                         */

// start of firstCharactersOf
const getFirstChar = function (string) {
  return string[0];
};

const firstCharactersOf = function (strings) {
  return strings.map(getFirstChar);
};

// console.log(
//   firstCharactersOf(["hello", "world"]),
//   firstCharactersOf(["how", "are", "you", "doing"])
// );

/*              end of firstCharacterOf                          */

// start of truthValuesOf
const isNonZero = function (number) {
  return number !== 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(isNonZero);
};

// console.log(
//   truthValuesOf([0, 1, 2]),
//   truthValuesOf([0, 0]),
//   truthValuesOf([10, 100, 100])
// );
/*              end of truthValuesOf                              */

// start of reversedStringsOf
const prependToAccumulator = function (reverseSoFar, element) {
  return element + reverseSoFar;
};

const getReverse = function (string) {
  const stringInArr = [];
  stringInArr.push(...string);

  return stringInArr.reduce(prependToAccumulator, "");
};

const reversedStringsOf = function (strings) {
  return strings.map(getReverse);
};

// console.log(
//   reversedStringsOf(["hello", "world"]),
//   reversedStringsOf(["", " "]),
//   reversedStringsOf(["olleh", "dlrow"])
// );

/*              end of reversedStringsOf                             */

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleLettersOf = function (strings) {};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {};

// start of domainNamesOf
const getSplitByChar = function (element, char) {
  return element.split(char);
};

const getDomain = function (email) {
  return getSplitByChar(email, "@").at(-1);
};

const domainNamesOf = function (emails) {
  return emails.map(getDomain);
};

// console.log(
//   domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]),
//   domainNamesOf([""]),
//   domainNamesOf(["nandu@gvc.com", "choti@something.com"])
// );

const concat = function (init, element) {
  return element + init;
};

const reverseOfStr = function (string) {
  const array = [];
  array.push(...string);

  return array.reduce(concat, "");
};

/*                    end of domainNamesOf                            */

// start of splitWordsOf
const splitAtSpace = function (string) {
  return getSplitByChar(string, " ");
};

const splitWordsOf = function (strings) {
  return strings.map(splitAtSpace);
};

// console.log(
//   splitWordsOf(["hello world", "goodbye moon"]),
//   splitWordsOf(["hello", "moon", " "])
// );

/*                          end of splitWordsOf                       */
// start of joinArraysOf
const mergeArray = function (list) {
  return list.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(mergeArray);
};

// console.log(
//   joinedArraysOf([
//     ["a", "b"],
//     ["c", "d"],
//   ]),
//   joinedArraysOf([["", "", " "]]),
//   joinedArraysOf([
//     ["shalu", "jha"],
//     ["thought", "Works"],
//   ])
// );

/*                  end of joinedArraysOf                             */

// start of repeatedStringsOf
const doublingElement = function (string) {
  return string.repeat(2);
};

const repeatedStringsOf = function (strings) {
  return strings.map(doublingElement);
};

// console.log(
//   repeatedStringsOf(["hi", "bye"]),
//   repeatedStringsOf([""], ["  "]),
//   repeatedStringsOf(["qwerty"])
// );

/*                      end of repeatedStringsOf                      */

// start of countVowelsOf
const isVowel = function (char) {
  return "aeiouAEIOU".includes(char);
};

const counter = function (count, char) {
  return isVowel(char) ? count + 1 : count;
};

const vowelCount = function (string) {
  return [...string].reduce(counter, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(vowelCount);
};

// console.log(
//   countVowelsOf(["apple", "banana", "grape"]),
//   countVowelsOf(["bcd", "dfg"]),
//   countVowelsOf(["", "  "]),
//   countVowelsOf(["aeiouAeiou"])
// );

/*                      end of countVowelsOf                       */

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reverseOfArray = function (collection) {
  return collection.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseOfArray);
};

console.log(
  reversedArraysOf([
    [1, 2, 3],
    [4, 5, 6],
  ]),
  reversedArraysOf([[0, 0, 0]])
);

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]

const consonantContainedWord = function (word) {
  return word.filter(!isVowel);
};

const withoutVowelsOf = function (strings) {
  return strings.map(consonantContainedWord);
};

// console.log(
//   withoutVowelsOf(["apple", "banana", "grape"]),
//   withoutVowelsOf(["bcd", ""])
// );

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const cumulativeSumsOf = function (arrays) {};

// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {};

// extract unique characters from ["apple", "banana", "grape"] => ["apl", "ban", "gra"]
// Maintain the order of their first appearance in each string
const uniqueCharactersOf = function (strings) {};

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const greaterThan = function (from, to) {
  return from > to;
};

const lessThan = function (from, to) {
  return from < to;
};

const getRange = function (from, to, step) {
  if (step === 0) {
    return [];
  }
  const range = [];
  const condition = from < to ? lessThan : greaterThan;

  for (let i = from; condition(i, to); i += step) {
    range.push(i);
  }

  return range;
};

const rangesOf = function (numbers) {
  return numbers.map((number) => getRange(0, number, 1));
};

console.log(rangesOf([1, 2, 3]), rangesOf([5, 0, 7]));

/*                          end of rangesOf                         */

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalizedFirstLettersOf = function (strings) {};

// console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const getLength = (string) => {
  const stringList = string.split(" ");

  return stringList.map((word) => word.length);
};

const wordLengthsOf = function (strings) {
  return strings.map(getLength);
};

console.log(
  wordLengthsOf(["apple pie", "banana split"]),
  wordLengthsOf(["a p i e", "b an ana spli"])
);

/*                         end of wordLengthOf                      */

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {};

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(([...string]) => string.sort().join(""));
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) {
  return strings.map((string) => "[" + string + "]");
};

console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) {
  return objects.map((objectInfo) => objectInfo.name);
};

console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map((objectInfo) => objectInfo.age);
};

console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map((objectInfo) => objectInfo.name[0]);
};

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) {
  return rectangles.map((dimensions) => dimensions.width * dimensions.height);
};

console.log(
  calculateAreas([
    { width: 2, height: 3 },
    { width: 4, height: 5 },
  ])
);

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) {
  return objects.map((objectInfo) => objectInfo.active);
};

console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) {
  return objects.map(
    (objectInfo) => objectInfo.firstName + " " + objectInfo.lastName
  );
};

console.log(
  fullNames([
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Brown" },
  ])
);

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) {
  return objects.map(({ price, quantity }) => price * quantity);
};

console.log(
  totalPrices([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
  ])
);

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map((objectInfo) => (objectInfo.age >= 18 ? true : false));
};

console.log(
  isAdult([
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
  ])
);

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const getInitials = ({ city, country }) => {
  return (
    city
      .split(" ")
      .map((word) => word[0])
      .join("") +
    ", " +
    country
  );
};

const abbreviations = function (objects) {
  return objects.map(getInitials);
};

console.log(
  abbreviations([
    { city: "New York", country: "USA" },
    { city: "Los Angeles", country: "USA" },
  ])
);

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) {
  return objects.map(({ scores }) => scores.math);
};

console.log(
  mathScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

const englishScores = function (objects) {
  return objects.map(
    ({ name, scores }) => name + "'s englishScore: " + scores.english
  );
};

console.log(
  englishScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) {
  return objects.map((coordinate) => [coordinate.x, coordinate.y]);
};

console.log(
  extractCoordinates([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ])
);

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) {
  return objects.map((personDetails) => [
    personDetails.firstName,
    personDetails.lastName,
    personDetails.age,
  ]);
};

console.log(
  fullNameAndAge([
    { firstName: "Alice", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Brown", age: 30 },
  ])
);

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) {
  return objects.map(({ scores }) => [scores.math, scores.english]);
};

console.log(
  extractScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) {
  return objects.map(({ key, value }) => ['"' + key + '"', value]);
};

console.log(
  keyValuePairs([
    { key: "a", value: 1 },
    { key: "b", value: 2 },
  ])
);

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) {
  return objects.map(({ name }) => [name.split(" ")]);
};

console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) {
  return objects.map(({ score }) => score / 100);
};

console.log(
  normalizeScores([
    { name: "Alice", score: 80 },
    { name: "Bob", score: 100 },
  ]),
  normalizeScores([
    { name: "Aly", score: 67 },
    { name: "Bubliee", score: 75 },
  ])
);

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const sum = (accumulator, number) => {
  return accumulator + number;
};

const percentageContributions = function (numbers) {
  const total = numbers.reduce(sum, 0);

  return numbers.map((number) => (number / total) * 100);
};

console.log(percentageContributions([10, 20, 30]));

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const minOf = (minInit, number) => {
  return minInit < number ? minInit : number;
};

const subtractMin = function (numbers) {
  const minInit = numbers[0];
  const minimum = numbers.reduce(minOf, minInit);

  return numbers.map((number) => number - minimum);
};

console.log(subtractMin([3, 8, 1]));

// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]
const calculateRanks = function (objects) {};

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const getLongestWord = (longestInit, word) => {
  return longestInit.length > word.length ? longestInit : word;
};

const normalizeStringLengths = function (strings) {
  const maximuming = strings.reduce(getLongestWord, "").length;

  return strings.map((string) => string.padEnd(maximuming, " "));
};

console.log(normalizeStringLengths(["cat", "elephant", "dog"]));

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyStrings = function (strings) {};

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const scaleToMax100 = function (numbers) {};

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const mean = (numbers) => {
  return numbers.reduce(sum, 0) / numbers.length;
};

const differencesFromMean = function (numbers) {
  const meanValue = mean(numbers);

  return numbers.map((number) => number - meanValue);
};

console.log(differencesFromMean([10, 20, 30]));

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]

const stringFrequencies = function (strings) {
  return strings.map((string) =>
    strings.reduce((count, word) => (word === string ? count + 1 : count), 0)
  );
};

console.log(
  stringFrequencies(["apple", "banana", "apple", "apple", "banana"]),
  stringFrequencies(["merry", "christmas", "merry", "christmas"])
);

// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]
const findLargestNumber = (maxInit, number) => {
  return maxInit > number ? maxInit : number;
};

const markLargestNumber = function (numbers) {
  const largestNumber = numbers.reduce(findLargestNumber, 0);

  return numbers.map((number) => (number === largestNumber ? true : false));
};

console.log(
  markLargestNumber([1, 3, 2]),
  markLargestNumber([1, 8, 0]),
  markLargestNumber([7, 7])
);

// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.
const normalizeWithCurve = function (objects) {};

// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.
const groupByGrade = function (objects) {};

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const sortByLengthAndAlphabet = function (strings) {};

// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeByRange = function (numbers) {};

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const percentageOfTotalSorted = function (numbers) {};

// start of sortStudentsByAverage
const average = function (collection, numOfElement) {
  if (numOfElement === 0) {
    return 0;
  }

  const total = collection.reduce(sum, 0);

  return total / numOfElement;
};

const sortStudentsByAverage = function (students) {
  console.log(
    students.map(({ name, grades }) => {
      name, grades;
    })
  );

  return students.map((student) => {
    student.name, student.grades;
  });
};

console.log(
  sortStudentsByAverage([
    { name: "Alice", grades: [80, 90, 85] },
    { name: "Bob", grades: [70, 75, 80] },
  ])
);

/*                        end of sortStudentsByAverage                   */

// start of mapToBinaryAndGroup
const intoBinary = (number) => {
  if (number === 0) {
    return "0";
  }

  let numberInBinary = "";

  while (number > 0) {
    numberInBinary = (number % 2) + numberInBinary;
    number = Math.floor(number / 2);
  }

  return numberInBinary;
};

const mapToBinaryAndGroup = function (numbers) {
  return numbers.map((number) => [intoBinary(number)]);
};

console.log(
  mapToBinaryAndGroup([1, 2, 3, 4, 5]),
  mapToBinaryAndGroup([0, 6, 7])
);

/*                          end of mapToBinaryAndGroup                   */

// start flattenAndFilterEven
const isEven = function (number) {
  return (number & 1) !== 1;
};

const flattenAndFilterEven = function (arrays) {
  return arrays.flatMap((number) => number).filter(isEven);
};

console.log(
  flattenAndFilterEven([
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ])
);

/*                       end of flattenAndFilterEven                 */

// start of filterAdultsAndSort
const filterAdultsAndSort = function (arrays) {
  return arrays
    .filter((element) => element[1] > 18)
    .map((element) => element[0])
    .sort();
};

console.log(
  filterAdultsAndSort([
    ["Alice", 25],
    ["Bob", 17],
    ["Charlie", 22],
  ]),
  filterAdultsAndSort([
    ["zara", 19],
    ["yash", 21],
    ["Charlie", 18],
    ["kirti", 22],
  ])
);

/*                        end of filterAdultsAndSort                      */

// given an array of objects representing sales with date and amount, calculate the total sales for each month and return them as an array of arrays like [[month, total], ...] in [{ date: "2024-01-15", amount: 100 }, { date: "2024-02-10", amount: 150 }, { date: "2024-01-25", amount: 200 }] => [["2024-01", 300], ["2024-02", 150]]
// Steps: Group by month, sum the sales for each month.
const totalSalesByMonth = function (sales) {};

// map each employee's department to their total salary, and then return an array of objects with department name and total salary in [{ name: "Alice", department: "HR", salary: 5000 }, { name: "Bob", department: "Engineering", salary: 6000 }, { name: "Charlie", department: "HR", salary: 4500 }] => [{ department: "HR", totalSalary: 9500 }, { department: "Engineering", totalSalary: 6000 }]
// Steps: Group by department, sum the salaries for each department.
const totalSalaryByDepartment = function (employees) {};

// for a list of students, return an array of objects that includes the student's name and their highest grade in [{ name: "Alice", grades: { math: 80, science: 90, history: 70 } }, { name: "Bob", grades: { math: 70, science: 85, history: 95 } }] => [{ name: "Alice", highestGrade: 90 }, { name: "Bob", highestGrade: 95 }]
// Steps: For each student, find the highest grade from their grades object.
const maximumn = function (number) {
  return (number & 1) !== 1;
};

const highestGradeByStudent = function (students) {};

// for a list of books with authors and publication years, return an array of objects that categorizes books into "old" (published before 2000) and "new" (published after 2000) in [{ title: "Book1", author: "Author1", year: 1999 }, { title: "Book2", author: "Author2", year: 2005 }] => [{ category: "old", books: [{ title: "Book1", author: "Author1" }] }, { category: "new", books: [{ title: "Book2", author: "Author2" }] }]
// Steps: Categorize by year, group books accordingly.
const categorizeBooksByYear = function (books) {};

// for a list of transactions, return an array of objects where each object contains the user's name and the total amount they spent, grouping by user name in [{ user: "Alice", transaction: { amount: 50, date: "2024-01-01" } }, { user: "Bob", transaction: { amount: 30, date: "2024-01-02" } }, { user: "Alice", transaction: { amount: 20, date: "2024-01-03" } }] => [{ user: "Alice", totalSpent: 70 }, { user: "Bob", totalSpent: 30 }]
// Steps: Group by user, sum the transaction amounts for each user.
const totalSpentByUser = function (transactions) {};

// given an array of products, each with name, price, and discount, return a list of objects containing the product name and final price (after applying the discount), rounding the final price to two decimal places in [{ name: "Product1", price: 100, discount: 0.1 }, { name: "Product2", price: 150, discount: 0.2 }] => [{ name: "Product1", finalPrice: 90.00 }, { name: "Product2", finalPrice: 120.00 }]
// Steps: Apply discount, calculate final price, round to two decimal places.
const finalPriceAfterDiscount = function (products) {};

// flatten a list of arrays representing orders, where each order contains items, and return a single array of item names in [["item1", "item2"], ["item3", "item4"]] => ["item1", "item2", "item3", "item4"]
// Steps: Use `flatMap` to flatten the arrays into a single array of items.
const flattenOrderItems = function (orders) {};

// given a list of objects representing students with their courses, use `flatMap` to return a list of all unique courses that the students are enrolled in in [{ name: "Alice", courses: ["Math", "History"] }, { name: "Bob", courses: ["Math", "Science"] }] => ["Math", "History", "Science"]
// Steps: Use `flatMap` to combine all courses into a single array, then filter out duplicates.
const uniqueCourses = function (students) {};

// given a list of users, where each user has a list of messages, return an array of messages that contain the word "urgent" in [{ name: "Alice", messages: ["Urgent: Pay bills", "Meeting at 3"] }, { name: "Bob", messages: ["Urgent: Call customer", "Check email"] }] => ["Urgent: Pay bills", "Urgent: Call customer"]
// Steps: Use `flatMap` to combine all messages, then filter for "urgent" messages.
const urgentMessages = function (users) {};

// given a list of categories, where each category contains multiple tags, use `flatMap` to return a list of all tags in [{ category: "Tech", tags: ["JavaScript", "Node"] }, { category: "Design", tags: ["UX", "UI"] }] => ["JavaScript", "Node", "UX", "UI"]
// Steps: Use `flatMap` to combine all tags into a single array.
const allTags = function (categories) {};

// given a list of people, where each person has a list of friends, use `flatMap` to return a list of all friends, excluding duplicates, in [{ name: "Alice", friends: ["Bob", "Charlie"] }, { name: "Bob", friends: ["Alice", "David"] }] => ["Bob", "Charlie", "David"]
// Steps: Use `flatMap` to flatten the friends arrays, then remove duplicates.
const allFriends = function (people) {};

// given an array of strings, return a new array where each string is prefixed with its index (e.g., "0: Alice", "1: Bob") in ["Alice", "Bob", "Charlie"] => ["0: Alice", "1: Bob", "2: Charlie"]
// Steps: Use the index parameter in the `map` function to prefix the strings.
const prefixWithIndex = function (names) {};

// given an array of numbers, return a new array where each number is multiplied by its index in [2, 4, 6] => [0, 4, 12]
// Steps: Use the index parameter in the `map` function to multiply the number by its index.
const multiplyByIndex = function (numbers) {};

// given an array of prices, return a new array where each price is discounted by 5% for every index greater than 2, and the discount is 0% for indices less than or equal to 2 in [100, 200, 300, 400, 500] => [100, 200, 300, 380, 475]
// Steps: Use the index parameter in `map` to conditionally apply the discount.
const discountByIndex = function (prices) {};

// given an array of names, return a new array where each name is formatted as "Name: X", where X is the index of the name, and prepend "Index - " to names at even indices in ["Alice", "Bob", "Charlie"] => ["Index - 0: Alice", "1: Bob", "Index - 2: Charlie"]
// Steps: Use the index parameter in `map` to conditionally format the names.
const formatNamesWithIndex = function (names) {};

// given an array of objects with 'name' and 'age' properties, return a new array of strings where each string is "name is age years old" and append "(old)" for every person whose index is greater than or equal to 2 in [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }] => ["Alice is 30 years old", "Bob is 25 years old", "Charlie is 35 years old (old)"]
// Steps: Use the index parameter in `map` to conditionally append "(old)".
const formatNamesWithAge = function (people) {};

// given an array of posts, each with a list of hashtags, return a flat list of all hashtags used in the posts in
// [{ post: "Vacation", hashtags: ["#sunny", "#beach"] }, { post: "Dinner", hashtags: ["#food", "#yum"] }]
// => ["#sunny", "#beach", "#food", "#yum"]
// Steps: Use `flatMap` to extract all hashtags and combine them into a single list.
const extractHashtags = function (posts) {};

// given an array of users, each with a list of followers, return an array where each user is paired with the number of their followers
// [{ username: "alice", followers: ["bob", "charlie"] }, { username: "bob", followers: ["alice"] }]
// => [{ username: "alice", followersCount: 2 }, { username: "bob", followersCount: 1 }]
// Steps: Use `map` to create an object with the username and the count of followers.
const countFollowers = function (users) {};

// given an array of posts, each with a list of comments, return a new array of the comments with a "replied to" note added if the post index is even
// [{ post: "Vacation", comments: ["Nice!", "Love it!"] }, { post: "Dinner", comments: ["Yummy", "Looks great!"] }]
// => [["Nice! replied to", "Love it! replied to"], ["Yummy", "Looks great!"]]
// Steps: Use `map` and the index to conditionally append "replied to" for even indexed posts.
const addReplyNoteToComments = function (posts) {};

// given an array of videos, each with a list of comments, return a new array where each comment is capitalized if the number of likes on the video is more than 1000
// [{ video: "Dance", likes: 1200, comments: ["great video", "love this"] }, { video: "Food", likes: 800, comments: ["looks good", "yum"] }]
// => [["Great video", "Love this"], ["looks good", "yum"]]
// Steps: Use `map` to capitalize comments only if the number of likes exceeds 1000.
const capitalizeCommentsIfPopular = function (videos) {};

// given an array of posts, each with a list of user tags, return a new array where each tag is transformed into an object with { tag: 'username', count: x },
// where x is the number of times the tag appears in the post's list of tags, in [{ post: "TikTok Challenge", tags: ["fun", "dance", "fun"] }, { post: "Viral Recipe", tags: ["recipe", "yum", "fun"] }]
// => [{ tag: "fun", count: 2 }, { tag: "dance", count: 1 }, { tag: "recipe", count: 1 }, { tag: "yum", count: 1 }]
// Steps: Use `map` to return objects with the tag and count, aggregating the counts based on the tags in each post.
const tagCount = function (posts) {};

// given two arrays, one of numbers and one of multipliers, create closures to multiply the base by the multiplier, then use flatMap to multiply each number in the base array by each multiplier
// [1, 2], [1, 2, 3] => [1, 2, 3, 2, 4, 6]
const multiply = function (bases, multipliers) {};

// given two arrays, one of numbers and one of addends, create closures to add the base number to the addend, then use flatMap to apply each addend to each number
// [1, 2], [5, 10] => [6, 11, 7, 12]
const add = function (bases, addends) {};

// given two arrays, one of numbers and one of divisors, create closures to divide the base number by the divisor, then use flatMap to divide each number by each divisor
// [10, 20], [2, 5] => [5, 2, 4, 4]
const divide = function (bases, divisors) {};

// given two arrays, one of numbers and one of exponents, create closures to raise the base number to the exponent, then use flatMap to raise each number by each exponent
// [2, 3], [2, 3] => [4, 8, 9, 27]
const power = function (bases, exponents) {};

// given two arrays, one of prices and one of discounts, create closures to apply the discount to the price, then use flatMap to apply each discount to each price
// [100, 200], [0.1, 0.2] => [90, 180, 160, 240]
const applyDiscount = function (prices, discounts) {};

// given two arrays, one of names and one of titles, create closures that combine each name with each title, then use flatMap to generate all combinations of names and titles
// ["Alice", "Bob"], ["Developer", "Manager"] => ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]
const combineNameAndTitle = function (names, titles) {};

// given two arrays, one of numbers and one of multipliers, create closures that multiply the base number by the corresponding multiplier at the same index, then return the results
// [1, 2, 3], [2, 3, 4] => [2, 6, 12]
const multiplyByCorresponding = function (bases, multipliers) {};

// given an array of objects, where each object contains a `name` and `age`, create a closure for each person that adds a `yearsToRetirement` property, then use flatMap to calculate the retirement year for each person assuming retirement at 65
// [{name: "Alice", age: 30}, {name: "Bob", age: 40}] => ["Alice will retire in 35 years", "Bob will retire in 25 years"]
const calculateRetirement = function (people) {};

// given an array of numbers, create a closure that checks if a number is greater than or equal to a specified value (e.g., 10), then use flatMap to return only the numbers that meet the condition
// [5, 10, 15], 10 => [10, 15]
const filterGreaterThanEqual = function (numbers, threshold) {};

// given an array of strings representing messages and an array of punctuation marks, create closures that append each punctuation mark to each message, then use flatMap to create all possible combinations of messages with punctuation
// ["Hello", "Goodbye"], ["!", "?"] => ["Hello!", "Hello?", "Goodbye!", "Goodbye?"]
const addPunctuation = function (messages, punctuations) {};

// given an array of user objects with `name` and `age`, create closures that return a greeting with the user's name, then use flatMap to apply the closure to each user
// [{name: "Alice", age: 30}, {name: "Bob", age: 25}] => ["Hello Alice!", "Hello Bob!"]
const greetUsers = function (users) {};

// given two arrays, one of people’s names and one of ages, create closures to generate a message indicating whether each person is an adult (18 or older), then use flatMap to apply the closure to each person
// ["Alice", "Bob"], [20, 17] => ["Alice is an adult", "Bob is not an adult"]
const checkAdultStatus = function (names, ages) {};

// given an array of product objects, each containing `name` and `price`, create closures to apply a sales tax (e.g., 10%) to the price, then use flatMap to calculate the price with tax for each product
// [{name: "Shirt", price: 20}, {name: "Shoes", price: 50}] => [22, 55]
const applySalesTax = function (products) {};

// given an array of user objects with `name` and `posts`, return an array of objects where each object contains the user's name and an array of post titles
// [{name: "Alice", posts: [{title: "Post 1"}, {title: "Post 2"}]}, {name: "Bob", posts: [{title: "Post 3"}]}]
// => [{name: "Alice", posts: ["Post 1", "Post 2"]}, {name: "Bob", posts: ["Post 3"]}]
const getUserPostTitles = function (users) {};

// given an array of products, where each product contains a `name`, `price`, and `tags` array, return a new array of products where each product contains its name and an array of uppercased tags
// [{name: "Shirt", price: 20, tags: ["cotton", "summer"]}, {name: "Shoes", price: 50, tags: ["leather", "winter"]}]
// => [{name: "Shirt", tags: ["COTTON", "SUMMER"]}, {name: "Shoes", tags: ["LEATHER", "WINTER"]}]
const formatProductTags = function (products) {};

// given an array of categories where each category has a `categoryName` and `items` array, return a new array where each item is an object with the category name and an array of item names
// [{categoryName: "Fruits", items: [{name: "Apple"}, {name: "Banana"}]}, {categoryName: "Vegetables", items: [{name: "Carrot"}]}]
// => [{categoryName: "Fruits", items: ["Apple", "Banana"]}, {categoryName: "Vegetables", items: ["Carrot"]}]
const getCategoryItems = function (categories) {};

// given an array of order objects with `orderId` and `products`, where each product has a `name` and `quantity`, return an array of orders, where each order contains its `orderId` and an array of product names, each with the quantity
// [{orderId: 1, products: [{name: "Laptop", quantity: 1}, {name: "Mouse", quantity: 2}]}, {orderId: 2, products: [{name: "Keyboard", quantity: 1}]}]
// => [{orderId: 1, products: ["Laptop x1", "Mouse x2"]}, {orderId: 2, products: ["Keyboard x1"]}]
const summarizeOrderProducts = function (orders) {};

// given an array of students, each with a `name` and a `courses` array, return a new array of objects, where each object contains the student's name and an array of their course names in uppercase
// [{name: "Alice", courses: [{courseName: "Math"}, {courseName: "Science"}]}, {name: "Bob", courses: [{courseName: "English"}]}]
// => [{name: "Alice", courses: ["MATH", "SCIENCE"]}, {name: "Bob", courses: ["ENGLISH"]}]
const getStudentCourses = function (students) {};

// given an array of books, each with a `title` and `chapters`, where each chapter has a `title` and a `pageCount`, return an array of books, each containing the book's title and an array of chapter titles along with their page counts
// [{title: "Book 1", chapters: [{title: "Chapter 1", pageCount: 10}, {title: "Chapter 2", pageCount: 20}]}, {title: "Book 2", chapters: [{title: "Chapter 1", pageCount: 15}]}]
// => [{title: "Book 1", chapters: ["Chapter 1: 10 pages", "Chapter 2: 20 pages"]}, {title: "Book 2", chapters: ["Chapter 1: 15 pages"]}]
const summarizeBookChapters = function (books) {};

// given an array of events, where each event has a `name` and an array of `attendees`, where each attendee has a `firstName` and `lastName`, return an array of events where each event contains the event name and an array of full names of attendees
// [{name: "Concert", attendees: [{firstName: "John", lastName: "Doe"}, {firstName: "Jane", lastName: "Smith"}]}, {name: "Conference", attendees: [{firstName: "Bob", lastName: "Brown"}]}]
// => [{name: "Concert", attendees: ["John Doe", "Jane Smith"]}, {name: "Conference", attendees: ["Bob Brown"]}]
const getEventAttendees = function (events) {};
