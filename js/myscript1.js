
$(function() {  
  // фильтры 
// $(':radio').fadeOut(3000);
// $(':radio').fadeIn(3000);
 // может быть  $('#my_form :radio').fadeOut(3000);
// $(':checkbox').fadeOut(3000); :file,  :button, :submit, :reset, :text, :password, :image и если все :input
//$('#my_form :radio:checked').fadeOut(3000);  // обязательно без пробела :radio:checked
//$('#my_form #motoSelect :selected').fadeOut(3000); 

$('#checkButton').click(function(){
  alert( $('#mytextarea').val());  // получаю значение текстовой области
  alert($('#my_form #motoSelect :selected').val()); // указывает номер в списке 
 $(':checkbox:checked').each(function(){   //  цикл по всем chexkbox выдает значения параметра value
 alert($(this).val());       
}); 
 // можно установить значение   $('#mytextarea').val('мое значение');
});

 $('#my_form').submit(function(eventObject){
   if( $('#email').val() ==""){
    eventObject.preventDefault();
    alert('Вы не заполнили поле email');
   }
 });

/*  $('#email').focus(function(){
    $(this).css({'border' : '2px solid green',
    'background-color' : '#f6f6f6'
                });
});   */
$('#email').focus(function(){
    $(this).addClass('onFocus'); 
}).blur(function(){                        // снимает выделениеб убироет фокусировку
    $(this).removeClass('onFocus');
});

$('#motoSelect').change(function(){         // работа по событию change
 var maChose= $('#motoSelect :selected').val();
 if (maChose==1) {
    $('#daysSelect').html('	<option value="1">1</option><option value="2">2</option>');
 }
else if(maChose==2){
   $('#daysSelect').html('	<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>'); 
} 
else if(maChose==3){
   $('#daysSelect').html('	<option value="1">1</option>');   
                   }
    else {
     $('#daysSelect').html('	<option value="1">1</option><option value="2">2</option><option value="3">3</option>');     
    }               
});

$('#motoSelect').change(function(){
    var maChose= $('#motoSelect :selected').val();
   if(maChose==4) {
    $('#bag').attr('disabled','disabled');
    $('label[for=bag]').css({'color':'#cc0000'});
   } else {
     $('#bag').attr('disabled',false);
     $('label[for=bag]').css({'color':'#646464'});
   }
});
// может быть
//$('#bag, label[for=bag]').hide(); else $('#bag, label[for=bag]').show();










}); // конец ready