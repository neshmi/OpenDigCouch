class OpenDig.SquaresController extends OpenDig.ApplicationController
  routingKey: 'squares'

  show: (params) ->
    response = null
    @square = params.id
    @square_label = "Square #{@square} - Loci"
    startkey = 'startkey=["' + @square + '"]'
    endkey = 'endkey=["' + @square + "\\ufff0" + '"]'
    $.ajax
      type: "GET",
      async: false,
      cache: false,
      url: '_view/by_square?group=true&' + startkey + '&' + endkey,
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows
    @loci = response
    @render source:"squares/show.html?#{(new Date).getTime()}"