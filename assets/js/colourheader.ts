/// <reference path="typings/jquery/jquery.d.ts" />

/*
Class used to set background colour of an element
based on the dominant colour of an image
*/
class ColourHelper{
  private color:any;

/**
  With a given img element and element to set background
  for, the backgroud colour will be set
 * @param img JQuery img element to extract colour from
 * @param element JQuery element to apply background to
**/
  SetBackgroundColour(imgElement:JQuery,
  element:JQuery){

    var img = imgElement[0];

    if(img === undefined)
      return false;

    this.SetColour(img);

    element.css("background-color","rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")");
  }

  /**
  Sets the text colour white/black based on the contrast
  of the background colour
   * @param backgroundElement JQuery element to extract bacgkround from
   * @param element JQuery element to set text colour
  */
  SetTextColour(backgroundElement:JQuery,
    element:JQuery){

    if($(backgroundElement.length) == 0)
      return null;

    console.log($(backgroundElement).css('backgroundColor'));
    var rgb = $(backgroundElement).css('backgroundColor').match(/\d+/g);
    var yiq = (parseInt(rgb[0])+parseInt(rgb[1])+parseInt(rgb[2]))/1000;
    var contrastColour = (yiq >= .5) ? 'black' : 'white';
    console.log(yiq);
    element.css("color",contrastColour);

  }

  private SetColour(img:JQuery){
    var colourThief = new ColorThief();
    this.color = colourThief.getColor($(img)[0]);
  }
}
