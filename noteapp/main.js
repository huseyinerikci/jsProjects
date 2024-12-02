const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

//show notes
function showNotes() {
  const saveNote = localStorage.getItem("notes");
  if (saveNote) {
    notesContainer.innerHTML = saveNote;
  }
}
// update localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//create note
createBtn.addEventListener("click", () => {
  let pEl = document.createElement("p");
  pEl.className = "input-box";
  pEl.setAttribute("contenteditable", "true");
  pEl.innerHTML = `<img src="images/delete.png" />`;
  notesContainer.appendChild(pEl);

  //add keyup listener to new note
  pEl.addEventListener("keyup", updateStorage);
  updateStorage();
});

// delete note
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

//Disable Enter key to insert new line
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
showNotes();
