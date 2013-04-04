class OpenDig.LociController extends OpenDig.ApplicationController
  routingKey: 'loci'

  show: (params) ->
    response = null
    description_json = null
    @locus_param = params.locus_id
    $.ajax
      type: "GET",
      async: false,
      url: "resources/descriptions.json"
      success: (data, textStatus, jqHXR) ->
        description_json = data
    $.ajax
      type: "GET",
      async: false,
      url: "_view/get_locus?key=\"#{@locus_param}\""
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows[0]
    console.log description_json.description_types[response.value.locus_type]
    @locus = response.value
    @render source:"loci/show.html?#{(new Date).getTime()}"
