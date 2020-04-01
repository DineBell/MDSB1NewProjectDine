$(document).ready(function(){
    // $('h1').hide();
    // dans index j'ai cree une div avec une boite rouge grace a js je vais  rajouter 5 div => en faisant une boucle for il faut relier cette boucle a la div de index grace à $( '<div class="col-1">' ).appendTo('#effets');

    for ( var i = 0; i < 5; i++ ) {
        $( '<div class="col-1">' ).appendTo('#effets');
    }
// ce dessous je fais un effet sur les boites rouge en cliquant dessus chacune disparait (fonction hide) en transiton lente grace au 2000 et puis ensuite une fonction remove pour faire disparaitre le code du code source: on peut aussi laisser le code visible dans inspecteur elelement en enlevant remove)
    $('#test').click(function(){
        $("#effets div").show(2000);
        $("#tests div").show(2000);
    });
    $("#effets div" ).click(function(){
    $( this ).hide( 2000, function() {
       // $( this ).remove();
    });
});
// $this : tres important dans jquery: garde en memoire , valeur qui est mise en mémoire
$('#box1').click(function(){
    $(this).css('background-color','pink').hide(4000);// AVEC CONCATENATION DU .HIDE(4000)
    
});
$('#box2').click(function(){
    $(this).css('background-color','purple');
    $(this).fadeOut(4000);
});
$('#box3').click(function(){
    $(this).css('background-color','blue');
    $(this).slideUp(4000);
});
   $('#animate div').click(function(){
 //      $(this).animate({
 //          "left":"300px"
 //      }, 3000);
//       $(this).animate({
//           "top":"-200px"
///       }, 4000).css('background-color','yellow'); 
  //     });
       
       //  si on concatene deux animations elles vont se realiser en meme temps cf ci dessous
       $("#animate div").animate({  // si je mets $(this).animate({ = ca fera un effet uniquement sur le bloc qui aura été cliqué le $this mettra en mémoire l'animation a effectuer
           "left":"300px",
           "top":"-300px"
       }, 2000);

});
    $('li').addClass('alerte');  //  rajout de la classe alerte pour mettre en rouge le texte dans la liste
    $('#no-alerte').click(function(){ // pour enlever la couleur une fois qu'on clik sur une ligne
        $('li').removeClass();
     });
     $('li a').click(function(){ // enlever la couleur sur un lien
         $(this).parent('li').removeClass();//  je rajoute cette ligne pour specifier que je veux enlever la couleur sur une ligne bien determinee et donc il faut remonter jusqu'au parent pour sepcifier le removeclass
     });
    //  j'ai créé un bouton qui a un identifiant #plus DANS MON INDEX HTML quand je cliquerai dessus je rajouterai une ligne à ma liste de lignes GRACE AU CODE CI DESSOUS => 
    var i = $('li').length + 1;
    //alert(i);
    $('#plus').click(function(){ 
        $('<li>Ligne ' + i + '</li>').appendTo('ul');
        i++;
        if(i > 1) {
            $('moins').show();
        }
    });
    
    //  j'ai créé un bouton qui a un identifiant #moins DANS MON INDEX HTML quand je cliquerai dessus je retire une ligne à ma liste de lignes GRACE AU CODE CI DESSOUS => 
     
    $('#moins').click(function(){ 
        if(i > 1){ //  je rajoute une condition pour que je n'ai pas de lignes négatives quand on clique trop sur enlever = si i est sup à 1...
        $('li:last').remove();//  on supprime la dernieire 
        i--;
            if(i == 1){ // et si j'atteins la derniere ligne....
                $(this).hide();//  je cache le bouton enlever
           }
        }
    });
    
    // TOGGLE EFFETS
    $('#theToggle').click(function(){
       $('#maBoite').toggle(2000); // je cible ma boite $('maBoite') puis je lui attribue l'effet toggle .toggle(2000)apparait //             // disparait en glissé sur lui meme en lien avec mon css
     // $('#maBoite').toggleClass('bordure');//  ici je fais un effet de bordure noire qui apparait disparait en lien avec mon css
    });
    // je veux cibler tous les p (prarapgraphes)cad que je veux attribuer l'effet toggle à tous les pragapgrahes : $('#toggle p')puis je rajoute une fonction pour faire l'effet quand on  clique : .click(function()
    $('#toggle p').click(function(){ //  si je veux un effet au survol je mets hover à la place de click
      $(this).toggleClass('highlight'); //  je mets $(this) car je veux cibler juste celui sur lequel je clique puis : .toggleClass('highlight'); => je rajoute la toggleclass highlight : c'est à dire que l'effet highlight se fait quand je clique dessus et quand je reclick ca s'enlève
    });
   $('#toggle p').hover(function(){ 
       $('#maBoite').css('background-color','green'); 
    
   });
   // Agrandir ou diminuer la taille de la police
   $('button.taille').click(function(){  
   var os = $('#toggle p').css('font-size'); // os recupere la valeur par defaut du praragrahe 
   var number = parseFloat(os); // number recupere unisquement la partie chiffree 
   var uom = os.slice(-2);//  uom recuoere uniquement les deux derniers caracteres de la variable cad le px c'est pour ca qu'on ecrit -2 (si on avait ecrit 2 on aurait recupere les 2 premiers caracteres)
   if(this.id == 'pluspetit'){ //  si clik sur l'identifiant plus petit on on diminue le gtexte 
       number /= 1.4;
   }else{
       number *= 1.4; //  si clik sur l'identifiant plus grand on agrandit le text
   }
     console.log(number);
     $('#toggle p').css('font-size',number + uom);
   });
   
    // photos
    $('#photos nav li').click(function(){
       var numeroLigne = $(this).index();
       console.log(numeroLigne);
       $('#photos div img').hide();
       $('#photos div img').eq (numeroLigne).show(2000);  
    });

    
    
    
    
    //  pour retrouver tout ce qu'on a fait en cours sur jquery =>  https://github.com/erwantanguy/B1MDSDevFront  


});