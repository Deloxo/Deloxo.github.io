function mainPage() {
    document.getElementById("settingsPage").style.display = 'none';
    document.getElementById("charactersPage").style.display = 'none';
}

function settingsPage() {
    document.getElementById("settingsPage").style.display = 'initial';
    document.getElementById("charactersPage").style.display = 'none';

}

function charactersPage() {
    document.getElementById("settingsPage").style.display = 'none';
    document.getElementById("charactersPage").style.display = 'initial';

}

function editSpell() {
    document.getElementById("spellPage").style.display = 'none';
    document.getElementById("spellEdit").style.display = 'initial';
    document.getElementById("titleTextBox").value = Object.values(spells)[spellIndex].name;
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
