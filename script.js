

fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json')
    .then(response => response.json()) // transforme la réponse en JSON
    .then(data => {

        const principale = document.getElementById("container")

        //card.setAttribute("", "product-card");
        //card.setAttribute("data-category", `${product.category}`);

        //Preparation des constante et mise en forme du texte


        // card.textContent = affiche.card

        const card = document.createElement("div")
        const nomCommercial = document.createElement("h1");
        nomCommercial.textContent = data.nomCommercial;

        const phraseAccroche = document.createElement("h2");
        phraseAccroche.textContent = data.phraseAccroche;

        const texteAppelAction = document.getElementById("bouton");
        texteAppelAction.textContent = data.texteAppelAction;



        //Appelationn

        card.appendChild(nomCommercial);
        card.appendChild(phraseAccroche);
        card.appendChild(texteAppelAction);
        principale.appendChild(card);

        const avantage = document.createElement("div");
        avantage.classList.add("avantagecli");

    principale.appendChild(avantage);


        // ici on utilise les données reçues, faire les avantages client 
        console.log(data);
    data.avantagesClients.forEach(element => {
    
        const avantagesClients = document.createElement("h3");
         avantagesClients.classList.add("avantagecli");

    avantagesClients.textContent = data.avantagesClients;
    dispatchEvent.classList = "avantagesClients"
    avantage.appendChild(avantagesClients);
   


});
    })
    .catch(error => {
        // ici on gère les erreurs
        console.error('Erreur lors du fetch :', error);
    });




