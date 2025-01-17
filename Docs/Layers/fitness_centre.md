[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)



 fitness_centre 
================





Layer showing fitness centres






  - This layer is shown at zoomlevel **12** and higher



## Table of contents

1. [ Themes using this layer ](#-themes-using-this-layer-)
2. [ Basic tags for this layer ](#-basic-tags-for-this-layer-)
3. [ Supported attributes ](#-supported-attributes-)
  - [just_created](#just_created)
  - [name](#name)
  - [images](#images)
  - [phone](#phone)
  - [email](#email)
  - [website](#website)
  - [opening_hours](#opening_hours)
  - [wheelchair-access](#wheelchair-access)
  - [repeated](#repeated)
  - [single_level](#single_level)
  - [reviews](#reviews)
  - [leftover-questions](#leftover-questions)
  - [lod](#lod)
  - [minimap](#minimap)
  - [last_edit](#last_edit)
  - [favourite_status](#favourite_status)
  - [qr_code](#qr_code)
  - [share](#share)
  - [all-tags](#all-tags)
    + [Filters](#filters)

 Themes using this layer 
-------------------------





  - [personal](https://mapcomplete.org/personal)
  - [sports](https://mapcomplete.org/sports)




 Basic tags for this layer 
---------------------------



Elements must match the expression **<a href='https://wiki.openstreetmap.org/wiki/Key:leisure' target='_blank'>leisure</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dfitness_centre' target='_blank'>fitness_centre</a>**

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22leisure%22%3D%22fitness_centre%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/website#values) [website](https://wiki.openstreetmap.org/wiki/Key:website) | [url](../SpecialInputElements.md#url) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/wheelchair#values) [wheelchair](https://wiki.openstreetmap.org/wiki/Key:wheelchair) | Multiple choice | [designated](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated) [yes](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited) [no](https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/level#values) [level](https://wiki.openstreetmap.org/wiki/Key:level) | [float](../SpecialInputElements.md#float) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1)




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  id~.+


This tagrendering is only visible in the popup if the following condition is met: `_last_edit:passed_time<300 & (_version_number= | <a href='https://wiki.openstreetmap.org/wiki/Key:_version_number' target='_blank'>_version_number</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:_version_number%3D1' target='_blank'>1</a>) & _backend~.+`

This tagrendering has labels  `added_by_default`



### name 



The question is  *What is the name of this fitness centre?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) This is rendered with  `This fitness centre is called {name}`



  - *This fitness centre has no name*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:noname' target='_blank'>noname</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:noname%3Dyes' target='_blank'>yes</a>




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images

This tagrendering has no question and is thus read-only





### phone 



The question is  *What is the phone number of {title()}?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) This is rendered with  `<a href='tel:{phone}'>{phone}</a>`



  - *<a href='tel:{contact:phone}'>{contact:phone}</a>*  corresponds with  contact:phone~.+
  - _This option cannot be chosen as answer_


This tagrendering has labels  `contact`



### email 



The question is  *What is the email address of {title()}?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) This is rendered with  `<a href='mailto:{email}' target='_blank' rel='noopener'>{email}</a>`



  - *<a href='mailto:{contact:email}' target='_blank' rel='noopener'>{contact:email}</a>*  corresponds with  contact:email~.+
  - _This option cannot be chosen as answer_
  - *<a href='mailto:{operator:email}' target='_blank' rel='noopener'>{operator:email}</a>*  corresponds with  operator:email~.+
  - _This option cannot be chosen as answer_


This tagrendering has labels  `contact`



### website 



The question is  *What is the website of {title()}?*

This rendering asks information about the property  [website](https://wiki.openstreetmap.org/wiki/Key:website) This is rendered with  `<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>`



  - *<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>*  corresponds with  contact:website~.+
  - _This option cannot be chosen as answer_


This tagrendering has labels  `contact`



### opening_hours 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`



  - *Marked as closed for an unspecified time*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:opening_hours' target='_blank'>opening_hours</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3Dclosed' target='_blank'>closed</a>
  - _This option cannot be chosen as answer_




### wheelchair-access 



The question is  *Is this place accessible with a wheelchair?*





  - *This place is specially adapted for wheelchair users*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Ddesignated' target='_blank'>designated</a>
  - *This place is easily reachable with a wheelchair*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dyes' target='_blank'>yes</a>
  - *It is possible to reach this place in a wheelchair, but it is not easy*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dlimited' target='_blank'>limited</a>
  - *This place is not reachable with a wheelchair*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:wheelchair' target='_blank'>wheelchair</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:wheelchair%3Dno' target='_blank'>no</a>




### repeated 



This tagrendering has no question and is thus read-only



This tagrendering is only visible in the popup if the following condition is met: `repeat_on~.+`

This tagrendering has labels  `level`



### single_level 



The question is  *On what level is this feature located?*

This rendering asks information about the property  [level](https://wiki.openstreetmap.org/wiki/Key:level) This is rendered with  `Located on the {level}th floor`



  - *Located underground*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:location' target='_blank'>location</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:location%3Dunderground' target='_blank'>underground</a>
  - _This option cannot be chosen as answer_
  - *Located on the ground floor*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D0' target='_blank'>0</a>
  - *Located on the ground floor*  corresponds with  level=
  - _This option cannot be chosen as answer_
  - *Located on the first floor*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D1' target='_blank'>1</a>
  - *Located on the first basement level*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:level' target='_blank'>level</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:level%3D-1' target='_blank'>-1</a>


This tagrendering has labels  `level`



### reviews 



Shows the reviews module (including the possibility to leave a review)

This tagrendering has no question and is thus read-only





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





#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Open now | _isOpen=yes
 

This document is autogenerated from [assets/layers/fitness_centre/fitness_centre.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/fitness_centre/fitness_centre.json)
