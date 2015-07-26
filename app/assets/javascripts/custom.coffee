$ ->
  $mainNav = $('.navbar-nav')
  $mainNav.append "<li id='magic-line'></li>"
  $magicLine = $('#magic-line')
  $magicLine.width($('.current_item').width()).css('left', $('.current_item a').position().left).data('origLeft', $magicLine.position().left).data 'origWidth', $magicLine.width()
  $('.navbar-nav li a').hover (->
    $el = $(this)
    leftPos = $el.position().left
    newWidth = $el.parent().width()
    $magicLine.stop().animate
      left: leftPos
      width: newWidth
    return
  ), ->
    $magicLine.stop().animate
      left: $magicLine.data('origLeft')
      width: $magicLine.data('origWidth')
    return