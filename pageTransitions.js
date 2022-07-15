function searchResults() {
 for (var x = 0; x < Object.keys(localStorage.spells).length; x++) {
   document.getElementsByClassName("item")[x].style.display = '';
 }
 for (var x = 0; x < Object.keys(localStorage.spells).length; x++) {
     if (Object.values(JSON.parse(localStorage.spells))[x].name.includes(document.getElementById("searchBar").value) == false && Object.values(JSON.parse(localStorage.spells))[x].college.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("item")[x].style.display = 'none';
     }
 }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function outputStorage() {
  document.getElementById("localStorageOutput").value = localStorage.spells;
}

function Spell(name, college, type, description, cost, duration, timeToCast, prerequisites) {
  this.name = name;
  this.college = college;
  this.type = type;
  this.description = description;
  this.cost = cost;
  this.duration = duration;
  this.timeToCast = timeToCast;
  this.prerequisites = prerequisites;
}

function submitToStorage() {
  Object.values(spells)[itemIndex] = new Spell(
    document.getElementById("inputItemTitle").value,
    document.getElementById("inputItemCollege").value,
    document.getElementById("inputItemType").value,
    document.getElementById("inputItemDescription").value,
    document.getElementById("inputItemCost").value,
    document.getElementById("inputItemDuration").value,
    document.getElementById("inputItemTimeToCast").value,
    document.getElementById("inputItemPrerequisites").value
  );
  localStorage.spells = JSON.stringify(spells);
  spells = JSON.parse(localStorage.spells);
  document.getElementById("itemPageTitle").innerHTML = Object.values(spells)[itemIndex].name;
  document.getElementById("itemPageCollege").innerHTML = Object.values(spells)[itemIndex].college;
  document.getElementById("itemPageType").innerHTML = Object.values(spells)[itemIndex].type;
  document.getElementById("itemPageDescription").innerHTML = Object.values(spells)[itemIndex].description;
  document.getElementById("itemPageCost").innerHTML = Object.values(spells)[itemIndex].cost;
  document.getElementById("itemPageDuration").innerHTML = Object.values(spells)[itemIndex].duration;
  document.getElementById("itemPageTimeToCast").innerHTML = Object.values(spells)[itemIndex].timeToCast;
  document.getElementById("itemPagePrerequisites").innerHTML = Object.values(spells)[itemIndex].prerequisites;
  Object.values(spells).sort(dynamicSort(name));
  document.getElementById("spellsTab").innerHTML += '<div class="item" onclick="openItemPage(' + x + ')"><button onclick="addToChar(' + x + ')" id="addToCharacterButton"></button><span class="itemName"></span><br><span class="itemType"></span></div>';
  for (var x = 0; x < Object.keys(JSON.parse(localStorage.spells)).length; x++) {
      document.getElementsByClassName("itemName")[x].innerHTML = Object.values(JSON.parse(localStorage.spells))[x].name;
      document.getElementsByClassName("itemType")[x].innerHTML = Object.values(JSON.parse(localStorage.spells))[x].college;
  }
}

function backToList() {
  document.getElementById("itemPage").style.display = 'none';
  document.getElementById("filtersPage").style.display = 'none';
  document.getElementById("editPage").style.display = 'none';
}

function openListsTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'none';
    document.getElementById("settingsTab").style.display = 'none';
    document.getElementById("listsTabButton").style.border = '3px black solid';
    document.getElementById("charactersTabButton").style.border = 'none';
    document.getElementById("settingsTabButton").style.border = 'none';
}

function openCharactersTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'initial';
    document.getElementById("settingsTab").style.display = 'none';
    document.getElementById("listsTabButton").style.border = 'none';
    document.getElementById("charactersTabButton").style.border = '3px black solid';
    document.getElementById("settingsTabButton").style.border = 'none';
}

function openSettingsTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'none';
    document.getElementById("settingsTab").style.display = 'initial';
    document.getElementById("listsTabButton").style.border = 'none';
    document.getElementById("charactersTabButton").style.border = 'none';
    document.getElementById("settingsTabButton").style.border = '3px black solid';
}

function openCreatePage() {
  document.getElementById("editPage").style.display = 'initial';
  itemIndex = Object.keys(spells).length;
}

function openFiltersPage() {
  document.getElementById("filtersPage").style.display = 'initial';
}

function openItemPage(number) {
    itemIndex = number;
    document.getElementById("itemPageTitle").innerHTML = Object.values(spells)[number].name;
    document.getElementById("itemPageCollege").innerHTML = Object.values(spells)[number].college;
    document.getElementById("itemPageType").innerHTML = Object.values(spells)[number].type;
    document.getElementById("itemPageDescription").innerHTML = Object.values(spells)[number].description;
    document.getElementById("itemPageCost").innerHTML = Object.values(spells)[number].cost;
    document.getElementById("itemPageDuration").innerHTML = Object.values(spells)[number].duration;
    document.getElementById("itemPageTimeToCast").innerHTML = Object.values(spells)[number].timeToCast;
    document.getElementById("itemPagePrerequisites").innerHTML = Object.values(spells)[number].prerequisites;
    document.getElementById("itemPage").style.display = 'initial';
}

function editItem() {
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("editPage").style.display = 'initial';
    document.getElementById("inputItemTitle").value = Object.values(spells)[itemIndex].name;
    document.getElementById("inputItemCollege").value = Object.values(spells)[itemIndex].college;
    document.getElementById("inputItemType").value = Object.values(spells)[itemIndex].type;
    document.getElementById("inputItemDescription").value = Object.values(spells)[itemIndex].description;
    document.getElementById("inputItemCost").value = Object.values(spells)[itemIndex].cost;
    document.getElementById("inputItemDuration").value = Object.values(spells)[itemIndex].duration;
    document.getElementById("inputItemTimeToCast").value = Object.values(spells)[itemIndex].timeToCast;
    document.getElementById("inputItemPrerequisites").value = Object.values(spells)[itemIndex].prerequisites;
}

function cancelEdit() {
    document.getElementById("itemPage").style.display = 'initial';
    document.getElementById("editPage").style.display = 'none';
}

function scrollToTop() {
  document.getElementById("spellsTab").scrollTo(0, 0);
}

function openSpellsTab() {
  document.getElementById("spellsTab").style.display = 'initial';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'none';
  document.getElementById("spellsTabButton").style.borderBottom = '3px #f9e5b3 solid';
  document.getElementById("traitsTabButton").style.borderBottom = 'none';
  document.getElementById("rulesTabButton").style.borderBottom = 'none';
}

function openTraitsTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'initial';
  document.getElementById("rulesTab").style.display = 'none';
  document.getElementById("spellsTabButton").style.borderBottom = 'none';
  document.getElementById("traitsTabButton").style.borderBottom = '3px #f9e5b3 solid';
  document.getElementById("rulesTabButton").style.borderBottom = 'none';
}

function openRulesTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'initial';
  document.getElementById("spellsTabButton").style.borderBottom = 'none';
  document.getElementById("traitsTabButton").style.borderBottom = 'none';
  document.getElementById("rulesTabButton").style.borderBottom = '3px #f9e5b3 solid';
 }
