const types = [
    ["chore", "A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)"],
    ["build", "Build related changes (eg: npm related/ adding external dependencies)"],
    ["feat", "A new feature"],
    ["fix", "A bug fix"],
    ["docs", "Documentation related changes"],
    ["refactor", "A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)"],
    ["perf", "A code that improves performance"],
    ["style", "A code that is related to styling"],
    ["test", "Adding new test or making changes to existing test"]
];
let type;
let scope;
let subjects;
let subject;
let finalString;
let result;


typeCards = document.getElementById("typeCards");

for (let index = 0; index <types.length; index++) {
    typeCards.innerHTML+=`
    <button onclick="typeOnClick(${index})">
    <div id="${types[index][1]}" class="bg-blue-200 p-5 rounded-xl" title="${types[index][1]}">
    <h2 class="text-xl font-extrabold"> ${types[index][0]} </h2> 
    </div>
    </button>
`
}

function createFinalString(){
    finalString=type+"-"+scope+"-"+subject;
    result = document.getElementById("result");
    result.value = finalString;
}
function typeOnClick(pick){
    type = types[pick][0];
    document.getElementById("pageOne").classList.add('hidden');
    document.getElementById("pageTwo").classList =['min-h-screen','block'];
}
function scopeOnClick(){
    if ( document.getElementById("scope").value!="") {
        scope = document.getElementById("scope").value;
        document.getElementById("pageTwo").classList=['hidden'];
        document.getElementById("pageThree").classList=['min-h-screen','block'] ;
    }
}
function subjectOnClick(){
    if ( document.getElementById("subject").value!="") {
    subject = document.getElementById("subject").value;
    subject = subject.toLowerCase();
    document.getElementById("pageThree").classList=['hidden'];
    document.getElementById("pageResults").classList=['min-h-screen','block'] ;
    createFinalString();
    }
}
function returnToType(){
    document.getElementById("pageOne").classList =['min-h-screen','block'];
    document.getElementById("pageTwo").classList.add('hidden');
}
function returnToScope(){
    document.getElementById("pageTwo").classList =['min-h-screen','block'];
    document.getElementById("pageThree").classList.add('hidden');
}
function returnToSubject(){
    document.getElementById("pageThree").classList =['min-h-screen','block'];
    document.getElementById("pageResults").classList.add('hidden');
}

