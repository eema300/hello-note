function saveFile() {
    const text = document.getElementById("text-field").innerText;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = "my_note";
    document.body.appendChild(link);
    link.click();
}


function autoSave(text) {
    localStorage.setItem("text_cache", text)
}


function autoLoad() {
    //restore previously entered data
    const text_field = document.getElementById("text-field");
    const retrieved_text = localStorage.getItem("text_cache");
    if(null != retrieved_text) {
        text_field.textContent = retrieved_text;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    //autosave text-field
    const text_field = document.getElementById("text-field");
    text_field.addEventListener("input", function() {
        const text = text_field.innerText;
        autoSave(text);
    })

    //save text as .txt file
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", saveFile);
});


document.onload = autoLoad();