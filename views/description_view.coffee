class OpenDig.DescriptionView extends Batman.View
  render: ->
    description = new OpenDig.Description
    descriptionFile = description.descriptionFile()
    locus = @context.get('locusData')
    node = $(@get('node'))
    descriptionType = descriptionFile.description_types[locus.locus_type]
    # parse through description file
    for key, value of descriptionFile[descriptionType]
      post_div = false
      div =  $("<div id='#{key}' class='row-float'><h4 class='text-info'>#{value[0]}</h4></div>")
      list = $("<dl class='dl-horizontal span11 offset1'></dl>")
      div.append(list)
      for item in value[1]
        item_value = locus[descriptionType][item.key]
        if item_value?
          list_item = $("<dt class='text-success'>#{item.label}</dt><dd>#{item_value}</dd>")
          list.append(list_item)
          post_div = true
      node.append(div) if post_div == true
    super
