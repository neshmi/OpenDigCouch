class OpenDig.LociController extends OpenDig.ApplicationController
  routingKey: 'loci'

  show: (params) ->
    response = null
    @locus_param = params.locus_id

    $.ajax
      type: "GET",
      async: false,
      url: "_view/get_locus?key=\"#{@locus_param}\""
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows[0]

    @locus = response.value
    @set 'locusData', @locus

    @render source:"loci/show.html?#{(new Date).getTime()}"