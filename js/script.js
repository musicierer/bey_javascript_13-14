'use strict';

$(function() {


  var preQuestions = [

    {
      question: 'Какая температуа кипения воды?',
      answers: ['60 градусов', '80 градусов', '100 градусов'],
      correctAnswer: 3
    },

    {
      question: 'Сколько метров в километре?',
      answers: ['100 метров', '1000 метров', '500 метров'],
      correctAnswer: 2
    },

    {
      question: 'В каком объекте хранятся все jQuery-функции?',
      answers: ['jQuery.fn', 'jQuery.prototype', 'Query.function'],
      correctAnswer: 1
    }
  ];

  localStorage.setItem('preQuestions', JSON.stringify(preQuestions));

  var strQuestions = localStorage.getItem('preQuestions');

  var questions = JSON.parse(strQuestions);

  var test = $('#test').html();
  var testContent = tmpl(test, {
    data: questions
  });

  $('.questions__block').append(testContent);

  var $modal;
  var $overlay;

  function showModal(){

    $modal = $('<div class="modal"><p class="results"></p></div>');
    $overlay = $('<div class="overlay"></div>');
    
    $overlay.on('click', hideModal);

    $('body').append($overlay)
    $('body').append($modal)

  };

  function hideModal(){
    $modal.remove();
    $overlay.remove();
  };

  $('.test__button').on('click', showModal);

  $(".test__button").on("click", function() {
    var $result = true;
    var indx = preQuestions.map(function(el, i) {
        return el.correctAnswer - 1 + i * 3
    });
    $("input").each(function(i) {
        if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) $result = false
    });
    if ($result) $(".results").html("Вы верно ответили на все вопросы");
    else {
        $(".results").html("В ответах допущена ошибка");
        $("input").prop("checked", false)
    }
});
 });