// start of sumOf
const add = function (sumSoFar, number) {
  return sumSoFar + number;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

console.log(sumOf([1, 2, 3, 4]), sumOf([0, 1, 0, 1]));

/*                    end of sumOf                                   */

// start of productOf
const product = function (productSoFar, number) {
  return productSoFar * number;
};

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};

console.log(productOf([1, , 2, 3, 4]), productOf([0, 1, 2, 3]));

/*                      end of sumOf                                  */

// start of averageOf
const averageOf = function (numbers) {
  return (function (numbers) {
    return numbers.reduce(add, 0) / numbers.length;
  })(numbers);
};

console.log(
  averageOf([1, 2, 3, 4, 5]),
  averageOf([5, 5, 5, 5]),
  averageOf([0])
);

/*                        end of averageOf                           */

// start of minOf
const getMinimum = function (minValue, number) {
  return minValue < number ? minValue : number;
};

const minOf = function (numbers) {
  return numbers.reduce(getMinimum, 1);
};

console.log(
  minOf([3, 1, 4, 1, 5, 9, 2]),
  minOf([0, 1, 0, 1]),
  minOf([0, 0, 0])
);

/*                      end of minOf                                */

// start of maxOf
const getMaximum = function (maxValue, number) {
  return maxValue > number ? maxValue : number;
};

const maxOf = function (numbers) {
  return numbers.reduce(getMaximum, 1);
};

console.log(maxOf([1, 2, 3, 5]), maxOf([0, 5, 0]));

/*`                     end of maxOf                              */

// start of sumPositiveNumbers
const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

console.log(
  sumPositiveNumbers([1, -2, 3, -4]),
  sumPositiveNumbers([-1, -2, -3]),
  sumPositiveNumbers([1, 2, 3, 4])
);

/*                      end of sumPositiveNumbers                   */

// start of sumOfSquares
const square = function (number) {
  return Math.pow(number, 2);
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

console.log(sumOfSquares([1, 2, 3, 4]), sumOfSquares([0, 1, 0, 1]));

/*                        end of sumOfSquares                       */

// start of sumOfOddNumbers
const isOdd = function (number) {
  return (number & 1) === 1;
};
const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

console.log(
  sumOfOddNumbers([1, 2, 3, 4, 5]),
  sumOfOddNumbers([0, 2, 4]),
  sumOfOddNumbers([7, 5])
);

/*                          end of sumOfOddNumbers                 */

// start of countNegativeNumbers
const compliment = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const counter = function (count) {
  return count + 1;
};

const countNegativeNumbers = function (numbers) {
  return numbers.filter(compliment(isPositive)).reduce(counter, 0);
};

console.log(
  countNegativeNumbers([1, -2, -3, -4]),
  countNegativeNumbers([1, 2, 3, -4])
);
/*                        end  of countNegativeNumbers               */

// start of findSumOfEvenSquares
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(compliment(isOdd)).map(square).reduce(add, 0);
};

console.log(
  findSumOfEvenSquares([1, 2, 3, 4]),
  findSumOfEvenSquares([1, 3, 5, 7])
);

/*                          end of countNegativeNumbers               */

// start of concatenateWords
const concat = function (concatenatedString, word) {
  return concatenatedString + word;
};

const concatenateWords = function (words) {
  return words.reduce(concat, "");
};

console.log(
  concatenateWords(["hello", "world"]),
  concatenateWords(["", "", ""])
);

/*                            end of countNegativeNumbers              */

// start of longestWord
const greaterThan = function (value1, value2) {
  return value1 > value2;
};

const longestStr = function (longestWordSoFar, word) {
  return longestWordSoFar.length > word.length ? longestWordSoFar : word;
};

const longestWord = function (words) {
  return words.reduce(longestStr, "");
};

console.log(longestWord(["apple", "banana", "kiwi"]));

/*                            end of countNegativeNumbers              */

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"

const shortestStr = function (shortestWordSoFar, word) {
  return compliment(greaterThan(shortestWordSoFar, word))
    ? shortestWordSoFar
    : word;
};

