class OpenDig.LociController extends OpenDig.ApplicationController
  routingKey: 'loci'

  show: (params) ->
    @locus = null
    response = null
    @locus_param = params.locus_id

    $.ajax
      type: "GET",
      async: false,
      cache: false,
      url: "_view/get_locus?key=\"#{@locus_param}\""
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows
    @locus_results = response
    @set 'locusData', @locus_results[0].value

    @render source:"loci/show.html?#{(new Date).getTime()}"