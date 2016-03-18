var $input = $('#todo-input');
var $lsit = $('.list');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $input.val('');
  $list.append($li);
});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('line');
});
