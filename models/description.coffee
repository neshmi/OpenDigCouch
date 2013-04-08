class OpenDig.Description extends Batman.Model
  myMethod: ->
    return "testing"

  descriptionFile: ->
    response = null
    $.ajax
      type: "GET"
      url: "resources/descriptions.json"
      datatype: 'json'
      async: false
      cache: false
      success: (data, textStatus, jqHXR) ->
        response = data
    return response