var question = {
		questionFirst: 'Какая температуа кипения воды?',
		variantFirst: '60 градусов',
		variantSecond: '80 градусов',
		variantThird: '100 градусов'
	}; 

localStorage.setItem('test', JSON.stringify(question));

var get = localStorage.getItem('test');

$(function() {

	var html = $('#test').html();
	var question = {
		questionFirst: 'Какая температуа кипения воды?',
		variantFirst: '60 градусов',
		variantSecond: '80 градусов',
		variantThird: '100 градусов'
	};

	var content = tmpl(html, question);

	$('body').append(content);

});

$(function(){

var $but = $('button');

$but.on('click', function() {

var variantThird = ('#variantThird');
var variantSecond = ('#variantSecond');
var variantFirst = ('#variantFirst');

if($('#variantThird').prop('checked')) 
  alert('Правильный ответ');
  else if ($('#variantSecond').prop('checked'))
  alert('Ответ неверный');
  else if ($('#variantFirst').prop('checked'))
  alert('Ответ неверный');

});

});

