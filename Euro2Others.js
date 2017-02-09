// ==UserScript==
// @name         EuroToOthers
// @namespace    http://tampermonkey.net/
// @version      1
// @description  convert The Euro to Dollars
// @author       Pranjul
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=en
// @grant        none
// @include      http://pay.redfoxpay.com/withdraw?sid=*
// ==/UserScript==

    var dive = document.getElementsByClassName("item-containter");
    var element = document.getElementsByClassName("item-value-euro");
    var ele = document.createElement("input");
    ele.type = "button";
    ele.value = "MBTCto$";
    ele.onclick = showFucn;
    ele.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:12px;");
    document.body.appendChild(ele);
    function showFucn(){
      for(i=0;i<element.length;i++){
          var clan =  document.createElement("span");
          clan.setAttribute("style", "font-size:18p;");
          clan.class = "item-text";
          var value = (parseFloat(element[i].innerHTML)*1.07).toFixed(3).toString()+'$';
          clan.innerHTML = (value);
          dive[i].appendChild(clan);
      }
    }
