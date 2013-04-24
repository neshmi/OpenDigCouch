(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OpenDig.DescriptionView = (function(_super) {
    __extends(DescriptionView, _super);

    function DescriptionView() {
      _ref = DescriptionView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DescriptionView.prototype.render = function() {
      var description, descriptionFile, descriptionType, div, item, item_value, key, list, list_item, locus, node, post_div, value, _i, _len, _ref1, _ref2;

      description = new OpenDig.Description;
      descriptionFile = description.descriptionFile();
      locus = this.context.get('locusData');
      node = $(this.get('node'));
      descriptionType = descriptionFile.description_types[locus.locus_type];
      _ref1 = descriptionFile[descriptionType];
      for (key in _ref1) {
        value = _ref1[key];
        post_div = false;
        div = $("<div id='" + key + "' class='row-float'><h4 class='text-info'>" + value[0] + "</h4></div>");
        list = $("<dl class='dl-horizontal span11 offset1'></dl>");
        div.append(list);
        _ref2 = value[1];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          item = _ref2[_i];
          item_value = locus[descriptionType][item.key];
          if (item_value != null) {
            list_item = $("<dt class='text-success'>" + item.label + "</dt><dd>" + item_value + "</dd>");
            list.append(list_item);
            post_div = true;
          }
        }
        if (post_div === true) {
          node.append(div);
        }
      }
      return DescriptionView.__super__.render.apply(this, arguments);
    };

    return DescriptionView;

  })(Batman.View);

}).call(this);
