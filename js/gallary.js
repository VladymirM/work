$(function() {  
   
 // События

 // mouseover
 //mouseout 
 //click
 //dblclick
 //mousemove
 //mousedown
 //mouseup
 
 // События формы
 //submit
 //focus
 //blur -поле теряет фокус
// change любое изменение состояния элемента
//reset
//keypress
//keyup
//keydown

// События окна браузера
//load
//resize
//scroll
//unload

 // традиционный javascript
 //______________________________________________
/*var myMoto=document.getElementById('img_1');
function motoClick()  {
alert('ШИРИНА картинки : ' + myMoto.width); 
 }
myMoto.onclick=motoClick; 
 //______________________________________________
*/ 
 // JQUERY
 
 $('#forheader img').click(function(){
    alert('Вы кликнули по шапке');
 });
/* $(window).scroll(function(){
    alert('произошлоа прокрутка');
 });
 */
// $('#my_form').hide();
 $('#div_for_img img').click(function(eventObject){ // выбираем объект по click, сохраняем clone и присоединяем к концу #forresults
   var myObject=eventObject.target;  
 
  alert('объект отреагировал на клик: '+ myObject.id );
  var moto= $(this).clone();
  $('#forresults').append(moto);
  });
 
 // может быть запрет на выполнение действий - не даст открыть сайт 
//  $('#superlink').click(function(eventObject){
//   eventObject.preventDefault() ; // может быть return false;
//  });
 
   // hover -два события в одном - наведение и увод мыши должна быть подсветка
/*  var tableStr=$('#moto_table tr');
  tableStr.mouseover(function(){
    $(this).addClass('svet');
  });
   tableStr.mouseout(function(){
    $(this).removeClass('svet');
  });
 */ 
 $('#moto_table tr').hover(function(){
    $(this).addClass('svet');
 }, function(){
  $(this). removeClass('svet');
 });



$('#formHide11').toggle(function(){
  $('#my_form').fadeOut(2000);  
   $(this).text('Развернуть?'); 
},  function(){
   $('#my_form').fadeIn(2000);  
   $(this).text('Свернуть ?');  
});
 
 $('#small a').click(function(eventObject){
     $('#big img').hide().attr('src',$(this).attr('href'));   // прячет картинку big img,и ее src меняет: attr меняет ссылку src на $(this).attr('href')
     $('#big img').load(function(){                          // ждем загрузку картинки и показываем ее
     $(this).fadeIn(2000); 
                                 });  
 eventObject.preventDefault();                // ссылка не должна открываться в новом окне
                                         });
 
 
 
 
 
}); // конец ready