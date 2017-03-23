var question = [
	{
		questionFirst: 'Какая температуа кипения воды?',
		variantFirst: '60 градусов',
		variantSecond: '80 градусов',
		variantThird: '100 градусов'
	},
	{
		questionTwo: 'Сколько метров в километре?',
		variantFirst: '100 метров',
		variantSecond: '500 метров',
		variantThird: '1000 метров'
	},
	{
		questionThree: 'Каким образом шаблон помещается в HTML документ?',
		variantFirst: 'Шаблон размещают в любом теге',
		variantSecond: 'Шаблон размещают в теге <script> с нестандартным атрибутом type',
		variantThird: 'Шаблон размещают в HTML документе как есть, не оборачивая тегом'
	}
]; 

localStorage.setItem('test', JSON.stringify(question));

var get = localStorage.getItem('test');

var answer ={

};

$(function() {

	var html = $('#test').html();
	var question = [
	{
		questionFirst: 'Какая температуа кипения воды?',
		variantFirst: '60 градусов',
		variantSecond: '80 градусов',
		variantThird: '100 градусов'
	},
	{
		questionFirst: 'Сколько метров в километре?',
		variantFirst: '100 метров',
		variantSecond: '500 метров',
		variantThird: '1000 метров'
	},
	{
		questionFirst: 'В каком объекте хранятся все jQuery-функции?',
		variantFirst: 'jQuery.fn',
		variantSecond: ' jQuery.prototype',
		variantThird: 'jQuery.function'
	}
]; 

	var content = tmpl(html, {
		data: question
	});

	$('body').append(content);

});

$(function(){

var $but = $('button');

$but.on('click', function() {


if($('#variantThird').prop('checked')) 
  alert('Правильный ответ');
  else if ($('#variantSecond').prop('checked'))
  alert('Ответ неверный');
  else if ($('#variantFirst').prop('checked'))
  alert('Ответ неверный');

});

});

