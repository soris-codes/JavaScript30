# 02 - JS/CSS Clock

## Challenge Notes
  * Learning about several transition and transform properties of CSS. First time using the cubic-bezier option that allowed for the clock hands to have a more realistic bounce/movement when transitioning.
  * Encountered a small issue with transition from 59 seconds to 00 seconds where the hand was rotating around during the transition.
  * Corrected issue by setting the transition to 0s temporarily. If the seconds or minutes are 0, then the transition will be set to 0s. Once the minutes or seconds are at 1, the transition property gets set back to .05s.

## [DEMO](https://soris-codes.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/)