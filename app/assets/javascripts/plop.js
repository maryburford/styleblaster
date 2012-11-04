
var base_url = "http://s3.amazonaws.com/styleblaster/styleblaster/photos/original/";

function Plop (data){
  var base = this;
  base.data = data || {};

  base.id = base.data.id;
  base.score = base.data.score;
  base.image_url = base_url + data.photo_file_name.replace(/.png$/, ".jpg");

  var d = derail_date(data.created_at);
  base.day = d.getDate();
  base.month = month(d.getMonth());
    //putting in fix for hours, off by 1... -jk
  base.time = twelve(d.getHours()-1) + ":" + zero(d.getMinutes()) + " " + merid(d.getHours());

  base.preload = function(){
    var img = new Image();
    img.src = base.image_url;
  }

  base.destroy = function(){
    base.data = undefined;
    base = undefined;
  }
};
