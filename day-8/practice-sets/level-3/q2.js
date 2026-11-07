/*Build a contacts manager (array of objects): add, search by name (filter and includes), sort, delete
by index and show with console.table.*/
let contacts=[
    {name:"Akshaya",phone:"9876543210"},
    {name:"Kaviya",phone:"9876543211"},
    {name:"Ravi",phone:"9876543212"}
];

function addContact(name,phone){
    contacts.push({name,phone});
}

function searchContact(name){
    let result=contacts.filter((c)=>c.name.toLowerCase().includes(name.toLowerCase()));
    console.table(result);
}

function sortContacts(){
    contacts.sort((a,b)=>a.name.localeCompare(b.name));
}

function deleteContact(index){
    contacts.splice(index,1);
}

function showContacts(){
    console.table(contacts);
}

addContact("Priya","9876543213");
searchContact("ak");
sortContacts();
showContacts();
deleteContact(1);
showContacts();