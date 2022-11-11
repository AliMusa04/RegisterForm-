const NameElement = document.getElementById("NameID");
const SurNameElement = document.getElementById("SurNameID");
const AgeElement = document.getElementById("AgeID");
const NationElement = document.getElementById("Nation");
const PositionElement = document.getElementById("Position");
const ExperElement = document.getElementById("ExperID");
const ButtonElement = document.getElementById("submitID");
const tBodyElement = document.getElementById("tbodyID");

ButtonElement.addEventListener("click", addEmploye);

function addEmploye() {
  const trElement = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdSurName = document.createElement("td");
  const tdAge = document.createElement("td");
  const tdNation = document.createElement("td");
  const tdPosition = document.createElement("td");
  const tdExper = document.createElement("td");

  tdName.innerHTML = NameElement.value;
  tdSurName.innerHTML = SurNameElement.value;
  tdAge.innerHTML = AgeElement.value;
  tdNation.innerHTML = NationElement.value;
  tdPosition.innerHTML = PositionElement.value;
  tdExper.innerHTML = ExperElement.value;
  
  const DeleteButton = document.createElement("button");
  DeleteButton.innerHTML="Delete"
  DeleteButton.classList.add("btn-danger")
 DeleteButton.addEventListener('click',deleteBut)

function deleteBut (){
    tBodyElement.removeChild(trElement)
}
  trElement.append(tdName, tdSurName, tdAge, tdNation, tdPosition, tdExper,DeleteButton);
  tBodyElement.appendChild(trElement);
 
}


