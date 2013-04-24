class OpenDig extends Batman.App
  @set 'media_server', 'http://media.opendig.org'
  @set 'site', 'umayri'
  # Set the root route to ExamplesController#index.
  @root 'fields#index'
  @resources 'fields'
  @resources 'squares'
  @route 'loci/:locus_id', 'loci#show'
  
# Make OpenDig available in the global namespace so it can be used
# as a namespace and bound to in views.
window.OpenDig = OpenDig
 