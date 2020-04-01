/*
 *	Formation jQuery
 *	TP 7 : Fonctions
 *  Script pour la déclaration des fonctions
 * 	Inspiré d'un plugin d'Alen Grakalic (http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery)
*/

// Encapsulation :
(function ($) {

	// Surcharge des méthodes de jQuery  : 
	$.fn.extend({
		
		// Méthode pour activer une item dans le menu des onglets
		activeOnglet: function(options){
			
			// Configuration par défaut
			var confDefault = {
				classeActive : "active",
				valeurRetour : false 
			}
			
			// Surcharge de la configuration
			var conf = $.extend(
				confDefault,
				options
			) ;	
			
			// This renvoie directement le groupe de noeuds auquel la méthode s'applique
			var $listeOnglets = this ;
			
			$listeOnglets.click(function(){
			
				// Onglet cliqué : 
				var $onglet = $(this) ;

				// On enlève la classe sur tous les items
				$listeOnglets.removeClass(conf.classeActive) ;

				// On met la classe active sur l'item qui a été cliqué
				$onglet.addClass(conf.classeActive) ;

				// Exécution du clique ?
				return conf.valeurRetour ;
					
			})
			
			// On active le premier onglet
			$listeOnglets.eq(0).click() ;
			
			// Méthode chainable (i.e. return this)
			return $listeOnglets ;
			
		} // Fin de la méthode activeOnglet()
		
	}); // Fin de la surcharge des fonctions 
	
})(jQuery); // Fin de l'encapsulation
