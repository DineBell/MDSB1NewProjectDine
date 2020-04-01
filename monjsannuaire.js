$(document).ready(function(){ //  attention il faut tpujours debuter les pages js par $(document).ready(function(){ 
    //
    //
    //
// ANNUAIRE -> pour scanner la page et chercher si femme mettre une image femme si homme mettre image homme

    $('.annuaire  article[data-sexe=h]').children('img').attr('src','images/homme-150.jpg');
    $('.annuaire article[data-sexe=f]').children('img').attr('src','images/femme-150.jpg');
   
    //  on cree une fonction pour que au click sur une categorie tous ceux qui ont cdtte categorie soient recuperes
   // donc on met une fonction click qui au click creera une variable = on va recuperer la variable et la mettre dans une categorie = var cat = $(this).attr('value')
   
    $('.annuaire option').click(function(){
        var cat = $(this).attr('value');
        console.log(cat);
    });
   
    $('.annuaire li').click(function(){ //  ici pour faire afficher au clik la lettre selecitonnee
        var alpha = $(this).html();
        console.log(alpha);
        if(alpha != 'TOUS'){ //  faire une fonction si jeclik pas sur tous
            $('.annuaire article').hide(); // je cache toutes les personnes
            $('.annuaire article[data-name='+alpha+']').show(); //quand je clik sur une lettre le ou les noms commencant par la meme lettre s'affichent
        }else{ //  sinon 
            $('.annuaire article').show(); //  je montre tous quand je clik sur tous
        }
        if(!$('.annuaire article').is(':visible')){ //  :visible est un peseudo element comme :hover 
            $('<p style="width:100%">)Personne ne correspond au critère sélectionné</p>').appendTo('#liste>div');
        }
    });
    $('select').on('change', function(){
        //alert(this.value);
        var cat = this.value;
        console.log(cat);
        if(cat !='all'){
            $('.annuaire article').hide();
            $('.annuaire article[data-cat ~='+cat+']').show();  // pour faire le tilde faire touche ALT + n qui veut dire "contient au moins"
        }else{ 
            $('.annuaire article').show();
            $('p.nolist').hide();
        }
    
    });

});
    
    
    






