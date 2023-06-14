

const container = document.querySelector(".container");
const addTitle = document.querySelector(".Title");
const addText = document.querySelector(".text");
const addBtn = document.querySelector(".addbtn");

// const notes = localStorage.getItem("notes")
//   ? JSON.parse(localStorage.getItem("notes"))
//   : [];

const archive = localStorage.getItem("archive")
  ? JSON.parse(localStorage.getItem("archive"))
  : [];

const trash = localStorage.getItem("trash")
  ? JSON.parse(localStorage.getItem("trash"))
  : [];
  
const display = () => {
  const inputdiv = document.querySelector(".inputdiv");
  inputdiv.innerHTML = "";
  let notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

  notes.map((x, index) => {
    let innerdiv = document.createElement("div");
    innerdiv.setAttribute("class", "note");

    let buttondiv = document.createElement("div");
    buttondiv.setAttribute("class", "buttons");

    let p = document.createElement("p");
    p.innerHTML = x.addTitle;

    let span = document.createElement("span");
    span.innerHTML = x.addText;

    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "trash");
    btn1.innerHTML = "Trash";

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "archive");
    btn2.innerHTML = "Archive";

    buttondiv.append(btn1);
    buttondiv.append(btn2);

    innerdiv.append(buttondiv);
    innerdiv.append(p);
    innerdiv.append(span);

    inputdiv.append(innerdiv);
    container.append(inputdiv);

    btn2.addEventListener("click", () => {
      let archive = localStorage.getItem("archive")
        ? JSON.parse(localStorage.getItem("archive"))
        : [];
      archive.unshift(notes[index]);
      localStorage.setItem("archive", JSON.stringify(archive));
      // archiveDisplay();
      // console.log(archive);
      
      
      notes.splice(index, 1);
      inputdiv.innerHTML = "";
      localStorage.setItem("notes", JSON.stringify(notes));
    });

    btn1.addEventListener("click", () => {
      let trash = localStorage.getItem("trash")
        ? JSON.parse(localStorage.getItem("trash"))
        : [];
      trash.unshift(notes[index]);
      localStorage.setItem("trash", JSON.stringify(trash));
      // trashDisplay();
      // console.log(trash);

      notes.splice(index, 1);
      inputdiv.innerHTML = "";
      localStorage.setItem("notes", JSON.stringify(notes));
    });
  });
};


addBtn.addEventListener("click", () => {
    let notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  if (addText.value === "") {
    return alert("Add your note");
  } else {
    notes.push({
      addTitle: addTitle.value,
      addText: addText.value,
    });
  }

  addTitle.value = "";
  addText.value = "";

  localStorage.setItem("notes", JSON.stringify(notes));
  display();
});

// trash function

// const trashDisplay = () => {
//   const tr = document.querySelector(".deleteArray");
//   tr.innerHTML = "";
//   const trash = localStorage.getItem("trash")
//   ? JSON.parse(localStorage.getItem("trash"))
//   : [];

//   trash.map((x, index) => {
//     let innerdiv = document.createElement("div");
//     innerdiv.setAttribute("class", "deleteNote");

//     let p = document.createElement("p");
//     p.innerHTML = x.addTitle;

//     let span = document.createElement("span");
//     span.innerHTML = x.addText;

//     let btn = document.createElement("button");
//     btn.innerHTML = "-";

//     innerdiv.append(p);
//     innerdiv.append(span);
//     innerdiv.append(btn);

//     tr.append(innerdiv);
//   });
// };
// trashDisplay();

// ArchiveDisplay


// const archiveDisplay = () => {
//   const arch = document.querySelector(".archive");
//   tr.innerHTML = "";
//   const archive = localStorage.getItem("archive")
//   ? JSON.parse(localStorage.getItem("archive"))
//   : [];

//   archive.map((x, index) => {
//     let innerdiv = document.createElement("div");
//     innerdiv.setAttribute("class", "archNote");

//     let p = document.createElement("p");
//     p.innerHTML = x.addTitle;

//     let span = document.createElement("span");
//     span.innerHTML = x.addText;

//     innerdiv.append(p);
//     innerdiv.append(span);

//     arch.append(innerdiv);
//   });
// };

// archiveDisplay();
display();