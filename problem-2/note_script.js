const noteStorage= document.querySelector("note-display");
const form= document.querySelector("form");

class addNote{
    constructor(title,body){
        this.title=title;
        this.body=body;

    }
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const titleInput = document.querySelector("#title")
    const noteInput = document.querySelector("#note")

    if(titleInput.value.length>0 && noteInput.value.length>0){
        const newNote = new addNote(titleInput,noteInput);
        addNotetoList(newNote);
        titleInput.value="";
        noteInput.value="";
        titleInput.focus();

    }

})