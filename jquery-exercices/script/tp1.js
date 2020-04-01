/*
 *	Formation jQuery
 *	TP 1 : S�lection et style
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE :
			Aligner � gauche la premi�re ligne du <thead>
		*/
		
		// S�lection des 1eres cases avec le s�lecteur CSS "thead th:first-child"
		var $premieresCasesThead = $("thead th:first-child") ;
		
		// On applique le style
		$premieresCasesThead.css("text-align","left") ;
		
		/*
			EXERCICE 1 :
			Dans chaque tableau, mettre la derni�re ligne en italique // en utlisant last-child pour cibler la dernière ligne (tr) de chaque tableau puis mettre en rouge puis je cible les enfants de tr (td c'est à dire les cellules) pour metttre en normal (car déjà en italique)
		*/

$("tbody tr:last-child").css('color','red').children('td').css('font-style', 'normal');
// ou autre ecriture

var derniereLigne = {
    "font-style": "normal",
    color:"#f00"
};
$("tbody tr:last-child").children('td').css(derniereLigne);



		/*
			EXERCICE 2 :
			Dans le corps des tableaux, attribuer � la premi�re cellule de chaque ligne le style suivant :

				{
					color: #555555;
					font-weight: bold;
					text-align: left;
				}			
			
			Utiliser pour cela le format JSON.
			NB : dans l'ennonc� les styles sont �crits avec une syntaxe CSS, qui n'est pas celle que vous devez utiliser
			
		*/
               
               // UNE PREMIERE ECRITURE EN UTULISANT UNE VARIABLE
           //    var jSonStyle = {
            //            textAlign:"left",
            //            fontWeight: "bold",
            //            color: "#555"
            //   };
            //   $('tbody td:first-child').css(jSonStyle);
               
               
                // ou autre ecriture  PLUS SIMPLE
                $('tbody td:first-child').css({
                        textAlign:"left",
                        fontWeight:"bold",
                        color:"#555"              
               });
		
		/*
			EXERCICE 3 :
			Attribuer � la ligne ayant l'identifiant reg24ref la couleur de fond #FBEC88 //  
		*/
		
                
                $('#reg24ref').css({
                      "background-color":"#FBEC88"  
                });
                
                
                              
		/*
			EXERCICE 4 :
			Attribuer aux lignes paires des tableaux (dans le tbody) la couleur de fond  #e8e8e8
            :nth-child permet de cibler un n element et (even) ou (odd) pour cibler les lignes soit paires (even 4 lettres donc paires) soit impaires (odd : 3 lettres donc impaires)
			Sauf si elles ont l'identifiant "#reg24ref" en utilisant :not(#reg24ref)
		*/
		// dans le body / $('tbody / cibler toutes les lignes paires /tr(....):nth-child(even)')/  sauf   celles qui ont comme identifiant #reg24ref / :not(#reg24ref)/   et les mettre en couleur de fond #e8e8e8
                
                $('tbody tr:not(#reg24ref):nth-child(even)').css('background-color','#e8e8e8');
                                              
                     

        // ajouter une ligne
    var illeetvilaine = "tr id="dep35"><td headers=reg23nom"
     $(illeetvilaine).appendTo($('#reg23'));
        
     
        // remplacer gironde par finistère
        var test = $('#reg1 tbody tr:nth-child(2) td:first-child').text();
        console.log(test);
        $('#reg1 tbody tr:nth-child(2) td:first-child').text('Finistère');
  
    
// quand on clik sur un caption dans le tbody la ligne disparait quand on reckil elle reapparait

    $('caption').click(function(){ 
       // $('tbody tr:nth-child(3)').toggle();
       //$(this).siblings('tbody').children('tr:nth-child(3)').toggle();
      // ou autre ecriture
      // $(this).parent().children('tbody').children('tr:nth-child(3)').toggle();
     $(this).parent().children('tbody').children('tr:nth-child(3)').toggleClass('grand');
    });
    
     	}); // Fin des instructions envoy�es au chargement de la page
	 
        
})(jQuery); // Fin de l'encapsulation
