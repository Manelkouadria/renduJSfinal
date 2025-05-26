

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

        // const section1 = document.createElement("section")
        // const divUn = document.createElement("div")
        // principale.appendChild("section1");
        // section1.appendChild("divUn");

        //Appelationn

        card.appendChild(nomCommercial);
        card.appendChild(phraseAccroche);
        card.appendChild(texteAppelAction);
        principale.appendChild(card);





        let avis = data.avantagesClients
        let divav = document.getElementById("av")
        // ici on utilise les données reçues, faire les avantages client 

        avis.forEach(avantage => {
            const avantages = document.createElement("div");
            avantages.classList.add("avantagecli");

            const avantagesClients = document.createElement("h3");
            avantagesClients.classList.add("avantageclients");

            avantagesClients.textContent = avantage;

divav.appendChild(avantages);
            avantages.appendChild(avantagesClients);

            //niveau 1e2 fini.

            //  Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.

            // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.


        });

        let activite = data.activites;


        activite.forEach(element => {
            const nom = document.createElement("h2")
            const description = document.createElement("p")
            const image = document.createElement("img")
            const sectionActivite = document.createElement("section");
            sectionActivite.classList.add("sectionActivite");
            const card2 = document.createElement("div")
            
            const containerActivite = document.getElementById("containerActivite");
            nom.textContent = element.nom;
            description.textContent = element.description;
            image.src = element["image-url"];

card2.appendChild(image);
            card2.appendChild(nom);
            card2.appendChild(description);
            
            sectionActivite.appendChild(card2);
            containerActivite.appendChild(sectionActivite);

        });

    })

// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
 data.commentaire.forEach(element => {
        const commentaire= document.getElementById("commentaire")
        commentaire.textContent = element.;

        const nomPrenom= document.createElement("h3");
        const com= document.createElement("p")

        nomPrenom.textContent= element.nomPrenom
        com.textContent= element.com

        commentaire.appendChild(nomPrenom);
        commentaire.appendChild(com);

    });

// .catch(error => {
//     // ici on gère les erreurs
//     console.error('Erreur lors du fetch :', error);
// });




