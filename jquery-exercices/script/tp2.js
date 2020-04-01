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
			Mettre un attribut title valant "Provisoire" aux cellules qui ont la classe provisoire. cibler toutes les cellules (td) qui ont la classe provisoire  => $('td .provisoire') et leur attibuer un attibut title 'Provisoire' (dpnc quand on passe le curseur dessus il y a une infobulle qui apprait=> .attr('title','Provisoire');
		*/
               $('td.provisoire').attr('title','Provisoire');
				
		/*
			EXERCICE 2
			Dans les cellules vides, écrire « n.d » et ajouter la classe non-defini. ilfaut cibler toutes les cellules vides avec => td:empty puis ecrire n.d avec -> .text('n.d') puis ajouter classe non ddefini  avec addClass -> .addClass('non-defini');
		*/
		$('td:empty').text('n.d') .addClass('non-defini');		
		/*
			EXERCICE 3
			Mettre la classe non-significatif aux cellules dont l'attribut title contient "non significatif" // si on veut avoir les cellules dans lesquelles il y a non significatif meme si il y a autre chose il faut mettre le tilde ou astérisque devant signe =
		*/
               $('td[title*="non significatif"]').addClass('non-significatif');
				
		/*
			EXERCICE 4
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
            
            // console.log(id); => pour controler que ca a foncitonne dans la console c'est pour ca que je rajoute var id = avant zussi
                
                
                
	}); // Fin des instructions envoyées au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
