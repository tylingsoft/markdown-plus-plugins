$('#toggle-preview').after(' <i class="dividor">|</i> <i title="Word count" class="fa fa-file-word-o" id="word-count"></i>');
$('#word-count').click(function() {
  var content = editor.session.getValue();
  var c_count = content.length;
  var l_count = content.split('\n').length;
  var w_count = content.split(/\s+/).length;
  alert('line count: ' + l_count + '\nword count: ' + w_count + '\ncharacter count: ' + c_count);
});
