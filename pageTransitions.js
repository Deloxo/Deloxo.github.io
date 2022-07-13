function mainPage() {
    document.getElementById("settingsPage").style.display = 'none';
    document.getElementById("charactersPage").style.display = 'none';
    document.getElementById("spellListTab").style.border = '3px #760f78 solid';
    document.getElementById("settingsTab").style.border = 'none';
    document.getElementById("charactersTab").style.border = 'none';
}

function settingsPage() {
    document.getElementById("settingsPage").style.display = 'initial';
    document.getElementById("charactersPage").style.display = 'none';
    document.getElementById("settingsTab").style.border = '3px #760f78 solid';
    document.getElementById("spellListTab").style.border = 'none';
    document.getElementById("charactersTab").style.border = 'none';

}

function charactersPage() {
    document.getElementById("settingsPage").style.display = 'none';
    document.getElementById("charactersPage").style.display = 'initial';
    document.getElementById("charactersTab").style.border = '3px #760f78 solid';
    document.getElementById("settingsTab").style.border = 'none';
    document.getElementById("spellListTab").style.border = 'none';
}

function editSpell() {
    document.getElementById("spellPage").style.display = 'none';
    document.getElementById("spellEdit").style.display = 'initial';
    document.getElementById("nameTextBoxEdit").value = Object.values(spells)[spellIndex].name;
}

function cancelEdit() {
    document.getElementById("spellPage").style.display = 'initial';
    document.getElementById("spellEdit").style.display = 'none';
}

function createSpell() {
    document.getElementById("spellPage").style.display = 'none';
    document.getElementById("spellCreate").style.display = 'initial';
}

function cancelCreation() {
    document.getElementById("spellCreate").style.display = 'none';
}

function spellPage(number) {
    spellIndex = number;
    document.getElementById("spellPageTitle").innerHTML = Object.values(spells)[number].name;
    document.getElementById("spellPage").style.display = 'initial';
}

function spellsTab() {
  document.getElementById("skillsTabPage").style.display = 'none';
  document.getElementById("rulesTabPage").style.display = 'none';
}

function skillsTab() {
  document.getElementById("skillsTabPage").style.display = '';
  document.getElementById("rulesTabPage").style.display = 'none';
}

function rulesTab() {
  document.getElementById("skillsTabPage").style.display = 'none';
  document.getElementById("rulesTabPage").style.display = '';
 }
function searchResultsChange() {
  for (var x = 0; x < Object.keys(JSON.parse(localStorage.spells)).length; x++) {
    document.getElementsByClassName("spell")[x].style.display = '';
  }
  for (var x = 0; x < Object.keys(JSON.parse(localStorage.spells)).length; x++) {
      if (Object.values(JSON.parse(localStorage.spells))[x].name.includes(document.getElementById("searchBar").value) == false) {
        document.getElementsByClassName("spell")[x].style.display = 'none';
      }
  }
}
