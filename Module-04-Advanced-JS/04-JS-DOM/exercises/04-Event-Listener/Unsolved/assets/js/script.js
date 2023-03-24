var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
decrementEl.addEventListener("click", function () {
  count--;
  setCounterText();
});
// TODO: Add event listener to decrement button
incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});
