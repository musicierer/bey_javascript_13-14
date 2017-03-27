var question = [
	{
		 question: 'Какая температуа кипения воды?',
    variants: [
      '60 градусов',
      '80 градусов',
      '100 градусов'
    ],

    correct: 2

	},

	{
		question: 'Сколько метров в километре?',
	variants: [
      '100 метров',
      '1000 метров',
	  '500 метров'
    ],

    correct: 1

	},

	{
		question: 'В каком объекте хранятся все jQuery-функции?',
	variants: [
      'jQuery.fn',
	  'jQuery.prototype',
	  'jQuery.function'
    ],

	correct: 0

	},
]; 

localStorage.setItem('test', JSON.stringify(question));

var get = localStorage.getItem('test');

var gen1 = JSON.parse(get);



$(function() {

	var html = $('#test').html();
	var question = [
	{
		 question: 'Какая температуа кипения воды?',
    variants: [
      '60 градусов',
      '80 градусов',
      '100 градусов'
    ],

    correct: 2

	},

	{
		question: 'Сколько метров в километре?',
	variants: [
      '100 метров',
      '1000 метров',
	  '500 метров'
    ],

    correct: 1

	},

	{
		question: 'В каком объекте хранятся все jQuery-функции?',
	variants: [
      'jQuery.fn',
	  'jQuery.prototype',
	  'jQuery.function'
    ],

	correct: 0

	},
]; 

	var content = tmpl(html, {
		data: question
	});

	$('body').append(content);

});

// $(function(){

// var $but = $('button');

// $but.on('click', function() {


// for(i = 0; i<right.length; i++);
// 	if($('right[i]').prop('checked')) {
// 		 alert('Правильный ответ');
// } else {
// 	alert('Ответ неверный');
// };


// });

// });

