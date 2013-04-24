class OpenDig.PhotoView extends Batman.View
  render: ->
    super
    node = $(@get('node'))
    number = @context.get('photo.number')
    subject = @context.get('photo.subject')

    media_server = @context.get('media_server')
    site = @context.get('site')
    $.ajax
      type: "GET"
      dataType: "jsonp"
      url: "#{media_server}/api/v1/#{site}/#{number}"
      success: (data, textStatus, jqHXR) ->
        if data.error?
          image = $('<img>').attr("src","/img/no_image.png").addClass("img-polaroid")
          node.find(".photo-loading").hide()
          node.prepend(image)
        else
          results = data
          photo_link = $('<a>').addClass('fancybox').attr("rel", "locusGallery").attr("href","#{media_server}#{results.styles.medium}").attr("title", "#{number}: #{subject}").html("<img class='img-polaroid' src='#{media_server}#{results.styles.thumbnail}' />")
          node.find(".photo-loading").hide()
          node.prepend(photo_link)
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "uh ohs! something went really rong with photo #{number}"

    $(".fancybox").fancybox
      openEffect: "none"
      closeEffect: "none"
      helpers:
        title: {
          type: 'outside'
        }
    





