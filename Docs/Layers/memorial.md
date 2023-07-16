[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)

 memorial 
==========



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/memorial/plaque.svg' height="100px"> 

Layer showing memorial plaques, based upon a unofficial theme. Can be expanded to have multiple types of memorials later on






  - This layer is shown at zoomlevel **0** and higher
  - Not visible in the layer selection by default. If you want to make this layer toggable, override `name`


This is a special layer - data is not sourced from OpenStreetMap



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/inscription#values) [inscription](https://wiki.openstreetmap.org/wiki/Key:inscription) | [text](../SpecialInputElements.md#text) | 




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  `id~.+`


This tagrendering is only visible in the popup if the following condition is met: `_backend~.+&_last_edit:passed_time<300&|_version_number=1`



### inscription 



The question is  *What is the inscription of this plaque?*

This rendering asks information about the property  [inscription](https://wiki.openstreetmap.org/wiki/Key:inscription) 

This is rendered with  `The inscription on this plaque reads: <p><i>{inscription}<i></p>`





### leftover-questions 



This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only





### move-button 



This tagrendering has no question and is thus read-only





### delete-button 



This tagrendering has no question and is thus read-only





### last_edit 



Gives some metainfo about the last edit and who did edit it - rendering only

This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `_last_edit:contributor~.+&_last_edit:changeset~.+`



### all-tags 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/memorial/memorial.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/memorial/memorial.json)