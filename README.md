# E-commerce web app

## How to Run
1. Install React.
2. Clone or download+unzip this repository from GitHub.
3. Open the program Terminal (for Mac/Unix) or Cmd (for Windows) terminal. `cd` into the root directory.
4. Run `npm start`.
5. Open http://localhost:3000/ in a browser.

## Features
* Responsive theme.
* Shopping cart count in corner.
* Cart empties after an order is submitted.
* SVG icons to reduce load time.

## Decisions
* Use react-router-dom for routes/navigation.
* Use redux to share state across routes and to avoid tunneling.
* Use text `<input>`s for price filters instead of sliders, because the prices are clustered in the lower end of the range.

## Learned
* Dynamically create routes based on fetched data.
* How to use Redux Toolkit.

## Challenges
* Using RTK's built-in createAsyncThunk() function.
* Using waitFor() in React Testing Library (have commented these tests out).

## What I'd Do if More Time
* More unit tests.
* Modify webpack to let stylesheets reference `/public`. This would allow  background-images to be stored in `/public/img`.
* Automatically look up city and state based on zip code, so that user doesn't have enter them.
* Add a slice to store the sort/filter state. This would allow the categories listed on the home page to link to a `<Shop />` component which is pre-filtered when the user arrives.
* Change the 'Submit Order' `<button>` to an `<input>` to take greater advantage of HTML5 form validation.
* Add the ability to search for categories/descriptions in addition to titles. Add a drop-down menu of suggestions to the search field.
