function reserveValue(id){
    return document.getElementById(id);
}

const btnContact = reserveValue('button');
const container__right = reserveValue("container__right");
const popup = reserveValue ('popup');

console.log(popup);
// console.log(btnContact);
btnContact.addEventListener('click',function(evt){
    container__right.style.display = 'none';
    popup.style.display = "block"
});



function reserve(id){
    return document.getElementById(id);
}

const btncreer = reserve ('button2');
const titre = document.getElementById("tite__titre");
const mail = reserveValue("tite__mail");
const telephone = document.getElementById("tite__tel");
const fonction = document.getElementById ("tite__fonction");

// console.log(btnContact);
btncreer.addEventListener('click',function(evt){
    container__right.style.display = 'block';
    popup.style.display = 'none';
});


function addValue(id){
    return document.getElementById(id);
}

const contactAjouter =  addValue ('add');

// console.log(btnContact);
btncreer.addEventListener('click',function(evt){
    container__right.style.display = 'block';
    popup.style.display = 'none';
});













