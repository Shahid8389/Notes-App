
let createNoteBtn = document.querySelector(".createNoteBtn");
let notesContainer = document.querySelector(".notesContainer");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createNoteBtn.addEventListener('click', () => {
    let para = document.createElement("p");
    let img = document.createElement("img");
    para.setAttribute("class", "inputBox");
    para.setAttribute("contenteditable", "true");
    img.src = "./delete.jpg";
    
    notesContainer.appendChild(para).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {

    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll(".inputBox");
        
        notes.forEach(inputBox => {
            inputBox.onkeyup = function(){
                updateStorage();
            }
        });
    }

})