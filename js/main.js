const links = [
  { label: "Week 1", url: "/week1/index.html", notes: "Porfolio" },
  ]
  
const list = document.getElementById("list");
  
for (let i = 0; i < links.length; i++) {
  // in this part we create an element <li> <a></a> </li>
  let li = document.createElement("li");
  let a  = document.createElement('a');

  a.setAttribute('href', links[i].url); //set a link/url for Week[i]
  a.textContent = links[i].label + " : " + links[i].notes;  // set a Label of Week[i]

  li.appendChild(a); // put the a inside the li
  list.appendChild(li); // put the li inside the #list
};

  console.log("hello world!")
