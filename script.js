function searchResults() { //working
 for (var x = 0; x < Object.values(spells).length; x++) {
   document.getElementsByClassName("item")[x].style.display = '';
 }
 for (var x = 0; x < Object.values(spells).length; x++) {
     if (Object.values(JSON.parse(localStorage.spells))[x].name.includes(document.getElementById("searchBar").value) == false && Object.values(JSON.parse(localStorage.spells))[x].college.includes(document.getElementById("searchBar").value) == false) {
       document.getElementsByClassName("item")[x].style.display = 'none';
     }
 }
}

function outputStorage() {
  document.getElementById("localStorageOutput").value = localStorage.spells;
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

function toCamelCase(str){
  let newStr = "";
  if(str){
    let wordArr = str.split(/[ ]/g);
    for (let i in wordArr){
      if(i > 0){
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        newStr += wordArr[i].charAt(0).toLowerCase() + wordArr[i].slice(1);
      }
    }
  }else{
    return newStr
  }
  return newStr;
}

function sortSpells() {
  var spellList = Object.keys(spells);
  spellList.sort();
  console.log(spellList);
  for (var x = 0; x < Object.keys(spells).length; x++) {
    Object.keys(spells)[x] = spellList[x];
  }
  var spellsTemp = spells;
  for (var x = 0; x < Object.keys(spells).length; x++) {
    Object.values(spellsTemp)[x] = spells[spellList[x]];
    console.log(spells[spellList[x]]);
  }
  localStorage.spells = JSON.stringify(spellsTemp);
  console.log(JSON.stringify(spellsTemp));
  spells = JSON.parse(localStorage.spells);6
}

function submitToStorage() {
  var spellKey = toCamelCase(document.getElementById("inputItemTitle").value);
  spells[spellKey] = new Spell(
    document.getElementById("inputItemTitle").value,
    document.getElementById("inputItemCollege").value,
    document.getElementById("inputItemType").value,
    document.getElementById("inputItemDescription").value,
    document.getElementById("inputItemCost").value,
    document.getElementById("inputItemDuration").value,
    document.getElementById("inputItemTimeToCast").value,
    document.getElementById("inputItemPrerequisites").value
  );
  spells.sort();
  localStorage.spells = JSON.stringify(spells);
  document.getElementById("spellsTab").innerHTML += '<div class="item" onclick="openItemPage(' + Object.values(spells).length + ')"><button onclick="addToChar(' + Object.values(spells).length + ')" id="addToCharacterButton"></button><span class="itemName"></span><br><span class="itemType"></span></div>';
  for (var x = 0; x < Object.values(spells).length; x++) {
      document.getElementsByClassName("itemName")[x].innerHTML = Object.values(JSON.parse(localStorage.spells))[x].name;
      document.getElementsByClassName("itemType")[x].innerHTML = Object.values(JSON.parse(localStorage.spells))[x].college;
  }
}
