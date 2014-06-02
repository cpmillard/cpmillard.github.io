<script type="text/javascript">
  var $al = $('.accordion-list');
  $al.on('click', function(evt) {
    var $anchor = $(evt.target);
    if($anchor.is('a')) {
      evt.preventDefault();
      $anchor.next('p').slideToggle()
    }
  });
</script>