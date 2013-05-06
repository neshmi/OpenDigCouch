class OpenDig.Description extends Batman.Model
  descriptionFile: ->
    response = null
    $.ajax
      type: "GET"
      url: "resources/descriptions.json"
      datatype: 'json'
      async: false
      success: (data, textStatus, jqHXR) ->
        response = data
    return response