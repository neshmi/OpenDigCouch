(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.PhotoView = (function(_super) {
    __extends(PhotoView, _super);

    function PhotoView() {
      _ref = PhotoView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PhotoView.prototype.render = function() {
      var media_server, node, number, site, subject;

      PhotoView.__super__.render.apply(this, arguments);
      node = $(this.get('node'));
      number = this.context.get('photo.number');
      subject = this.context.get('photo.subject');
      media_server = this.context.get('media_server');
      site = this.context.get('site');
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "" + media_server + "/api/v1/" + site + "/" + number,
        success: function(data, textStatus, jqHXR) {
          var image, photo_link, results;

          if (data.error != null) {
            image = $('<img>').attr("src", "/img/no_image.png").addClass("img-polaroid");
            node.find(".photo-loading").hide();
            return node.prepend(image);
          } else {
            results = data;
            photo_link = $('<a>').addClass('fancybox').attr("rel", "locusGallery").attr("href", "" + media_server + results.styles.medium).attr("title", "" + number + ": " + subject).html("<img class='img-polaroid' src='" + media_server + results.styles.thumbnail + "' />");
            node.find(".photo-loading").hide();
            return node.prepend(photo_link);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log("uh ohs! something went really rong with photo " + number);
        }
      });
      return $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        helpers: {
          title: {
            type: 'outside'
          }
        }
      });
    };

    return PhotoView;

  })(Batman.View);

}).call(this);
