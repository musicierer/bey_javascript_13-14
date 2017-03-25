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
		variantSecond:'1000 метров',
		variantThird: '500 метров'
	},
	{
		questionFirst: 'В каком объекте хранятся все jQuery-функции?',
		variantFirst: 'jQuery.fn',
		variantSecond: ' jQuery.prototype',
		variantThird: 'jQuery.function'
	},
]; 

right = {
		variantThird: '100 градусов',
		variantSecond:'1000 метров',
		variantFirst: 'jQuery.fn'
	};

localStorage.setItem('test', JSON.stringify(question));

var get = localStorage.getItem('test');

var gen1 = JSON.parse(get);



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


for(i = 0; i<right.length; i++);
	if($('right[i]').prop('checked')) {
		 alert('Правильный ответ');
} else {
	alert('Ответ неверный');
};


});

});

