function searchResults() { //working
 for (var x = 0; x < spells.length; x++) {
   document.getElementsByClassName("spell")[x].style.display = '';
   document.getElementsByClassName("spellName")[x].innerHTML = spells[x].name;
   document.getElementsByClassName("spellCollege")[x].innerHTML = spells[x].college;
   document.getElementsByClassName("sorceryLevel")[x].innerHTML = "SL" + spells[x].sorceryLevel;
 }
 for (var x = 0; x < traits.length; x++) {
   document.getElementsByClassName("trait")[x].style.display = '';
   document.getElementsByClassName("traitName")[x].innerHTML = traits[x].name;
   document.getElementsByClassName("traitType")[x].innerHTML = traits[x].type;
 }
 for (var x = 0; x < spells.length; x++) {
     if (spells[x].name.includes(document.getElementById("searchBar").value) == false && spells[x].college.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("spell")[x].style.display = 'none';
     }
 }
 for (var x = 0; x < traits.length; x++) {
     if (traits[x].name.includes(document.getElementById("searchBar").value) == false && traits[x].type.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("trait")[x].style.display = 'none';
     }
 }
}

function toCamelCase(str){
  let newStr = "";
  if(str){
    let wordArr = str.split(/[ ]/g);
    for (let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i].charAt(0).toLowerCase() + wordArr[i].slice(1)
      }
    }
  }else{
    return newStr;
  }
  return newStr;
}


function outputStorage() {
  document.getElementById("localStorageOutput").value = localStorage.spells;
}

function deleteItem() {
  spells.splice(itemIndex, 1);
  localStorage.spells = JSON.stringify(spells);
  document.getElementsByClassName("item")[spells.length].remove();
  for (var x = 0; x < spells.length; x++) {
      document.getElementsByClassName("itemName")[x].innerHTML = spells[x].name;
      document.getElementsByClassName("itemType")[x].innerHTML = spells[x].college;
  }
}

function sortBy(property) {
  sortingProperty = property;
  if (property == 'key') {
    spells.sort((a,b) => {if(a.key > b.key) {return 1} else {return -1}});
  }
  if (property == 'sorceryLevel') {
    spells.sort((a,b) => {if(a.sorceryLevel > b.sorceryLevel) {return 1} else {return -1}});
  }
  searchResults();
}

function inputStorage() {
  localStorage.spells = document.getElementById("localStorageOutput").value;
}

function Spell(nameInput, collegeInput, typeInput, descriptionInput,
  costInput, durationInput, timeToCastInput, prerequisitesInput, sorceryLevelInput) {
  this.name = nameInput;
  this.college = collegeInput;
  this.type = typeInput;
  this.description = descriptionInput;
  this.cost = costInput;
  this.duration = durationInput;
  this.timeToCast = timeToCastInput;
  this.prerequisites = prerequisitesInput;
  this.key = toCamelCase(nameInput);
  this.sorceryLevel = sorceryLevelInput;
}

function Trait(nameInput, typeInput) {
  this.name = nameInput;
  this.type = typeInput;
  this.key = toCamelCase(nameInput);
}

function submitToStorage() {
  var prelength = spells.length;
  if (editing == true && creating == false) {
    spells[itemIndex] = new Spell(
      document.getElementById("inputItemTitle").value,
      document.getElementById("inputItemCollege").value,
      document.getElementById("inputItemType").value,
      document.getElementById("inputItemDescription").value,
      document.getElementById("inputItemCost").value,
      document.getElementById("inputItemDuration").value,
      document.getElementById("inputItemTimeToCast").value,
      document.getElementById("inputItemPrerequisites").value,
      document.getElementById("inputItemSorceryLevel").value
    );
  }
  if (editing == false && creating == true) {
    spells[spells.length] = new Spell(
      document.getElementById("inputItemTitle").value,
      document.getElementById("inputItemCollege").value,
      document.getElementById("inputItemType").value,
      document.getElementById("inputItemDescription").value,
      document.getElementById("inputItemCost").value,
      document.getElementById("inputItemDuration").value,
      document.getElementById("inputItemTimeToCast").value,
      document.getElementById("inputItemPrerequisites").value,
      document.getElementById("inputItemSorceryLevel").value
    );
    document.getElementById("spellsTab").innerHTML += '<div class="item"><button onclick="addToChar(' + x + ')" id="addToCharacterButton"></button><span class="itemBody" onclick="openItemPage(' + x + ')"><span class="itemName"></span><br><span class="itemType"></span><span class="sorceryLevel"></span></span></div>';
  }
  spells.sort((a,b) => {if(a.key < b.key) {return 1} else {return -1}});
  spells.sort((a,b) => {if(a.sorceryLevel > b.sorceryLevel) {return 1} else {return -1}});
  localStorage.spells = JSON.stringify(spells);
  searchResults();
}
