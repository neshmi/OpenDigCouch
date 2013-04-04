class OpenDig.ApplicationController extends Batman.Controller
  # Add filters or functions you would like all your controllers to inherit to this controller.
  if "_design" in document.location.pathname.split("/")
    Batman.config.viewPrefix = "#{document.location.pathname.split('/')[1]}/_design/umayri_couch/views"