const produits = [
    {
        id : 1,
        nom: "Marteau",
        description: "cogne très bien!",
        prix: 12.99,
    },
    {
        id: 2,
        nom: "Rasoir",
        description: "Rase bien",
        prix: 7.99,
    },
    {
        id: 3,
        nom: "couteau",
        description: "Coupe bien",
        prix: 5.99,
    }
];

const CADDollar = new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency : "CAD",
});
const prixFormate = CADDollar.format(produit[0].prix);
function ChargerLesProduits() {
    const listeProduits = documents.getElementById("liste-produits");
    listeProduits.innerHTML = "";

}

window.addEventListener("load", () => {
    ChargerLesProduits();
})