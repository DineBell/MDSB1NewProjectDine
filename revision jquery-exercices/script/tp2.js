/*
 *	Formation jQuery
 *	TP 2 : Attributs, classes, contenus texte et html
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE
			Attribuer aux dernières lignes de chaque tableau la classe region-reference.
		*/
		
		// Sélection de la dernière ligne de chaque tableau
		var $derniereLigne = $("tbody tr:last-child");
		
		// On applique la méthode .addClass() à notre sélection
		$derniereLigne.addClass("region-reference");
		
		// /* Chainage : */ $("tbody tr:last-child").addClass("region-reference");
	
		/*
			EXERCICE 1
			Mettre un attribut title valant "Provisoire" aux cellules qui ont la classe provisoire.
		*/
	$("td.provisoire").attr("title", "Provisoire");	
            
		/*
			EXERCICE 2
			Dans les cellules vides (:empty), écrire « n.d » et ajouter la classe non-defini.
		*/
		$("td:empty").addClass("non-defini").text("n.d");		
		/*
			EXERCICE 3
			Mettre la classe non-significatif aux cellules dont l'attribut title contient "non significatif" quand on cible directement un attribut on doit mettre des crochets comme ici ('td[title*="non significatif"]')
		*/
		
                $('td[title*="non significatif"]').addClass('non-significatif');
		/*
			EXERCICE 4
			Récupérer le contenu texte du lien ayant l'identifiant id-ligne-active.
			Ce contenu est l'identifiant de la ligne à laquelle vous devez mettre la classe class-ligne-active.
			A la place du code, mettre le nom de la région active dans le lien ayant l'identifiant id-ligne-active.
		*/
		/*
        Récupérer le contenu texte du lien (a) ayant l'identifiant id-ligne-active.=> $('a#id-ligne-active').text();
			Ce contenu est l'identifiant de la ligne à laquelle vous devez mettre la classe class-ligne-active.=> $('a#id-ligne-active').addClass('class-ligne-active');
			A la place du code, mettre le nom de la région active dans le lien ayant l'identifiant id-ligne-active.
		*/
		
            var link = $('a#id-ligne-active');    
            var id =  $('a#id-ligne-active').text();
            $('a#id-ligne-active').addClass('class-ligne-active');
            link.addClass('class-ligne-active');
            var cible = $('tr#'+id); // on a mis en memooire cette branche
            // maintenant il faut recuperer le texte qui est lié
            var region = $('tr#'+id+' th:first-child').text();
            link.text(region);
          //  console.log(region)
          
          // autre ecriture
          
          var id2 = link.attr('href');
          var region2 = $(id2).children('th:first-child').text();
          link.text(region2);
                
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
