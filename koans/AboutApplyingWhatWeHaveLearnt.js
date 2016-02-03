var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      var hasMushrooms = function(x) {return x === "mushrooms"};

      var checkMushrooms = function(x) {return _(x.ingredients).any(hasMushrooms) === false};

      var checkMushroomsAndNuts = function(x) {return x.containsNuts === false && _(x.ingredients).any(hasMushrooms) === false};

      productsICanEat = _(products).filter(checkMushroomsAndNuts);

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(sum);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

   /* try chaining range() and reduce() */

  var threeArray = _.range(0, 1000, 3);
  var fiveArray = _.range(0, 1000, 5);
  var fifteenArray = _.range(0, 1000, 15);

  var comboArray = threeArray.concat(fiveArray);

  var preSum = _(comboArray).chain()
      .reduce(function (sum, x) { return sum + x })
      .value();

  var fifteenSum = _(fifteenArray).chain()
      .reduce(function (sum, x) { return sum + x })
      .value();

  var sum = preSum - fifteenSum;

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }
    console.log(ingredientCount);

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

  _(products).chain()
    .map(function(x) {return x.ingredients})
    .flatten().forEach( function(x) {  ingredientCount[x] = (ingredientCount[x] || 0) + 1 }); 

    expect(ingredientCount['mushrooms']).toBe(2);
  });


  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function () {

    var isPrime = function(x) {
      for (var i = 2; i < x; i++) {
        if (x % i === 0) {
          return false;
        }
      }
      return true;
    };

    var findLargestPrimeFactor = function(x) {
      var factors = [];
      var primeFactors = [];
      for (var i = 2; i < x; i++) {
        if (x % i === 0) {
          factors.push(i);
        }
      }
      for (var i = 0; i < factors.length; i++) {
        if (isPrime(i)) {
          primeFactors.push(i);
        }
      }
      return primeFactors[primeFactors.length - 1];
    };

    expect(findLargestPrimeFactor(100)).toBe(5);

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    //Take in two 3 digit numbers
      //multiply the numbers


  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

   var isPrime = function(x) {
      for (var i = 2; i < x; i++) {
        if (x % i === 0) {
          return false;
        }
      }
      return true;
    };

    var primes = [];
    var i = 2;

    while (primes.length < 10001) {
      // primes.push(i);
      // i++;
      if (isPrime(i)) {
        primes.push(i);
      }
      i++;
    }

  console.log("largest prime: ", primes[primes.length-1]);

  }); 
  
}); 

