const calcContainer = document.querySelector(".calc-container");
const calcBackground = document.querySelector(".calc-background");

const searchSelector = document.querySelector("#search-selector");
const searchBarSection = document.querySelector("#searchbar-section");

// const searchPlusOptsCont = document.querySelector("#search-plus-options-cont");
const researchOptsCont = document.querySelector("#research-options-cont");
const shoppingOptsCont = document.querySelector("#shopping-options-cont");

const searchPlusReddit = document.querySelector("#sp-reddit");
const searchPlusSO = document.querySelector("#sp-stackoverflow");
const searchPlusYoutube = document.querySelector("#sp-youtube");

const researchOptsReddit = document.querySelector("#ro-reddit");
const researchOptsWiki = document.querySelector("#ro-wikipedia");
const researchOptsYoutube = document.querySelector("#ro-youtube");

const shoppingOptsAmazon = document.querySelector("#sh-amazon");
const shoppingOptsWalmart = document.querySelector("#sh-walmart");
const shoppingOptsTarget = document.querySelector("#sh-target");
const shoppingOptsLowes = document.querySelector("#sh-lowes");
const shoppingOptsHarborFreight = document.querySelector("#sh-hfreight");
const shoppingOptsHomeDepot = document.querySelector("#sh-homedepot");
const shoppingOptsBestBuy = document.querySelector("#sh-bestbuy");
const shoppingOptsPCPPicker = document.querySelector("#sh-pcppicker");
const shoppingOptsNewEgg = document.querySelector("#sh-newegg");

// const searchPlusOptions = document.querySelector(".search-plus-options");

const searchSelectorImg = document.querySelector("#search-sel-img");
const searchBarInput = document.querySelector("#searchbar");

const searchOptions = [
  "https://www.google.com/search",
  "https://www.bing.com/search",
  "https://www.duckduckgo.com/",
];
const searchOptionImages = ["media/google.png", "media/bing.png", "media/ddgo.png"];
const searchOptionTitles = ["Search with Google", "Search with Bing", "Search with DuckDuckGo"];

const searchSelMinLevel = 0;
const searchSelMaxLevel = 2;

let searchSelLevel = 0;

// calcBackground.style.opacity = "0";

calcContainer.onclick = () => {
  calcBackground.classList.toggle("opacity-on");
  calcContainer.classList.toggle("opacity-off");
};

// ---------------SEARCH SECTION---------------

searchSelector.onclick = () => searchBarSection.submit();

searchPlusReddit.onclick = () => {
  const originalSBI = searchBarInput.value.trim();
  searchBarInput.value = `${searchBarInput.value.trim()} reddit`;
  searchBarSection.submit();
  searchBarInput.value = originalSBI;
};
searchPlusSO.onclick = () => {
  const originalSBI = searchBarInput.value.trim();
  searchBarInput.value = `${searchBarInput.value.trim()} stackoverflow`;
  searchBarSection.submit();
  searchBarInput.value = originalSBI;
};
searchPlusYoutube.onclick = () => {
  const originalSBI = searchBarInput.value.trim();
  searchBarInput.value = `${searchBarInput.value.trim()} youtube`;
  searchBarSection.submit();
  searchBarInput.value = originalSBI;
};

// ---------------Search Options (Needs Function Optimization)---------------

researchOptsReddit.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.reddit.com/search/");
  searchBarInput.setAttribute("name", "q");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

researchOptsWiki.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://en.wikipedia.org/w/");
  searchBarInput.setAttribute("name", "search");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

researchOptsYoutube.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.youtube.com/results");
  searchBarInput.setAttribute("name", "search_query");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsAmazon.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.amazon.com/s");
  searchBarInput.setAttribute("name", "k");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsWalmart.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.walmart.com/search");
  searchBarInput.setAttribute("name", "q");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsLowes.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.lowes.com/search");
  searchBarInput.setAttribute("name", "searchTerm");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsTarget.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.target.com/s");
  searchBarInput.setAttribute("name", "searchTerm");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsHarborFreight.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");
  const originalSBI = searchBarInput.value.trim();

  searchBarSection.setAttribute("action", "https://www.harborfreight.com/search");
  searchBarInput.setAttribute("name", "q");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};
shoppingOptsHomeDepot.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");
  const originalSBI = searchBarInput.value.trim();

  searchBarSection.setAttribute("action", `https://www.homedepot.com/s/${originalSBI}`);

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsBestBuy.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.bestbuy.com/site/searchpage.jsp");
  searchBarInput.setAttribute("name", "st");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsPCPPicker.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://pcpartpicker.com/search/");
  searchBarInput.setAttribute("name", "q");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

shoppingOptsNewEgg.onclick = () => {
  // Store original search bar action
  const sBarActionOriginal = searchBarSection.getAttribute("action");
  const searchbarNameOriginal = searchBarInput.getAttribute("name");

  searchBarSection.setAttribute("action", "https://www.newegg.com/p/pl");
  searchBarInput.setAttribute("name", "d");

  searchBarSection.submit();

  // Reset search bar action
  searchBarSection.setAttribute("action", sBarActionOriginal);
  searchBarInput.setAttribute("name", searchbarNameOriginal);
};

// ---------------Search Options (Needs Function Optimization)---------------

searchSelector.addEventListener("wheel", isScrollingUp);

function isScrollingUp(event) {
  let scrollY = -event.deltaY;

  if (scrollY > 0) {
    if (searchSelLevel < searchSelMaxLevel) {
      searchSelLevel++;

      searchSelectorImg.setAttribute("src", searchOptionImages[searchSelLevel]);
      searchSelector.setAttribute("title", searchOptionTitles[searchSelLevel]);
      searchBarSection.setAttribute("action", searchOptions[searchSelLevel]);
    } else {
      searchSelLevel = searchSelMinLevel;

      searchSelectorImg.setAttribute("src", searchOptionImages[searchSelMinLevel]);
      searchSelector.setAttribute("title", searchOptionTitles[searchSelMinLevel]);
      searchBarSection.setAttribute("action", searchOptions[searchSelMinLevel]);

      // searchBarSection.setAttribute("action", searchOptions[searchSelMinLevel]);
      // searchBarSection.setAttribute("action", searchOptions[searchSelMinLevel]);
    }
  }
  if (scrollY < 0) {
    if (searchSelLevel > searchSelMinLevel) {
      searchSelLevel--;

      searchSelectorImg.setAttribute("src", searchOptionImages[searchSelLevel]);
      searchSelector.setAttribute("title", searchOptionTitles[searchSelLevel]);
      searchBarSection.setAttribute("action", searchOptions[searchSelLevel]);
    } else {
      searchSelLevel = searchSelMaxLevel;

      searchSelectorImg.setAttribute("src", searchOptionImages[searchSelMaxLevel]);
      searchSelector.setAttribute("title", searchOptionTitles[searchSelMaxLevel]);
      searchBarSection.setAttribute("action", searchOptions[searchSelMaxLevel]);
    }
  }
}

// searchSelHover.addEventListener("mouseover", function () {
//   searchSelHovering = true;
//   // alert(`${searchSelHovering}`);
// });
// searchSelHover.addEventListener("mouseout", function () {
//   searchSelHovering = false;
//   // alert(`${searchSelHovering}`);
// });
