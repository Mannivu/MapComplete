[//]: # (WARNING: this file is automatically generated. Please find the sources at the bottom and edit those sources)



 parking_ticket_machine 
========================





Layer with parking ticket machines to pay for parking.






  - This layer is shown at zoomlevel **16** and higher



## Table of contents

1. [ Themes using this layer ](#-themes-using-this-layer-)
2. [ Basic tags for this layer ](#-basic-tags-for-this-layer-)
3. [ Supported attributes ](#-supported-attributes-)
  - [just_created](#just_created)
  - [images](#images)
  - [payment-options-split](#payment-options-split)
  - [denominations-coins](#denominations-coins)
  - [denominations-notes](#denominations-notes)
  - [ref](#ref)
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





  - [parkings](https://mapcomplete.org/parkings)
  - [personal](https://mapcomplete.org/personal)
  - [vending_machine](https://mapcomplete.org/vending_machine)




 Basic tags for this layer 
---------------------------



Elements must match **all** of the following expressions:

0. <a href='https://wiki.openstreetmap.org/wiki/Key:vending' target='_blank'>vending</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending%3Dparking_tickets' target='_blank'>parking_tickets</a>
1. <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dvending_machine' target='_blank'>vending_machine</a>

[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B%28%20%20%20%20nwr%5B%22vending%22%3D%22parking_tickets%22%5D%5B%22amenity%22%3D%22vending_machine%22%5D%28%7B%7Bbbox%7D%7D%29%3B%0A%29%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/id#values) [id](https://wiki.openstreetmap.org/wiki/Key:id) | Multiple choice | 
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/payment:coins:denominations#values) [payment:coins:denominations](https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations) | Multiple choice | [0.01 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.01 EUR) [0.02 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.02 EUR) [0.05 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.05 EUR) [0.10 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.10 EUR) [0.20 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.20 EUR) [0.50 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.50 EUR) [1 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D1 EUR) [2 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D2 EUR) [0.05 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.05 CHF) [0.10 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.10 CHF) [0.20 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.20 CHF) [0.50 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.50 CHF) [1 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D1 CHF) [2 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D2 CHF) [5 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D5 CHF)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/payment:notes:denominations#values) [payment:notes:denominations](https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations) | Multiple choice | [5 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D5 EUR) [10 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D10 EUR) [20 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D20 EUR) [50 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D50 EUR) [100 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D100 EUR) [200 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D200 EUR) [500 EUR](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D500 EUR) [10 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D10 CHF) [20 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D20 CHF) [50 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D50 CHF) [100 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D100 CHF) [200 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D200 CHF) [1000 CHF](https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D1000 CHF)
[<img src='https://mapcomplete.org/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/ref#values) [ref](https://wiki.openstreetmap.org/wiki/Key:ref) | [string](../SpecialInputElements.md#string) | 




### just_created 



This element shows a 'thank you' that the contributor has recently created this element

This tagrendering has no question and is thus read-only





  - *You just created this element! Thanks for sharing this info with the world and helping people worldwide.*  corresponds with  id~.+


This tagrendering is only visible in the popup if the following condition is met: `_last_edit:passed_time<300 & (_version_number= | <a href='https://wiki.openstreetmap.org/wiki/Key:_version_number' target='_blank'>_version_number</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:_version_number%3D1' target='_blank'>1</a>) & _backend~.+`

This tagrendering has labels  `added_by_default`



### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images

This tagrendering has no question and is thus read-only





### payment-options-split 



The question is  *Which methods of payment are accepted here?*





  - *Cash is accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dyes' target='_blank'>yes</a>
  - _This option cannot be chosen as answer_
  - Unselecting this answer will add payment:cash=
  - *Payment cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dyes' target='_blank'>yes</a>
  - _This option cannot be chosen as answer_
  - Unselecting this answer will add payment:cards=
  - *Payment by QR-code is possible here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:qr_code' target='_blank'>payment:qr_code</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:qr_code%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:qr_code' target='_blank'>payment:qr_code</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:qr_code%3Dno' target='_blank'>no</a>
  - *Coins are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dno' target='_blank'>no</a>
  - *Bank notes are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dno' target='_blank'>no</a>
  - *Debit cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:debit_cards' target='_blank'>payment:debit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:debit_cards%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:debit_cards' target='_blank'>payment:debit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:debit_cards%3Dno' target='_blank'>no</a>
  - *Credit cards are accepted here*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:credit_cards' target='_blank'>payment:credit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:credit_cards%3Dyes' target='_blank'>yes</a>
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:credit_cards' target='_blank'>payment:credit_cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:credit_cards%3Dno' target='_blank'>no</a>




### denominations-coins 



The question is  *What coins can you use to pay here?*





  - *1 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.01 EUR' target='_blank'>0.01 EUR</a>
  - *2 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.02 EUR' target='_blank'>0.02 EUR</a>
  - *5 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.05 EUR' target='_blank'>0.05 EUR</a>
  - *10 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.10 EUR' target='_blank'>0.10 EUR</a>
  - *20 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.20 EUR' target='_blank'>0.20 EUR</a>
  - *50 cent coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.50 EUR' target='_blank'>0.50 EUR</a>
  - *1 euro coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D1 EUR' target='_blank'>1 EUR</a>
  - *2 euro coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D2 EUR' target='_blank'>2 EUR</a>
  - *5 centimes coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.05 CHF' target='_blank'>0.05 CHF</a>
  - *10 centimes coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.10 CHF' target='_blank'>0.10 CHF</a>
  - *20 centimes coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.20 CHF' target='_blank'>0.20 CHF</a>
  - *½ franc coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D0.50 CHF' target='_blank'>0.50 CHF</a>
  - *1 franc coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D1 CHF' target='_blank'>1 CHF</a>
  - *2 francs coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D2 CHF' target='_blank'>2 CHF</a>
  - *5 francs coins are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins:denominations' target='_blank'>payment:coins:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins:denominations%3D5 CHF' target='_blank'>5 CHF</a>


This tagrendering is only visible in the popup if the following condition is met: `(<a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dyes' target='_blank'>yes</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dyes' target='_blank'>yes</a>) & (_currency~^(.*EUR.*)$ | _currency~^(.*CHF.*)$)`



### denominations-notes 



The question is  *what notes can you use to pay here?*





  - *5 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D5 EUR' target='_blank'>5 EUR</a>
  - *10 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D10 EUR' target='_blank'>10 EUR</a>
  - *20 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D20 EUR' target='_blank'>20 EUR</a>
  - *50 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D50 EUR' target='_blank'>50 EUR</a>
  - *100 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D100 EUR' target='_blank'>100 EUR</a>
  - *200 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D200 EUR' target='_blank'>200 EUR</a>
  - *500 euro notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D500 EUR' target='_blank'>500 EUR</a>
  - *10 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D10 CHF' target='_blank'>10 CHF</a>
  - *20 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D20 CHF' target='_blank'>20 CHF</a>
  - *50 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D50 CHF' target='_blank'>50 CHF</a>
  - *100 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D100 CHF' target='_blank'>100 CHF</a>
  - *200 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D200 CHF' target='_blank'>200 CHF</a>
  - *1000 francs notes are accepted*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes:denominations' target='_blank'>payment:notes:denominations</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes:denominations%3D1000 CHF' target='_blank'>1000 CHF</a>


This tagrendering is only visible in the popup if the following condition is met: `(<a href='https://wiki.openstreetmap.org/wiki/Key:payment:cash' target='_blank'>payment:cash</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cash%3Dyes' target='_blank'>yes</a> | <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dyes' target='_blank'>yes</a>) & (_currency~^(.*EUR.*)$ | _currency~^(.*CHF.*)$)`



### ref 



The question is  *What is the reference number of this parking ticket machine?*

This rendering asks information about the property  [ref](https://wiki.openstreetmap.org/wiki/Key:ref) This is rendered with  `This parking ticket machine has the reference number {ref}`



  - *This parking ticket machine has no reference number*  corresponds with  <a href='https://wiki.openstreetmap.org/wiki/Key:noref' target='_blank'>noref</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:noref%3Dyes' target='_blank'>yes</a>




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

 

This document is autogenerated from [assets/layers/parking_ticket_machine/parking_ticket_machine.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/parking_ticket_machine/parking_ticket_machine.json)
