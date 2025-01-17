[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)



 ghostsigns 
============





Layer showing disused signs on buildings






  - This layer is shown at zoomlevel **10** and higher
  - This layer will automatically load  [walls_and_buildings](./walls_and_buildings.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[0])



## Table of contents

1. [ Themes using this layer ](#-themes-using-this-layer-)
2. [ Basic tags for this layer ](#-basic-tags-for-this-layer-)
3. [ Supported attributes ](#-supported-attributes-)
  - [just_created](#just_created)
  - [historic](#historic)
  - [images](#images)
  - [name](#name)
  - [inscription](#inscription)
  - [brand](#brand)
  - [leftover-questions](#leftover-questions)
  - [lod](#lod)
  - [minimap](#minimap)
  - [last_edit](#last_edit)
  - [favourite_status](#favourite_status)
  - [qr_code](#qr_code)
  - [share](#share)
  - [all-tags](#all-tags)

 Themes using this layer 
-------------------------





  - [ghostsigns](https://mapcomplete.org/ghostsigns)




 Basic tags for this layer 
---------------------------



Elements must match **all** of the following expressions:

0. <a href='https://wiki.openstreetmap.org/wiki/Key:advertising' target='_blank'>advertising</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:advertising%3Dwall_painting' target='_blank'>wall_painting</a>
1. historic~.+

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22advertising%22%3D%22wall_painting%22%5D%5B%22historic%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/historic#values) [historic](https://wiki.openstreetmap.org/wiki/Key:historic) | Multiple choice | [advertising](https://wiki.openstreetmap.org/wiki/Tag:historic%3Dadvertising) [](https://wiki.openstreetmap.org/wiki/Tag:historic%3D)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/inscription#values) [inscription](https://wiki.openstreetmap.org/wiki/Key:inscription) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/brand#values) [brand](https://wiki.openstreetmap.org/wiki/Key:brand) | [string](../SpecialInputElements.md#string) | 




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  id~.+


This tagrendering is only visible in the popup if the following condition is met: `_last_edit:passed_time<300 & (_version_number= | <a href='https://wiki.openstreetmap.org/wiki/Key:_version_number' target='_blank'>_version_number</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:_version_number%3D1' target='_blank'>1</a>) & _backend~.+`

This tagrendering has labels  `added_by_default`



### historic 



The question is  *Is this a ghost sign?*





  - *This is a ghost sign*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:historic' target='_blank'>historic</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:historic%3Dadvertising' target='_blank'>advertising</a>
  - *This is not a ghost sign, answering this will hide the sign from the map*  corresponds with  historic=




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images

This tagrendering has no question and is thus read-only





### name 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `name~.+`



### inscription 



The question is  *What is the text on the sign?*

This rendering asks information about the property  [inscription](https://wiki.openstreetmap.org/wiki/Key:inscription) This is rendered with  `The text on the sign is: {inscription}`



### brand 



The question is  *For what business was this sign made?*

This rendering asks information about the property  [brand](https://wiki.openstreetmap.org/wiki/Key:brand) This is rendered with  `This sign was made for: {brand}`



### leftover-questions 



This tagrendering has no question and is thus read-only





### lod 



This tagrendering has no question and is thus read-only



This tagrendering has labels  `added_by_default`



### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only





### last_edit 



Gives some metainfo about the last edit and who did edit it - rendering only

This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `_last_edit:changeset~.+ & _last_edit:contributor~.+`

This tagrendering has labels  `added_by_default`



### favourite_status 



This tagrendering has no question and is thus read-only





### qr_code 



This tagrendering has no question and is thus read-only



This tagrendering has labels  `added_by_default`



### share 



This tagrendering has no question and is thus read-only



This tagrendering has labels  `added_by_default`



### all-tags 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/themes/ghostsigns/ghostsigns.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/themes/ghostsigns/ghostsigns.json)
