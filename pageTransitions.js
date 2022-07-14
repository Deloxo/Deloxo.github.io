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
    document.getElementById("itemPage").style.display = 'initial';
}

function editItem() {
    document.getElementById("itemPage").style.display = 'none';
    document.getElementById("editPage").style.display = 'initial';
    document.getElementById("nameTextBoxEdit").value = Object.values(spells)[spellIndex].name;
}

function cancelEdit() {
    document.getElementById("itemPage").style.display = 'initial';
    document.getElementById("editPage").style.display = 'none';
}

function openSpellsTab() {
  document.getElementById("spellsTab").style.display = 'initial';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'none';
}

function openTraitsTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'initial';
  document.getElementById("rulesTab").style.display = 'none';
}

function openRulesTab() {
  document.getElementById("spellsTab").style.display = 'none';
  document.getElementById("traitsTab").style.display = 'none';
  document.getElementById("rulesTab").style.display = 'initial';
 }
