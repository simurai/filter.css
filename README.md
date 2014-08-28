filter.css
==========

A couple CSS filter combinations to get you started.

![ScreenShot](ScreenShot.png)

> See [live demo](http://simurai.com/filter.css/)

## Usage

1. Add the [filter.css](https://github.com/simurai/filter.css/blob/master/filter.css) file to your project.
2. Link to the `filter.css` file.

  ```html
  <!-- In your <head> -->
  <link rel="stylesheet" href="filter.css">
  ```

3. Use a `data-filter` attribute in your markup to add a filter.

  ```html
  <!-- In your <body> -->
  <div data-filter="Eureka"></div>
  ```

  List of available `data-filter` names.
  
  - Eureka
  - Karl
  - Rocky
  - London
  - FlipFlop
  - Introvert
  - Butterfly
  - Gold
  - Copper
  - Silver
  - Night
  - LoFi


Or you can just grab __individual filter__ styles on the [demo page](http://simurai.com/filter.css/) and use it in your own CSS file.

Also feel free to __tweak the numbers__ to better match your image/content.


## Browser support

The filters are currently just `-webkit` prefixed. Better support will be added. Firefox seems [close](https://bugzilla.mozilla.org/show_bug.cgi?id=1057180).
