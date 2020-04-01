/*
 *	Formation jQuery
 *	TP 5 : Animations
 *	D'après un script de ClarkLab (http://dmouronval.developpez.com/tutoriels/javascript/jquery/menu-anime/)
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE
		*/
		
		// Objet que l'on veut déplacer
		var $cible = $("#instructions") ;
		
		// On récupère ds un objet jSon les propriété css d'origine pour réinitialiser à la fin de l'animation
		var cssDefaut = {
			position : "relative", 					// Permet de déplacer la cible à partir de sa pos° d'origine
			left:$cible.css("left"),				// décalage à gauche (0)
			top:$cible.css("top"), 					// décalage en bas (0)
			fontSize : $cible.css("font-size"), 	// Taille du texte
			background:$cible.css("background"),	// Couleur de fond
			padding:$cible.css("padding"), 			// marge			
			width : $cible.width(),					// Largeur du bloc
			height : $cible.height()				// Hauteur du bloc
		}
				
		$("#cliquer-exemple").click(function(e){
		
			$cible
				// Réinitialise la css
				.css(cssDefaut) 
				 // Arrête l'animation en cours
				.stop( 
					true, // si vrai, vide la pile d'éxécution des animations.
					false // si vrai, force l'animation en cours a se terminer.
				)
				// Modification de la couleur de fond non géré par animate
				.css('background','#834442')
				// Effet : modification des dimensions				
				.animate(
					{width:"310px",height:"310px",fontSize:"10px",padding:"9px"},
					1000 // dure 1 seconde
				)
				// Effet : modification de la position				
				.animate(
					{bakground:'#537384',top:200,left:100}, // modifie la position
					1000, // dure 1 seconde
					function(){ // Fonction de callback
						$cible.css('background','#537384'); // couleur de fond
					}
				)
				// pause d'une 1seconde
				.delay(1000) 
				// Effet modification de la position 
				.animate(
					{left:'+=350', top:'-=150px'}, // (valeurs relatives avec -= et +=)
					1000, // dure 1 seconde
					function(){ // Fonction de callback
						$cible.css('background','#5f8453'); // couleur de fond
					}
				)
				// pause d'une 1/2 seconde
				.delay(500) 
				// Retour à la position d'origine en 1 seconde
				.animate(
					{left:0,top:0 },
					1000,
					function(){ // Fonction de callback 
						$cible.css(cssDefaut) ;	// Réinitialise la css
					}
				) ;
			// Annule l'action par défaut du click :
			return false ;
		})
		
		// Temporisation
		// var clearQueue = true ;
		// var goToEnd = true ;
		// $("h1").click(function(){$cible.stop(clearQueue,goToEnd)});
		
		/*
			EXERCICE 1 :
			Masquer les items du menu déroulant.
			Quand on clique sur le lien qui a la classe «menu-tete». Le menu se déplie vers le bas grace au slideToggle avec un temps ici (500).
		*/
                $('#demo').css('overflow','hidden');
		var $menu = $('.menu-deroulant ul');
                $menu.hide();
                $menu.find('li:even').addClass('alt'); // pour faire une fois sur 2 une couleur differente : even c'est impair , odd c'est pair
                $('.menu-tete').click(function(){
                    $menu.slideToggle(500);
                    return false;
                });
		/*
			EXERCICE 2 :
			Cacher les tableaux.
			Quand on clique sur un lien du menu déroulant, le tableau lié apparaît avec un effet de votre choix.
			Le cas échéant, les autres tableaux disparaissent.
		*/
                var $items = $menu.find('a');
                var $tables = $('table').hide();
                $items.click(function(){
                   $tables.hide();
                   $clique = $(this);
                var $active = $tables.filter($clique.attr('href'));
                   $active.show();
                });
		/*
			EXERCICE 3 :
			Créer un effet quand on survole les items du menu déroulant 
			(par exemple, modifier la propriété padding-left du style des liens).
		*/
               
                var cssDefault = {
                    paddingLeft : $items.eq(0).css("padding-left")
                };
		$items.hover(
                        function(){
                            $(this).animate({paddingLeft:"+=40px"},1000);                                      },
               
                        function(){
                            $(this).stop().css(cssDefault);
                        }
                                 
                    );
		/*
			EXERCICE 4 :
			Désactiver les animations
			Déclencher l'évènement click sur le premier item
			Réactiver les animations			
		*/
                $.fx.off = true;  // pour enlver les animations
		$items.eq(0).click();
                $.fx.off = false; // pour reactiver les animations
                
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
