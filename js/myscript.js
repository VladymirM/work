//var allImg=document.getElementsByTagName('img');
//alert("Всего картинок: "+ allImg.length);
/*var moto=document.getElementById('img_1');
alert(moto.alt);
var myDiv=document.getElementById('div_for_img');
var childDiv=myDiv.childNodes;
for( var i=0; i<childDiv.length; i++){
    alert(childDiv[i].alt);
}
var parentDiv=myDiv.parentNode;
alert(parentDiv.id);
*/
// специальные свойства

//var mainHeader=document.getElementById('main_h1');
//alert(mainHeader.innerText);
//alert(mainHeader.textContent);  // для fire fox
//var myDiv=document.getElementById('div_for_img');
//myDiv.innerHTML="<p><strong>Вставка свойством innerHTML</strong></p>"; // Можно менять свойства
//alert(myDiv.innerHTML);
/*$('p');  // найти все обзацы то же document.getElementById('p');
$('#main_h1'); // выборка по идентификатору $('.maindiv')
$('p strong');
$('#div_for_img img'); // все картинки внутри тэга div_for_img
$('#main_h1 + p'); // выбор следующего тэга за #main_h1
$('#div_for_img > img'); // выдаст все дочерние тэги div_for_img
$('img[width=200]'); // выберет все картинки на странице с шириной 200
$('a[href ^=http'); // все ссылки на сайты выбрать
$('img[src $= .jpg]');  // [] - ссылка на атрибут. Здесь- все ссылки на файлы jpg
$('img[src *=moto]'); // * - в любом месте
// фильтры
$('#moto_table tr:odd'); // even -четные
$('img:not(#div_for_img img)'); // выбрать все картинки, кроме div_for_img img
$('div:has(fieldset)'); // выбрать все блоки div, которые содержат тэги fieldset
$('p:contains(мотоцикл)'); // выбор абзацев которые содержат слово мотоцикл
$('#div_for_img img:first'); // выбрать первую картинку
$('#div_for_img img:last'); // выбрать последнюю картинку
$('div:hidden');      // выбрать все скрытые блоки на странице
$('div:visibility');
*/

//$(document).ready(function(){   // конструкция ждет загрузки всего длкумента
// либо
$(function() {  
   
   
    var myLogo;
     myLogo = $('#forheader img');
// myLogo.hide(3000);

// myLogo.show(3000);
  // все скрипты пишутся здесь  
 //var textH1=$('#main_h1').text() ;  
 //alert(textH1);   
 // можно изменить текст
  var textH1=$('#main_h1').text('Текст изменен с помощью jquery');  
// alert(textH1); 
// цепные функции
 myLogo.hide(3000).show(3000);
//var divW=$('#div_for_img').width(820).height(220).hide(3000).show(3000).width(850).hide(3000).show(3000);
//$('img[src*=logo]').fadeOut(4000).fadeIn(4000);   // плавное исчезновение и восстановление картинки
//alert(divW);
alert($('#moto_models').html());
$('img[src*=logo]').fadeTo(4000,0.2).fadeTo(4000,1); // поменять прозрачность за 4 секунды
$('img[src*=logo]').slideUp(4000).slideDown(4000);
var fooHeight=$('img[src*=footer]').attr('height');
$('#forresults').text('высота футера '+ fooHeight);
$('#motoSelect').attr('size',4);  // изменение параматра
$('#moto_table').removeAttr('title').attr('title','Новое значение');  // удалить атрибут
$('#div_for_img + p').addClass('new');  // добавление класса и можно удалить класс removeClass('имя класса');
  
  var textSize=$('#main_h1').css('font-size');   // получение свойства элемента css
  alert(textSize);
  $('#main_h1').css('color','#cc0000');   // изменение цвета на красный
 //  $('#main_h1').css('color','#cc0000').css('font-size','19px'); - можно  так и можно иначе -
 $('#main_h1').css({
                    'color':'#cc0000',
                    'font-size':'21px'
                    });  // метод называется литерал объекта
  
  
  $('#div_for_img').css({'border':'2px solid #cc0000'}).animate({'width':'450px'},8000, function() {
    alert('все готово -сузилось!');
      }); // анимация и демонстрация работы функции в animate необходимо писать не через - paddingTop вторая часть с большой буквы
  
  $('#div_for_img').css({'border':'2px solid #cc0000'}).animate({'width':'820px'},8000, function() {
    alert('все готово -расширилось!');
      });
  
  
      
  // var myDiv1= $('#div_for_img').css({'border':'2px solid #cc0000'});  
  //  myDiv1.before('<p> Данный абзац вставлен методом before</p>');
  //  myDiv1.after('<p> Данный абзац вставлен методом after</p>');   
  //    myDiv1.prepend('<p> Данный абзац вставлен методом prepend</p>');  
  //      myDiv1.append('<p> Данный абзац вставлен методом append</p>');  
   //   $('img').each(function(){        // для каждого элемента - картинка выполнить функцию
  //     if($(this).width()>400 ) $(this).fadeOut(4000);   // this - теккущий элемент 'img'
  //    });
 //  var myDiv2=  $('div').size();
   
  //  alert(myDiv2);
 //   var myDiv3=$('div').get(0);
  //   alert(myDiv3);   
 //   var myDiv4=$('#div_for_img').clone();   //  клонирование объектов
  //  $('#my_form').after(myDiv4); 
    
  //  var myForm=$('#my_form').remove(); // удаляет оюъект и запоминает его в myForm, затем восстанавливает его после #moto_table
//  $('#moto_table').before( myForm);
  
  //$('img[width=200], a[href*=document]').fadeOut(5000);  // в одном выражении несколько элементов перечислены через запятую
 // $('img[alt]').fadeOut(5000);       // выбрать все картинки где есть атрибут, в данном случае alt
 
  
}); // конец ready