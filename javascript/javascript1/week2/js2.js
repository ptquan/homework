//step 3
function breakTime() {
    const monday = {
        time: 12,
    };
    return monday;
};
const timeObj = breakTime();
console.log(timeObj);

// 3.1
const colorBox = [{
    color: 'green'
},
{
    color: 'pink'
},
{
    color: 'orange'
}];

const colorObjects = arrayWithObjects('red', 'pink', 'white');
console.log(colorObjects);
function arrayWithObjects(color1, color2, color3) {
    colorBox[0].color = color1;
    colorBox[1].color = color2;
    colorBox[2].color = color3;
    return colorBox;
}

for (let i = 0; i < colorBox.length; i++) {
    console.log(colorBox[i].color);
};

// create count the number of days.

const dayOfWeek = ["Sunday", "Monday ", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayLeft = 9;
const today = "Sunday";
for (let i = 0; i < dayOfWeek.length; i++) {
    const meetingDay = dayLeft - dayOfWeek.length;
    if (today === dayOfWeek[i]) {
        console.log("Today is: " + today);
        console.log("How many days to meet: " + dayLeft);
        console.log("We are meeting on: " + dayOfWeek[meetingDay])
    }
};

// 4 : Smart-ease - Goes Global!
//create notes  with empty array + function addNote.

const notes = [];
function addNote(note, noteId) {
    notes.push({note, noteId});
}
addNote("dealine", 7);
addNote("stillWorkingonit", 16);
addNote("coffe", 18);

console.log(notes);

function getNoteFromId (id) {
    for (let i = 0 ; i< notes.length; i++){
        if (id === notes[i].noteId){
            console.log(notes[i]);
        }else {
            console.log(" An Error");
        }
    }
}
getNoteFromId(18);



//Read all notes
function showAllNotes() {
    for (let i = 0; i < notes.length; i++) {
        console.log("Note: " + notes[i].note + "  Id:" + notes[i].noteId);
    };
} 
showAllNotes();
