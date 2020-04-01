/*
 *	Formation jQuery
 *	TP 4 : �v�nements
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE 
			Classe "active" sur les items cliqu�s dans le menu par onglet
		*/
		
		// Variables contenant l'ensemble des liens du menu par onglet :
		var $ongletItems = $(".onglets a") ;
		
		// Fonction d�clench�es quand on clique sur l'un de ces items
		$ongletItems.click(function(){
			
			// On enl�ve la classe sur tous les items
			$ongletItems.removeClass("active") ;
			
			// On met la classe active sur l'item qui a �t� cliqu�
			$(this).addClass("active") ;
			
			// Annule l'action par d�faut
			return false ;
			
		});
	
		/*
			EXERCICE 1
			Cacher les tableaux.
			Quand on clique sur un onglet, le tableau li� appara�t.
			Le cas �ch�ant, les autres tableaux disparaissent.
			Astuce :
			$cible.css("display","none") cache un �l�ment et $cible.css("display","block") le remontre (pour un �l�ment de type bloc).
		*/
		/* JE STOCK  ELS TABLEAUX $("table") ET JE LES CACHE avec css("display","none") /*
                 */ 
                tables = $("table").css("display","none");
                //console.log(tables);
            
                $ongletItems.click(function(){
                    //var $clique=$(this);  // creer une variable qui va garder en memoire le $this
                    //
                    // console.log($clique)
                   // $tables = $("table").css("display","none"); /* on recache les tableaux à chaque fois qu'on cliquera suru n nouveau tableau*/    
                   // selecteur= $clique.attr("href");
                   // console.log(selecteur);
                   // tables.filter(selecteur).css("display", "block");
                   // ci dessous une concatenation des lignes du haut ::// pour faire en plus court 
                tables.css("display","none").filter($(this).attr("href")).css("display","block");
                    return false;
                });
                // ce dessous code pour faire apparaitre le tableau du 1er onglet , si j'avais voulu afficher le 2 eme onglet j'aurai mis (1) , 3 eme onglet j'aurai mis (2). C'est la fonciton eq
                $ongletItems.eq(0).click(); 
                
		/*
			EXERCICE 2
			Dans le conteneur (�div#conteneur�), ajouter l'�l�ment suivant :
			<div id="loupe"></div>
			Masqu� par d�faut, cet �l�ment appara�t quand on survole une cellule. Il affiche alors le contenu de la cellule.		
		*/
                var $loupe = $('<div id="loupe"></div>').appendTo('#conteneur').css('display','none');
                // CIBLER NOS TD ET METTRE LE HOVER (survol) DESSUS
		$('td').hover(
                        function(){
                            //$loupe.css('display','block');
                            //var $text = $(this).text();
                            //console.log($text);
                            //$loupe.text($text);
                            //  ci dessous les lignes de codes du dessus concaténées
                            $loupe.css('display','block').text($(this).text());
                        },
                        function(){
                            $loupe.css('display','none');
                        }
                    );    
		/*
			EXERCICE 3
			Quand une cellule est survol�e, les cellules de la m�me ligne et de la m�me colonne prennent la classe on.
			La cellule survol�e prend la classe active.
			Astuce :
			On retrouve les cellules d'une m�me colonne gr�ce � leur attribut headers. 
			En effet, sa valeur est l'identifiant de la t�te de la colonne.
		*/
		// il faut d'abord cibler chaque tableaux avec un each sur la balise table
                $('table').each(function(){
                    var letableau = $(this);
                    letableau.find('td').hover(
                        function(){
                            var $td = $(this); // variable qui recupere les donnes de la cellule uniquement
                            var $headers = $td.attr("headers");
                            console.log($headers);
                            letableau.find('[headers='+$headers+']').addClass('on');
                            letableau.find('#'+$headers).addClass('on');
                            
                            $td.closest("tr").children().addClass('on'); // cibler le parent le plus proche et tous les enfants donc toute la ligne
                            
                            $td.addClass('active'); // la cellule qui est survolée devient jaune
                        },                         
                        function(){
                            letableau.find('*').removeClass('on').removeClass('active');                               // '*' =>ca veut dire : tout
                        }
                    );
                 });
	}); // Fin des instructions envoy�es au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
