function searchResults() { //working
 for (var x = 0; x < spells.length; x++) {
   document.getElementsByClassName("item")[x].style.display = '';
 }
 for (var x = 0; x < spells.length; x++) {
     if (spells[x].name.includes(document.getElementById("searchBar").value) == false && spells[x].college.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("item")[x].style.display = 'none';
     }
 }
}


function outputStorage() {
  document.getElementById("localStorageOutput").value = localStorage.spells;
}

function inputStorage() {
  localStorage.spells = document.getElementById("localStorageOutput").value;
}

function Spell(nameInput, collegeInput, typeInput, descriptionInput,
  costInput, durationInput, timeToCastInput, prerequisitesInput) {
  this.name = nameInput;
  this.college = collegeInput;
  this.type = typeInput;
  this.description = descriptionInput;
  this.cost = costInput;
  this.duration = durationInput;
  this.timeToCast = timeToCastInput;
  this.prerequisites = prerequisitesInput;
}

function submitToStorage() {
  var prelength = spells.length;
  spells[itemIndex] = new Spell(
    document.getElementById("inputItemTitle").value,
    document.getElementById("inputItemCollege").value,
    document.getElementById("inputItemType").value,
    document.getElementById("inputItemDescription").value,
    document.getElementById("inputItemCost").value,
    document.getElementById("inputItemDuration").value,
    document.getElementById("inputItemTimeToCast").value,
    document.getElementById("inputItemPrerequisites").value
  );
  spells.sort((a,b) => {if(a.name > b.name) {return 1;} else {return -1}});
  localStorage.spells = JSON.stringify(spells);
  if (prelength < spells.length) {
    document.getElementById("spellsTab").innerHTML += '<div class="item" onclick="openItemPage(' + spells.length + ')"><button onclick="addToChar(' + spells.length + ')" id="addToCharacterButton"></button><span class="itemName"></span><br><span class="itemType"></span></div>';
  }
  for (var x = 0; x < Object.values(spells).length; x++) {
      document.getElementsByClassName("itemName")[x].innerHTML = spells[x].name;
      document.getElementsByClassName("itemType")[x].innerHTML = spells[x].college;
  }
}
