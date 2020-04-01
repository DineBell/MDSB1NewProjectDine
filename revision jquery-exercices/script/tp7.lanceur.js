/*
 *	Formation jQuery
 *	TP 7 : Fonctions
 *  Script pour lancer les fonctions appelées dans tp7.funct*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE
			La méthode .activeOnglet() active un onglet quand on clique dessus.
		*/
		
		 $(".onglets a").activeOnglet() ;
		 
		/*
			EXERCICE 1
			Créer une méthode .afficheTableau() pour afficher les tableaux quand on clique sur les onglets. Déclarer la méthode dans tp7.functions.js, la lancer dans tp7.lanceur.js
		*/
		
		// $(".onglets a").afficheTableau() ;
		// /* Fusion de l'exemple et de l'exercice 1 : */ $(".onglets a").menuOnglet() ;
			
		/*
			EXERCICE 2
			Le fichier script/tp7.js contient des instructions pour générer des infobulles quand on survolle les liens du menu des onglets. Supprimer l'appel de ce fichier dans tp7.htm. À la place, créez votre méthode pour afficher des infobulles :
			$("a").infobulle(conf) ;
			La configuration permettra de modifier les paramètres suivants :
			->	posX : position de la bulle par rapport au curseur (abscisse)
			->	posY : position de la bulle par rapport au curseur (ordonnée)
			->	fadeSpeed : Vitesse d'apparition de l'infobulle
			->	id  : Identifiant du bloc contenant l'infobulle
			->	css  : Style du bloc contenant l'infobulle (format JSON)
		*/
		

		// Options que je peux paramétrer comme je veux
		var options = {
			x : 15,
			y : 15,
			css : {
				opacity:0.8,
				background:"#537384",
				color:"#e1e335"
			}
		} ;		
		
		// $(".onglets a").infobulle(options) ;
		
		// /* On devrait pouvoir tout chaîner */ $(".onglets a").activeOnglet().afficheTableau().infobulle(options) ;
		
		/*
			EXERCICE 3
			Créer une méthode .titreCellule() qui affiche dans l'attribut title d'une cellule (balise td) la tête de la colonne, la tête de la ligne et le contenu de la cellule.
			La configuration admet des paramètres facultatifs pour formater l'affichage. Par exemple :
			Mayenne 2010 [separateur] 7,9 [unite]
			Chaîner les méthodes .titreCellule() et .infoBulle() sur les cases des tableaux.
		*/
					
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
