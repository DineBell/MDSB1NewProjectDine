/*
 *	Formation jQuery
 *	TP 3  : Parcourir et modifier la DOM*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
		
		/*
			DEM0
		*/
		// var $li = $("li") ;
		// alert($li.text()) ;  
		// alert($li.html()) ;
		// alert($li.length) ;
	
		/*
			EXEMPLE :
			Numéroter les tableaux avec les méthode .each() et .prepend()
		*/
		
		// Ensemble des éléments "caption"
		var $captions = $("caption") ;
		
		// On les parcourt un à un
		$captions.each(function(i){
		
			// Noeud courant :
			var $captionCourant =  $(this) ;
		
			// Numéro du noeud (i commence à 0)
			var num = i+1 ;
		
			// On rajoute le numéro au début du noeud 
			$captionCourant.prepend(num+". ") ;
			
		});
		
		/*
			EXERCICE 1
			Dans les cellules qui ont la classe «provisoire», ajouter le lien suivant :
			<a href="#" title="Provisoire">(p)<a>
		*/

		/*
			EXERCICE 2
			Dans les cellules qui sont vides ou bien ne contiennent que des espaces, écrire n.d. et ajouter la classe "non-defini" 	
		*/
	
		/*
			EXERCICE 3
			Avant le nom des départements qui comprennent des cellules non-définies, ajouter le lien suivant :
			<a href=\"#\" title=\"Incomplet\">(i)</a>
		*/
		
		/*
			EXERCICE 3
			Dans le corps des tableaux, remplacer la première cellule de chaque ligne par une cellule de type «titre» (balise <th> au lieu de <td>).
			On conserve l'attribut "headers" de la cellule
		*/
		
		/*
			EXERCICE 4
			Trier chacun des tableaux selon l'ordre alphabétique des départements. 
		*/

	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
