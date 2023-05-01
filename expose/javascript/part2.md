1. What will happen at line 12 and why? If the code causes an error, explain why.
- it will log 3 to the console, since the var declaration is used. It is defined within the function scope. and can be accessed outside the for loop.

2. What will happen at line 13 and why? If the code causes an error, explain why.
- it will log 150 to the console. since the var declaration is used. It is defined within the function scope. and can be accessed outside the for loop, and the value assigned during the last iteration of the for loop will be printed by line 13.

3. What will happen at line 14 and why? If the code causes an error, explain why.
- It will log 150 to the console. since the var declaration is used. It is defined within the function scope. and can be accessed outside the for loop, and the value assigned during the last iteration of the for loop will be printed by line 13.The math.round(), will round discountedPrice to the nearest 2 decimal place, however there is no decimal, therefore the answer will be the same as discountedPrice.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
- The function will return a list of discounted price. The list will be [50, 100, 150]. at the top of the function, the discounted array is empty, and during the for loop the finalPrice(discounted price to two decimal places) is appened to the array discounted.

5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
- It will give an error as 'i' is block scoped and is only defined within the for loop.

6. What will happen at line 13 and why? If the code causes an error, explain why.
- It will give an error as 'discountedPrice' is block scoped and is only defined within the for loop.

7. What will happen at line 14 and why? If the code causes an error, explain why.
- It will log 150 to the console. The declaration for disocunted is let declaration and is block scoped. The block is the function discountPrices.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function will return a list of discounted price. The list will be [50, 100, 150]. at the top of the function, the discounted array is empty, and during the for loop the finalPrice(discounted price to two decimal places) is appened to the array discounted.

9. What will happen at line 11 and why? If the code causes an error, explain why.
- It will give an error as 'i' is block scoped and is only defined within the for loop.

10. What will happen at line 12 and why? If the code causes an error, explain why.
- it will log 3 to the console. 'length' is block scoped and the block is the function.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
- The function will return a list of discounted price. The list will be [50, 100, 150]. at the top of the function, the discounted array is empty, and during the for loop the finalPrice(discounted price to two decimal places) is appened to the array discounted.

12. Given the above Object, write the notation for: (These should be in your part2.md)

    A. Accessing the value of the name property in the student object
    - student.name

    B. Accessing the value of the Grad Year property in the student object
    - student['Grad Year']

    C. Calling the function for the greeting property in the student object
    - student.greeting()

    D. Accessing the name property of the object in the Favorite Teacher property in student
    - student['Favorite Teacher'].name

    E. Access index zero in the array of the courseLoad property of the student object
    - student.courseLoad[0]

13. Arithmetic
  
    A. ‘3’ + 2
    - '32', since integers map to their exact string representation
  
    B. ‘3’ - 2
    - 1, the 3 is converted to an integer and subtracts it
  
    C. 3 + null
    - 3, null gets converted to 0, and gets substracted from 3
  
    D. ‘3’ + null
    - '3null', 3 and null gets concatenated
  
    E. true + 3
    - 4, true gets converted to 1 and gets added to 3
  
    F. false + null
    - 0, false and null gets converted to 0
  
    G. '3' + undefined
    - '3undefined', the 3 and undefined get concatenated
  
    H. '3' - undefined
    - NaN, 3 gets converted to an integer and gets subtracted from undefined which results in "Not a Number"

14. Comparison
  
    A. ‘2’ > 1
    - true, 2 is converetd to a number and compared to 1
  
    B. ‘2’ < ‘12’
    - false, 2 and 12 are converted to numbers and compared by characters to each other and 2 < 1 is false.
  
    C. 2 == ‘2’
    - true, '2' gets converted to a number and compared to 2
  
    D. 2 === ‘2’
    - false, '2' and 2 are compared without converted '2' to an integer
  
    E. true == 2
    - false, true is converted to a number which is 1 and compared to 2
  
    F. true === Boolean(2)
    - true, the boolean value of 2 is true which is compared to true.

15. Explain the difference between the == and === operators.
- The difference is that "==" operator performs type conversion before comparing two values, while "===" operator does not perform any type conversion and only returns true if both operands have the same type and the same value.

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
- The result will be [2, 4, 6]. The code takes an array and a function as arguments. The function loops through the array and calls the passed-in that multiplies each value by 2, then pushing the results into a new array. The function then returns the new array.

19. What is the output of the above code? (This should be in your part2.md)
- 1
  
  4

  3
  
  2