/*
 *	Formation jQuery
 *	TP 4 bis : Plugins
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :	
	$(document).ready(function() {

		/*	
			DEMO
		*/
		
		// Echec du chargement
		// $("<div></div>").load("/not-here.php",function(data, status) {
			// if (status == "error") alert("Erreur !") ;
			// else alert(data)  ;
        // }); 
		
		/*	
			EXEMPLE
			Chargement d'un tableau
		*/
		
		// Bouton cliquable
		var $exemple = $("input#exemple") ;
		
		// Adresse du fichier chargé
		var fichierExemple = "xml/reg43.xml" ;
		
		// Emplacement du tableau
		var $conteneurTableau = $("#tableau") ;
		
		// Évènement clique
		$exemple.click(function(){
			
			// Méthode .load() : charge directement le contenu du fichier dans l'objet auquel la méthode s'applique
			$conteneurTableau.load(fichierExemple,function(data,status){
			
				// Paramètre data : contenu du fichier chargé
				// alert(data) ;
				// Paramètre status : vaut erreur si le fichier n'a pas été chargé
				if(status=="error") {
				
					// Message d'erreur
					$conteneurTableau.html("<p>Impossible de charger le fichier "+fichierExemple+"</p>") ;
					
					// Interruption du script
					return ;
				}
				// Message ajouté dans le tableau
				$conteneurTableau.append("<p>Charg&eacute; &agrave; partir du fichier "+fichierExemple+"</p>") ;
				
			});
		});
		
		/*	
			EXERCICE 1
			Affichage du tableau correspondant à l'option sélectionnée quand on clique sur le bouton «voir les départements».
			Les addresses des fichiers des tableaux sont dans les attributs value des options.
			Le bouton cliquable se retrouve grâce à l'identifiant valide et la liste de sélection avec l'identifiant regions.
		*/	
		
		/*	
			EXERCICE 2
			Recréer la liste de sélection à partir du fichier xml/regions.xml. 
			Les options générées à partir du xml auront comme attribut value le code de la région (regid).
		*/
		
		/*
			EXERCICE 3
			Charger le fichier xml/departements.xml.
			Quand on clique sur le bouton «voir les départements», un tableau est généré avec uniquement les départements de la région sélectionnée.
		*/
		
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
