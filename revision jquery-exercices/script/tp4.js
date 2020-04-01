/*
 *	Formation jQuery
 *	TP 4 : Évènements*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE 
			Classe "active" sur les items cliqués dans le menu par onglet
		*/
		
		// Variables contenant l'ensemble des liens du menu par onglet :
		var $ongletItems = $(".onglets a") ;
		
		// Fonction déclenchées quand on clique sur l'un de ces items
		$ongletItems.click(function(){
			
			// On enlève la classe sur tous les items
			$ongletItems.removeClass("active") ;
			
			// On met la classe active sur l'item qui a été cliqué
			$(this).addClass("active") ;
			
			// Annule l'action par défaut
			return false ;
			
		});
	
		/*
			EXERCICE 1
			Cacher les tableaux.
			Quand on clique sur un onglet, le tableau lié apparaît.
			Le cas échéant, les autres tableaux disparaissent.
			Astuce :
			$cible.css("display","none") cache un élément et $cible.css("display","block") le remontre (pour un élément de type bloc).
		*/
		
		/*
			EXERCICE 2
			Dans le conteneur («div#conteneur»), ajouter l'élément suivant :
			<div id="loupe"></div>
			Masqué par défaut, cet élément apparaît quand on survole une cellule. Il affiche alors le contenu de la cellule.		
		*/
			
		/*
			EXERCICE 3
			Quand une cellule est survolée, les cellules de la même ligne et de la même colonne prennent la classe on.
			La cellule survolée prend la classe active.
			Astuce :
			On retrouve les cellules d'une même colonne grâce à leur attribut headers. 
			En effet, sa valeur est l'identifiant de la tête de la colonne.
		*/
		
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
