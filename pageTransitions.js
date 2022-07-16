document.getElementById("createPageButton").setAttribute("onclick", "openCreatePage()");
document.getElementById("filtersPageButton").setAttribute("onclick", "openFiltersPage()");
document.getElementById("spellsTabButton").setAttribute("onclick", "openSpellsTab()");
document.getElementById("traitsTabButton").setAttribute("onclick", "openTraitsTab()");
document.getElementById("rulesTabButton").setAttribute("onclick", "openRulesTab()");
for (var x = 0; x < document.getElementsByClassName("backButton").length; x++) {
  document.getElementsByClassName("backButton")[x].setAttribute("onclick", "backButton()");
}

var listsTab = document.getElementById("listsTab");
var charactersTab = document.getElementById("charactersTab");
var settingsTab = document.getElementById("settingsTab");
var spellsTab = document.getElementById("spellsTab");
var traitsTab = document.getElementById("traitsTab");
var rulesTab = document.getElementById("rulesTab");
var inputPage = document.getElementById("inputPage");
var filtersPage = document.getElementById("filtersPage");
var itemPage = document.getElementById("itemPage");

function backButton() { //working
  itemPage.style.display = "none";
  inputPage.style.display = 'none';
  filtersPage.style.display = "none";
}

function openCreatePage() { //working
  inputPage.style.display = 'initial';
  document.getElementById("inputItemTitle").value = "";
  document.getElementById("inputItemCollege").value = "";
  document.getElementById("inputItemType").value = "";
  document.getElementById("inputItemDescription").value = "";
  document.getElementById("inputItemCost").value = "";
  document.getElementById("inputItemDuration").value = "";
  document.getElementById("inputItemTimeToCast").value = "";
  document.getElementById("inputItemPrerequisites").value = "";
}

function openListsTab() { //working
    listsTab.style.display = 'none';
    charactersTab.style.display = 'none';
    settingsTab.style.display = 'none';
    listsTabButton.style.border = '3px black solid';
    charactersTabButton.style.border = 'none';
    settingsTabButton.style.border = 'none';
}

function openCharactersTab() { //working
    listsTab.style.display = 'none';
    charactersTab.style.display = 'initial';
    settingsTab.style.display = 'none';
    listsTabButton.style.border = 'none';
    charactersTabButton.style.border = '3px black solid';
    settingsTabButton.style.border = 'none';
}

function openSettingsTab() { //working
    listsTab.style.display = 'none';
    charactersTab.style.display = 'none';
    settingsTab.style.display = 'initial';
    listsTabButton.style.border = 'none';
    charactersTabButton.style.border = 'none';
    settingsTabButton.style.border = '3px black solid';
}

function openFiltersPage() { //working
  filtersPage.style.display = 'initial';
}

function openItemPage(number) { //afaik this is working
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

function editItem() { //this is working, but I don't trust it
    itemPage.style.display = 'none';
    inputPage.style.display = 'initial';
    document.getElementById("inputItemTitle").value = Object.values(spells)[itemIndex].name;
    document.getElementById("inputItemCollege").value = Object.values(spells)[itemIndex].college;
    document.getElementById("inputItemType").value = Object.values(spells)[itemIndex].type;
    document.getElementById("inputItemDescription").value = Object.values(spells)[itemIndex].description;
    document.getElementById("inputItemCost").value = Object.values(spells)[itemIndex].cost;
    document.getElementById("inputItemDuration").value = Object.values(spells)[itemIndex].duration;
    document.getElementById("inputItemTimeToCast").value = Object.values(spells)[itemIndex].timeToCast;
    document.getElementById("inputItemPrerequisites").value = Object.values(spells)[itemIndex].prerequisites;
}

function openSpellsTab() { //working
  spellsTab.style.display = 'initial';
  traitsTab.style.display = 'none';
  rulesTab.style.display = 'none';
  spellsTabButton.style.borderBottom = '3px #f9e5b3 solid';
  traitsTabButton.style.borderBottom = 'none';
  rulesTabButton.style.borderBottom = 'none';
}

function openTraitsTab() { //working
  spellsTab.style.display = 'none';
  traitsTab.style.display = 'initial';
  rulesTab.style.display = 'none';
  spellsTabButton.style.borderBottom = 'none';
  traitsTabButton.style.borderBottom = '3px #f9e5b3 solid';
  rulesTabButton.style.borderBottom = 'none';
}

function openRulesTab() { //working
  spellsTab.style.display = 'none';
  traitsTab.style.display = 'none';
  rulesTab.style.display = 'initial';
  spellsTabButton.style.borderBottom = 'none';
  traitsTabButton.style.borderBottom = 'none';
  rulesTabButton.style.borderBottom = '3px #f9e5b3 solid';
 }
