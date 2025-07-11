# ColorChanger-REACT
A color of box changes based on user input using react (practice controlled inputs,usestate)
THINGS I LEARNED
🧠 Key Concepts and Insights to Remember:
1. ✅ useState() is used to store dynamic state
js
Copy
Edit
const [colorChange, setColortext] = useState('black');
colorChange is the current text color.

setColortext() updates that color.

📌 Insight: You always use a state when a value needs to change and cause re-rendering in React.

2. ✅ You can conditionally toggle values using a ternary:
js
Copy
Edit
colorChange === 'black' ? 'red' : 'black'
If it's 'black', change to 'red'

If not, switch back to 'black'

📌 Insight: Ternary operators (condition ? true : false) are great for toggling between two values.

3. ✅ onClick is used to trigger a function
js
Copy
Edit
<button onClick={handleText}>Toggle Text Color</button>
📌 Insight: Use onClick to call any function when a button is pressed.

4. ✅ You can dynamically apply styles using variables
js
Copy
Edit
const boxStyle = {
  color: colorChange, // dynamic
  backgroundColor: color || '#f9f9f9' // from props
};
📌 Insight: React allows you to set inline styles using JavaScript objects, and you can plug in state or props values dynamically.

5. ✅ Re-render happens automatically when state changes
When setColortext() updates colorChange, React re-renders the component, so the new text color shows up.

📌 Insight: React tracks useState automatically — when you update it, the UI updates too.

🧠 Summary to Memorize:
Concept	Explanation
useState	Used to store and update a value (like a color)
onClick	Event to trigger an action
setState()	Updates the value and causes re-render
style={...}	You can pass dynamic styles via JavaScript object
ternary operator	Great for toggling between two values


