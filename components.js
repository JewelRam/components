const fragment = document.createDocumentFragment()
//const get = document.querySelector("#messages");

let stuff1 = document.createElement("section") 
stuff1.className = "message"
stuff1.textContent= "words and things"
fragment.appendChild(stuff1)

let stuff2 = document.createElement("section") 
stuff2.className = "message"
stuff2.textContent= "more words and things"
fragment.appendChild(stuff2)

let stuff3 = document.createElement("section") 
stuff3.className = "message"
stuff3.textContent= "STUFF"
fragment.appendChild(stuff3)

let stuff4 = document.createElement("section") 
stuff4.className = "message"
stuff4.textContent= "STUFF and STUFF"
fragment.appendChild(stuff4)

let stuff5 = document.createElement("section") 
stuff5.className = "message"
stuff5.textContent= "STUFF and STUFF amd STUFF"
fragment.appendChild(stuff5)

document.querySelector("#messages").appendChild(fragment)
