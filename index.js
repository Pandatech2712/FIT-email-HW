//FIT e-mail
let jmeno = prompt ("Zadejte prosím vaše jméno (bez diakritiky):");
let surname = prompt ("Zadejte prosím vaše přijmení (bez diakritiky):");

//odstranění bílých míst
jmeno.trim();
surname.trim();

//vytvoření emailu
const prefixEmail = toLowerCase(jmeno.slice(0,3) + surname.slice(0,3));
const email = prefixEmail + "@fit.cvut.cz";

document.body.innerHTML = "Váš e-mai je " + email
