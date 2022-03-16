# Au Sass


Basic Intro stuff....

```css
@use "au-sass" as au
```

## Features:

| Function          | Description |
| ---------------   | ----------- |
| au.size()         | Calculates the golden ratio porportion going top-down ( and negative going bottom-up ). |
| au.chain()      | Extends au-size function with ability to pass multiple proportions going top-down.  
| au.flex-width()  | Calculates the percentage width of the flex item using number of columns and proportion of the column-gaps.  
| au.flex-gap()  | Calculates the percentage width of the flex column gap using number of columns and width of a flex item. |


| Mixin           | Description |
| ----------------  | ----------- |
| goldBox() | Sets width and height of a block according to golden ratio |
| goldSplit() | Splits a block element by sizing it's children according to the golden ratio. |
| goldFlex() | Applies a set of css proporties for creation of wrapped flex grid. |
## Functions:

### au-size();

```css
au.size($basis, $level);
```
Calculates the golden ratio porportion going top-down. Level represents the next proportional square element. Use enegative values to go bottom-up.

### au-chain();
```css
au.chain($basis, $levels...) 
```
Extends au-size function with ability to pass multiple proportions going top-down. 


### au-flex-width();
```css
au.flex-width($track-count, $col-gap-level)
```
Calculates the percentage width of the flex item using number of columns and proportion of the column-gaps.

### au-flex-gap();
```css
au.flex-gap($track-count, $col-gap-level)
```
Calculates the percentage width of the flex column gap using number of columns and width of a flex item.


## Mixins:

### goldBox();

```css
goldBox($basis, $proportion, $level);
```
Is used to size the box using golden ratio proportions. Has two modes: responsive and fixed.
Responsive mode requires parent with golden ratio proportions to size corectly. Fixed is created by passing the size via $basis argument. Choose the desired relation between short and long segment along main($basis) or cross(normal) axis.

> $responsive: _"responsive" or size._

> $proportion: _"main-short" or "main-long" or "cross-short" or "cross-long"_

> $level: _integer representing the golden ratio steps (top-down)_

### goldSplit();
```css
goldSplit($add-flex, $proportion, $level);
```
Splits the parent in two by setting dimensions of the first and the last child using golden ratio porportions. Works similar to goldBox() mixin except it sets properties for the other section as well.
Setting $addFlex to "flex" is necessary for cross division. Tip: When disabling use "no-flex" for better taxonomy.

> $add-flex: _"flex" or "no-flex"._

> $proportion: _"main-short" or "main-long" or "cross-short" or "cross-long"_

> $level: _integer representing the golden ratio steps (top-down)_

### goldFlex();
```css
goldFlex($track-count, $height-level, $col-gap-level, $row-gap-level)
```
Applies a set of css properties for the creation of a wrapped flex grid. $height-level is ratio derived value from percentage value of flex item width, so needles to say it will NOT work well outside of golden container. For elongation due to the wrapping better use overflow: hidden; dough - height of the parent flex will be used to determine $height-level and $row-gap level - messy busines indeed if you do not plan to use golden container. ( _For sizing colums responsively use helper functions au-flex-width() and au-flex-gap()_ ).

> $track-count: _number of tracks/colums_

> $height-level: _height proportion integer representing the golden ratio steps (top-down)_

> $col-gap-level: _"none" or horizontal gap proportion integer representing the golden ratio steps (top-down)_

> $row-gap-level: _"none" or verical gap proportion integer representing the golden ratio steps (top-down) relating to $col-gap-level_
