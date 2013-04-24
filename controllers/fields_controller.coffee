class OpenDig.FieldsController extends OpenDig.ApplicationController
  routingKey: 'fields'

  index: (params) ->
    response = null
    $.ajax
      type: "GET",
      url: "_view/all_fields?group=true",
      datatype: 'json',
      async: false,
      cache: false,
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows
    @fields = response

  show: (params) ->
    response = null
    @field = params.id
    @field_label = "Field #{@field} - Squares"
    startkey = 'startkey=["' + @field + '"]'
    endkey = 'endkey=["' + @field + "\\ufff0" + '"]'
    $.ajax
      type: "GET",
      async: false,
      cache: false,
      url: '_view/by_field?group=true&' + startkey + '&' + endkey,
      success: (data, textStatus, jqHXR) ->
        response = JSON.parse(data).rows
    @squares = response
    @render source:"fields/show.html?#{(new Date).getTime()}"