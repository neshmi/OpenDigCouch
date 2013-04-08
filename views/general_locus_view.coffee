class OpenDig.GeneralLocusView extends Batman.View
  render: ->
    description = new OpenDig.Description
    descriptionFile = description.descriptionFile()
    locus = @context.get('locusData')
    node = $(@get('node'))
    for general_item in descriptionFile.general_information
      locus_data = locus[general_item.key]
      list_item = $("<dt class='text-success'>#{general_item.label}</dt><dd>#{locus_data}</dd>")
      node.append(list_item) if locus_data
    super