// Modal popup and close
const addBtn = document.querySelector(".add-btn");
const popupModal = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
// text Area
const modalTextArea = document.querySelector(".textArea-cont");
const priorities = ["lightpink", "lightgreen", "lightblue", "black"];

const priorityDiv = document.querySelectorAll(".priority-color");

let modalState = false;
let selectedPriority = null;

//  Creating new Ticket
//  1. Get the content from text area
//  2. Get the priority
//  3. Display the ticket with content from step 1 and priority from step 2

// Click on the Add button
addBtn.addEventListener("click", function (event) {
  toggleModal();
});

// Shift Key functionality
document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    console.log("Shift Key pressed");

    // if the value in modalTextArea is not empty
    // 1. Create the ticket with same value
    // 2. Make the modalTextArea empty
    // 3. Close the modal
    if (modalTextArea.value.length > 0 && selectedPriority != null) {
      createTicket(modalTextArea.value, selectedPriority);
      modalTextArea.value = "";
      clearPrioritySelction();
      toggleModal();
    }
    // else do nothing
  }
});

// Toggle Modal
function toggleModal() {
  // If popup is open
  if (modalState) popupModal.style.display = "none";
  // else when popup is closed
  else popupModal.style.display = "flex";
  modalState = !modalState;
}

// Create Ticket
function createTicket(taskDetails, priority) {
  //   console.log(priority);
  let ticktCont = document.createElement("div");
  ticktCont.setAttribute("class", "ticket-cont");

  // Create child elements
  ticktCont.innerHTML = `
        <div class="ticket-color" style="background-color:${priority}"></div>
        <div class="ticket-id">12345</div>
        <div class="task-area">${taskDetails}</div>
    `;

  //   console.log(ticktCont);
  mainCont.appendChild(ticktCont);
}

// Get the selected priority
priorityDiv.forEach(function (divElm) {
  divElm.addEventListener("click", function () {
    // Clear the selection
    clearPrioritySelction();
    // Add the new selection
    divElm.classList.add("active");

    // Iterate over the Priorities Array to validate the matching Priority
    selectedPriority = priorities.filter((priority) => {
      const classArr = Array.from(divElm.classList);
      return classArr.includes(priority);
    })[0];
  });
});

// Clear the Priority DIv Slection
function clearPrioritySelction() {
  priorityDiv.forEach(function (divElm2) {
    divElm2.classList.remove("active");
  });
  selectedPriority = null;
}
