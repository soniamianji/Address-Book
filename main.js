
var firstName = document.getElementById("firstName");
var tel= document.getElementById("tel");
var email = document.getElementById("email");
var address = document.getElementById("address"); 
var form = document.querySelector("form");
var book = [];
var contactCards = document.getElementById("contactcards");



if (localStorage.book !== undefined) {
    book = JSON.parse(localStorage.book);
  }
display();


form.addEventListener("submit", save);
form.addEventListener("reset" ,removeitAll);

function save(event){
    event.preventDefault();
    if (firstName.value == "" || tel.value == "" || email.value == "" || address.value ==""){
        alert('Please fill all the required fields');
    }else {
        book.push(new UserContacts(firstName.value, tel.value, email.value, address.value));
        localStorage.book = JSON.stringify(book);
        display();
        firstName.value = '';
        tel.value = '';
        email.value = '';
        address.value ='';
    }
    

}



function removeitAll(){
   localStorage.clear();
   while(contactCards.firstChild){
    contactCards.removeChild(contactCards.firstChild);
   }
}

function UserContacts(n, t, em, ad){
    this.firstName = n;
    this.tel = t;
    this.email = em;
    this.address = ad;
    
}

function display(){
    contactCards.innerHTML = "";
    for (var i= 0; i < book.length; i++){

    var newCard = document.createElement ("div");
    newCard.setAttribute("class", "cardStyle");
    contactCards.appendChild(newCard);
        newCard.innerHTML = '<div class ="lineStyle">' + '<p>' + book[i].firstName +'</p>' +'</div>' +'<p>'+ book[i].tel+ '</p>'+ "</br>" +'<p>' + book[i].email+ '</p>'+"</br>"+'<p>' +book[i].address+'</p>';

    }
}