const shortestWord = function (words) {
  return words.reduce(shortestStr, "");
};

console.log(
  shortestWord(["apple", "banana", "cherry", "kiwi"]),
  shortestWord(["card", "band", ""])
);

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  const joined = words.reduce((init, word) => init + word + ",", "");

  return joined.slice(0, joined.length - 1);
};

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((reversedSoFar, word) => word + reversedSoFar, "");
};

console.log(reverseWords(["apple", "banana", "cherry"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  const joinedWithSpace = words.reduce(
    (joinedSoFar, word) => joinedSoFar + word + " ",
    ""
  );

  return joinedWithSpace.slice(0, joinedWithSpace.length - 1);
};

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((concatSoFar, name) => concatSoFar + name, "");
};

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (char) {
  return "aeiouAEIOU".includes(char);
};

const vowelString = function (vowelAccumulator, [...word]) {
  return vowelAccumulator + word.filter(isVowel).join("");
};

const countVowelsInWords = function (words) {
  return words.reduce(vowelString, "");
};

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const intoCamelCase = function (first, word) {
  return first + word[0].toUpperCase() + word.slice(1);
};

const makeCamelCase = function ([first, ...restWords]) {
  return restWords.reduce(intoCamelCase, first);
};

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseOfStr = function (string) {
  return string.reduce((init, element) => element + init, "");
};

const reverseString = function (words) {
  return words.reduce((init, word) => init + reverseOfStr([...word]), "");
};

console.log(reverseString(["apple", "banana", "cherry"]));

// start of duplicateNumbers
const makeDuplicates = (duplicate, number) => {
  for (let i = 0; i < 2; i++) {
    duplicate.push(number);
  }
  return duplicate;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(makeDuplicates, []);
};

console.log(duplicateNumbers([1, 2, 3]), duplicateNumbers([2, 6, 8]));

/*                        end of duplicateNumbers                         */

// start of concatenateArrays
const concatList = (init, subArray) => {
  for (let i = 0; i < subArray.length; i++) {
    init.push(subArray[i]);
  }

  return init;
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(concatList, []);
};

console.log(
  concatenateArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  concatenateArrays([
    [1, 2],
    [[3], [4, 8]],
    [5, 6],
  ])
);

/*                           end of concatenateArray                       */

// start of flattenArray
const getFlatList = (init, element) => {
  if (!Array.isArray(element)) {
    init.push(element);
    return init;
  }

  element.reduce((insideInit, number) => {
    return getFlatList(insideInit, number);
  }, init);

  return init;
};

const flattenArray = function (arrays) {
  return arrays.reduce(getFlatList, []);
};

console.log(flattenArray([3, [1, 2], [3, [4]]]));

/*                         end of flattenArray                          */

// start of uniqueNumbers
const removeDuplicates = function (uniqueLists, number) {
  if (!uniqueLists.includes(number)) {
    uniqueLists.push(number);
  }

  return uniqueLists;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(removeDuplicates, []);
};

console.log(
  // uniqueNumbers([1, 2, 2, 4, 5, 5, 1]),
  uniqueNumbers([
    [1, 2],
    [1, 2],
  ])
);

/*                        end of uniqueNumbers                          */

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  return obj.reduce((mergedObject, keyPair) => mergedObject);
};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// start of longestString
const longestString = function (strings) {
  return longestWord(strings);
};

console.log(longestString(["apple", "banana", "kiwi"]));

/*                          end of longestString                      */

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// start of sumAndCount
const sumAndCount = function (numbers) {
  const totals = numbers.reduce(add, 0);
  const count = numbers.reduce(counter, 0);

  return { sum: totals, count: count };
};

console.log(sumAndCount([1, 2, 3, 4]));

/*                       end of sumAndCount                           */

// start of deepFlatten
const deepFlatten = function (arr) {
  return flattenArray(arr);
};

console.log(
  deepFlatten([[1, 2], [3, 4, [5, 6]], 7]),
  deepFlatten([[10, 20], [30, 40, [50, 60]], 70])
);

/*                       end of deepFlatten                           */

