# step one

delete the css in "/app/page.css ✅

make the component in "/app/page.js" just return the words "home page" ✅

Check the page still loads ✅

move move across the top level of you application, Header, Main and Footer components in "/app/layout.js" file ✅

in your home page component, "/app/page.js", you could put the rest of the home page (main and everything in it). ✅

"global" css (stuff to style the body or wrapper etc) can go in "/app/global.css". ✅

- replace "Inter" with "Aleo" in "/app/layout.js" ✅

# step 2

- make a new folder at the top of the project called "/src" ✅

- create components folder ✅

- transfer component by component to make sure everything works (head and footer) ✅

  - uncomment out component in layout ✅
  - copy component folder to repo ✅
  - check it loads ✅

- transfer component by component to make sure everything works (in main)✅
  - add component to page.js✅
  - copy component folder to repo✅
  - check it loads✅

# Image stuff

- copy over image folder to the "/public" folder ✅
- For each image: ✅
- import Image from next ✅
- check import path✅
- change <img> to <Image> component✅
- IMPORTANT: Remember that Next.js served images require width and height props✅
- check it loads✅

# step 3

- create a new folder "/app/founders" ✅
- inside create a file called "page.js" ✅
- create a super simple component that just returns "<h1>Founders</h1>" ✅
- check it works ✅
- import Link from Next
  - add a Next.js "<Link href="/founders"></Link>" component somewhere on your home page ✅
- check it loads ✅
- (Come back and complete the founders page later) ✅

# step 4

- add a button to your header in layout.js ✅
- add event listener and event handler to button ✅
- create a function that changes the useState upon every click at the top of the Header React component function, so outside the return statement ✅
- import { useState } from 'react' ✅
- create a variable and function for useState ✅
- add 'use client' to top of page ✅
- check loads ✅

# step 4 - interactive menu

- Add founders page and home page link to the new menu✅
- Add a close button to the menu to hide the menu ✅
- Add the Menu component inside the header ✅
- render menu component according to the menuStatus state in our button event handler ✅
- go to the header's component, create a condition statement for if the useState variable is set to True ✅

- close button functionality ✅
- link to open menu button logic ✅

- create a menu React component (a big ol' orange div that displays fullscreen) - we did this in the Header since we were not sure how to get the close button to work if the menu was in its own React component ✅

# step 5

- create new Reviews react component ✅

- Hook new Reviews component up to the Main component ✅

- import useeffect, usestate ✅

- create component Reviews() ✅

- write return for Reviews(): ✅
  render three buttons with : ✅
- event listeners ✅
- to fat arrows ✅
- changes selectCountry ✅
- to country names England, Scotland, Wales ✅

- create function: selectCountry(name) ✅

- define state variables: selectedCountry, setSelectedCountry, useState as null ✅
- Use setSelectedCountry setter function to set the selectedCountry state ✅

- define state variables: reviewData, setReviewData, useState as null ✅

- call use effect with fat arrow function ✅
- write if (selectedCountry) ✅
- fetch from api✅
  - have the url in back ticks and insert the selected country as a variable ✅
- parse json response ✅
- use response to change reviewdata ✅

- dependency thingy: [selectedCountry] ✅

# step 6

- create some html in Reviews.jsx to display the reviews
- article ✅
- h3 Trusted ✅
- h4 blablablab✅
- buttons goes here ✅
- p reviewData.text ✅
- give class and hand props for css
- css grey background
- css boarder radius
- Conditional render for: ✅
  - p reviewer's name - reviewData.author ✅
  - location - reviewData.location ✅

# step 7 change button component

# Hackathon 2

## link form

- change phone number to page link ✅
  - as "Book Consultation" ✅
  - to "/booking" ✅

## create form

- called "Design Booking" page ✅
- make booking folder ✅
- make page.js file ✅
- make page.css file ✅
- import useState ✅
- import css to page.js ✅
- add test element to design-booking page and check that it works ✅

- create "ContactForm" component ✅
  - use two fieldset groups ✅
- look through design reference for fields ✅
- "request design consultation" submit button ✅

## add useState

- create a piece of state for one of the input fields: "const [ firstName, setFirstName ] = useState(""); ✅
- create a function called handleFirstNameChange and connect it to the input's onChange: "onChange={(event) => handleFirstNameChange(event)}" ✅
  - read the updated value of the input field from the event being passed to the function. Save the updated value back into the firstName state ✅
- link the input field's value attribute (first name field) to read from that state ✅

- REPEAT! ✅
- use the same on change handler function for each field's onChange event ✅

- console.log submitted data via button: onSubmit ✅

  - call a submit handler function ✅
  - prevent the default behaviour ✅

- validation to check if fields are empty
  - conditional rendering: if any of the state variables, show error message
- show error message

## refactor

- use style as prop in form component

- split Form component into different components ✅

# Reducer initial refactoring task

- make a copy of ContactForm.jsx ✅

- Remove all fields apart from one ✅
  -the state ✅
  -handler function ✅
  -html ✅

- check! ✅

- create state object that mimics what we have ✅
- create a reducer ✅
- import useReducer ✅
- connect reducer and state object to useReducer ✅

- check! ✅

- Remove old logic
  -remove fullName state ✅
  -remove setFullName state ✅
- Replace with state.data.fullName ✅

- check! ✅

- Code the dispatcher ✅

  - Dispatch and action to the reducer ✅
  - Make the reducer able to do that action ✅
  - create new reducer object with spread ✅

- check! ✅

- Add remaining inputs back in

  - Add new object keys to initialState ✅
  - Add JSX for the form components that were deleted ✅
  - Fix the validation to check all keys in the new reducer state ✅
  - Console log the data in the new reducer state ✅

- check! ✅

- Add error to the initial state

  - First, get rid of the error useState ✅
  - Add another reducer action , 'CHANGE_ERROR' as a string ✅
  - Set the error status in the various reducer actions ✅

# Reducer extended tasks

- Create a new state property named status ✅
- Add reducer actions possible reducer action values for this would be

  - EDITING ✅
  - FORM_SUBMITTING ✅
  - FORM_SUCCESS ✅
  - ERROR ✅

- Create the dispatches for the reducer actions
  - FORM_SUBMITTING
    - Add the timeout somewhere
  - FORM_SUCCESS
  - ERROR ✅
    - form validation ✅
    - html message ✅
      -Change any mention of state.error ✅

# HACKATHON

## Install Playwright ✅

_Playwrite-guide_

- created a test file inside test folder✅
- imported test from playwright/test✅
- write basic test to initialise ✅
- write script for `npx playwright test --ui`✅
- `npm run dev` in other terminal✅
- add page adress inside test✅
- check it navigates✅
- import expect from playwright/test✅
- add expect to be this page into test✅
- check test passes✅
- IMPORTANT: You will need to run the following command on all computers that didn't originally install/initialized playwright:
  `npx playwright install`

## Plan user stories ✅

## Create tests

_Playwrite-guide_

# End-to-end tests

## User Story 1: Regional Reviews

- First, open mobile website
- Then scroll down to the review section
- Finally, click on 'England' to view the latest review from England.

## Create second test

# Unit test with Jest?
