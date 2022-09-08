"use strict";
const input = document.querySelector(".input-search");
const ul = document.querySelector(".results");
const resultsContainer = document.querySelector(".results-container");
const destinations = [
  { country: ["italy"], city: ["rome"] },
  { country: ["england"], city: ["london"] },
  {
    country: ["germany"],
    city: ["berlin"],
  },
  {
    country: ["spain"],
    city: ["madrid"],
  },
  {
    country: ["turkey"],
    city: ["istanbul"],
  },
  {
    country: ["denmark"],
    city: ["copenhagen"],
  },
  {
    country: ["united states"],
    city: ["new york"],
  },
];

input.addEventListener("input", function (e) {
  clearResults();
  const searchString = e.target.value;
  if (!searchString) {
    resultsContainer.classList.add("hide");
    return;
  }

  const results = destinations.filter((destination) => {
    for (const element of destination.country) {
      if (element.startsWith(searchString)) {
        return true;
      }
    }
    for (const element of destination.city) {
      if (element.startsWith(searchString)) {
        return true;
      }
    }
    return false;
  });
  if (results.length > 0) {
    resultsContainer.classList.remove("hide");
  } else {
    resultsContainer.classList.add("hide");
  }
  results.forEach((result) => {
    const el = document.createElement("li");
    el.classList.add("list");
    el.innerHTML = `
    <span>
    <i class="fa-regular fa-compass"></i>
  </span>
    <span>
    ${result.country.map((a) => capitalize(a))}, ${result.city.map((a) =>
      capitalize(a)
    )}
  </span>`;
    ul.appendChild(el);
  });
});

window.addEventListener("click", function (e) {
  if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
    clearResults();
    resultsContainer.classList.add("hide");
  }
});

function clearResults() {
  while (ul.childNodes.length > 1) {
    ul.removeChild(ul.lastChild);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
