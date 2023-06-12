/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/
import React from 'react';
import {createRoot} from 'react-dom/client';


class APICaller extends React.Component{
  async callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
    // Fetch from Reddit API using the Fetch API
    await fetch('https://www.reddit.com/r/react.json')
    .then((result)=>{
      //#2 Return the result in json format
      // Check if result is ok
      if(result.ok){
        return result.json();
      }
      // Throw result if not ok
      throw result;
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      // Print string version for easier reading 
      console.log(JSON.stringify(jsonData));
    })
    .catch(e => { 
      // Catch error and log to console
      console.error(`Error: ${e}`); 
    })
    .finally(() => {
      // Console log once promise is settled
      console.log('Done Calling Reddit API.'); 
    })
  }
  render(){
    return <div>
      <button 
    //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
        // arrow function to avoid calling the method on initial render
        onClick={() => {this.callApi()}}
      >Call the API now.</button>
    </div>
  }
}
// React.render(
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE 
//   , document.getElementById('myapicaller')
// )

/* 
According to React documentation the render method will be replaced with createRoot. 
For that reason I used createRoot() and createRoot().render() instead of render(). 
*/
const container = document.getElementById('myapicaller')
const root = createRoot(container)
root.render(<APICaller />)


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */

function myRecursiveFunction(){
  //YOUR CODE WITH COMMENTS HERE
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */

/*Bubble sort example HERE*/


/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/