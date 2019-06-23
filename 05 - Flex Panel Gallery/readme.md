# 05- Flex Panel Gallery

# Challenge Notes
  * This one showcased the power of CSS with flex box and transform properties. The effect on the images is very cool.
  
  * I wrote my javascript functions using ES6 syntax so instead of declaring the function with the `function` keyword, I used the `const myFunc = () => {}` (arrow) format. My images were not flexing and opening like expected. After some troubleshooting and console.logging `this`, I found that the scope of `this` is different (one focused on the entire window and the other focused on the div) and in order for the gallery to function as expected, the javascript functions have to be declared using the `function` keyword.