// start of findMax
const findMax = function (numbers) {
  return numbers.reduce(getMaximum, 0);
};

console.log(findMax([1, 9, 3, 4, 5]));

/*                          end of findMax                              */

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 5, e: 2, i: 0, o: 0, u: 0 }
const vowelCountOfWord = (object, [...word]) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] in object) {
      object[word[i]] = object[word[i]] + 1;
    }
  }
  return object;
};

const countVowels = function (words) {
  return words.reduce(vowelCountOfWord, { a: 0, e: 0, i: 0, o: 0, u: 0 });
};

console.log(countVowels(["apple", "banana", "grape"]));

// start of mergeConsecutiveDuplicates
const mergeConsecutiveDuplicates = function (array) {
  let consecutive = 0;

  return array.reduce((init, number) => {
    if (consecutive !== number) {
      init.push(number);
      consecutive = number;
    }

    return init;
  }, []);
};

console.log(
  mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4]),
  mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4, 2])
);

/*                        end of mergeConsecutiveDuplicates              */

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const sortNumbers = (numbers) => {
  return numbers.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }

    return 1;
  });
};

const longestConsecutiveSubsequence = function (numbers) {
  return uniqueNumbers(sortNumbers(numbers));
};

console.log(longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]));

// start of topKFrequent
const sortedArray = (array) => {
  return array.sort((list1, list2) => {
    if (list1[1] > list2[1]) return -1;
    return 1;
  });
};

const topKFrequent = (numbers, k) => {
  const comparators = uniqueNumbers(numbers);
  const topKFrequentEle = [];

  const eleWithOccurrances = comparators.map((comparator) => [
    comparator,
    numbers.reduce((count, number) => {
      return number === comparator ? count + 1 : count;
    }, 0),
  ]);

  const sortedArr = sortedArray(eleWithOccurrances);

  for (let i = 0; i < k; i++) {
    topKFrequentEle.push(sortedArr[i][0]);
  }

  return topKFrequentEle;
};

console.log(
  topKFrequent([1, 1, 1, 2, 2, 3], 2),
  topKFrequent([1, 2, 2, 3, 3, 3, 3, 3], 3),
  topKFrequent([1, 1, 1, 2, 2, 2, 2, 3], 1)
);

/*                          end of topKFrequent                         */

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {
  const numbers = flattenArray(nestedNumbers);
  return (function (numbers) {
    return numbers.reduce(add, 0) / numbers.length;
  })(numbers);
};

console.log(nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]));

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// start of groupByDate
const accumulateByDate = (init, { date, value }) => {
  if (!(date in init)) {
    init[date] = [value];
  } else {
    init[date].push(value);
  }

  return init;
};

const groupByDate = function (records) {
  return records.reduce(accumulateByDate, {});
};

console.log(
  groupByDate([
    { date: "2024-01-01", value: 10 },
    { date: "2024-01-01", value: 20 },
    { date: "2024-01-02", value: 30 },
  ]),
  groupByDate([
    { date: "2024-01-01", value: 10 },
    { date: "2024-01-01", value: 20 },
    { date: "2024-01-01", value: 30 },
  ])
);

/*                          end of groupByDate                         */

// start of findMinMax
const findMinMax = function (numbers) {
  const object = {};

  object["min"] = numbers.reduce(getMinimum, 1);
  object["max"] = numbers.reduce(getMaximum, 0);
  return object;
};

console.log(findMinMax([1, 2, 3, 4, 5]), findMinMax([4, 0, 7, 3, 0]));

/*                         end of findMinMax                            */

// start of sumByCategory
const sumByCategory = function (items) {
  return items.reduce((object, item) => {
    object[item.category] =
      item.category in object ? object[item.category] + item.value : item.value;

    return object;
  }, {});
};

console.log(
  sumByCategory([
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 30 },
  ]),
  sumByCategory([
    { category: "A", value: 5 },
    { category: "C", value: 6 },
    { category: "B", value: 20 },
    { category: "B", value: 30 },
    { category: "A", value: 4 },
  ])
);

/*                              end of sumByCategory                      */
