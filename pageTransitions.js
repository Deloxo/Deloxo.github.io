function searchResults() {
 for (var x = 0; x < Object.keys(JSON.parse(localStorage.spells)).length; x++) {
   document.getElementsByClassName("item")[x].style.display = '';
 }
 for (var x = 0; x < Object.keys(JSON.parse(localStorage.spells)).length; x++) {
     if (Object.values(JSON.parse(localStorage.spells))[x].name.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("item")[x].style.display = 'none';
     }
 }
}

function submitToStorage() {
  Object.values(spells)[spellIndex].name = document.getElementById("inputItemTitle").value;
  Object.values(spells)[spellIndex].college = document.getElementById("inputItemCollege").value;
  Object.values(spells)[spellIndex].type = document.getElementById("inputItemType").value;
  Object.values(spells)[spellIndex].description = document.getElementById("inputItemDescription").value;
  Object.values(spells)[spellIndex].cost = document.getElementById("inputItemCost").value;
  Object.values(spells)[spellIndex].duration = document.getElementById("inputItemDuration").value;
  Object.values(spells)[spellIndex].timeToCast = document.getElementById("inputItemTimeToCast").value;
  Object.values(spells)[spellIndex].prerequisites = document.getElementById("inputItemPrerequisites").value;
  localStorage.spells = JSON.stringify(spells);
}

function backToList() {
  document.getElementById("itemPage").style.display = 'none';
  document.getElementById("filtersPage").style.display = 'none';
  document.getElementById("createPage").style.display = 'none';
  document.getElementById("editPage").style.display = 'none';
}

function openListsTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'none';
    document.getElementById("settingsTab").style.display = 'none';
    document.getElementById("listsTabButton").style.border = '3px #760f78 solid';
    document.getElementById("charactersTabButton").style.border = 'none';
    document.getElementById("settingsTabButton").style.border = 'none';
}

function openCharactersTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'initial';
    document.getElementById("settingsTab").style.display = 'none';
    document.getElementById("listsTabButton").style.border = 'none';
    document.getElementById("charactersTabButton").style.border = '3px #760f78 solid';
    document.getElementById("settingsTabButton").style.border = 'none';
}

function openSettingsTab() {
    document.getElementById("listsTab").style.display = 'none';
    document.getElementById("charactersTab").style.display = 'none';
    document.getElementById("settingsTab").style.display = 'initial';
    document.getElementById("listsTabButton").style.border = 'none';
    document.getElementById("charactersTabButton").style.border = 'none';
    document.getElementById("settingsTabButton").style.border = '3px #760f78 solid';
}

function openCreatePage() {
    document.getElementById("createPage").style.display = 'initial';
}

function cancelCreation() {
    document.getElementById("createPage").style.display = 'none';
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
    document.getElementById("inputItemTitle").value = Object.values(spells)[spellIndex].name;
    document.getElementById("inputItemCollege").value = Object.values(spells)[spellIndex].college;
    document.getElementById("inputItemType").value = Object.values(spells)[spellIndex].type;
    document.getElementById("inputItemDescription").value = Object.values(spells)[spellIndex].description;
    document.getElementById("inputItemCost").value = Object.values(spells)[spellIndex].cost;
    document.getElementById("inputItemDuration").value = Object.values(spells)[spellIndex].duration;
    document.getElementById("inputItemTimeToCast").value = Object.values(spells)[spellIndex].timeToCast;
    document.getElementById("inputItemPrerequisites").value = Object.values(spells)[spellIndex].prerequisites;
}

function cancelEdit() {
    document.getElementById("itemPage").style.display = 'initial';
    document.getElementById("editPage").style.display = 'none';
}

function openSpellsTab() {
  document.getElementById("spellsTab").style.display = 'initial';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'none';
  document.getElementById("spellsTabButton").style.border = '3px #760f78 solid';
  document.getElementById("traitsTabButton").style.border = 'none';
  document.getElementById("rulesTabButton").style.border = 'none';
}

function openTraitsTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'initial';
  document.getElementById("rulesTab").style.display = 'none';
  document.getElementById("spellsTabButton").style.border = 'none';
  document.getElementById("traitsTabButton").style.border = '3px #760f78 solid';
  document.getElementById("rulesTabButton").style.border = 'none';
}

function openRulesTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'initial';
  document.getElementById("spellsTabButton").style.border = 'none';
  document.getElementById("traitsTabButton").style.border = 'none';
  document.getElementById("rulesTabButton").style.border = '3px #760f78 solid';
 }
