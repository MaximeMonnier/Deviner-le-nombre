const r = Math.floor(Math.random() * 100);
const d = r;
const resultat = document.querySelector(".resultat");
const verif = document.querySelector("#verifier");
const inp = document.getElementById("input");
const lettre = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
console.log(lettre);
console.log(d);

function getValue() {
  const inp = document.getElementById("input").value;
  if (inp == d) {
    resultat.textContent = "bravo vous avez trouver le bon numéro";
    resultat.style.color = "green";
  }
  if (inp > d) {
    resultat.textContent = "vous avez visez trop haut ";
    resultat.style.color = "red";
  }
  if (inp < d) {
    resultat.textContent = "vous avez viser trop bas ";
    resultat.style.color = "red";
  }
  if (inp == lettre[length]) {
    resultat.textContent = "Vous ne pouvez pas entrez de lettre";
  }
  console.log(inp);
}

verif.addEventListener("click", () => {});
