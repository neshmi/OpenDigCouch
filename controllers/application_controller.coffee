class OpenDig.ApplicationController extends Batman.Controller
  clearAllYields: true
  Batman.DOM.Yield.clearAllStale()
  
  # Add filters or functions you would like all your controllers to inherit to this controller.
  if "_design" in document.location.pathname.split("/")
    Batman.config.viewPrefix = "#{document.location.pathname.split('/')[1]}/_design/opendig_couch/views"
