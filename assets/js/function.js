function delcookie() {
    var path = "http://www.brilltechglobal.com/";
    path = path.split("http://www.");
    path = path[1].split("/");
    expires = new Date();
    expires.setTime(expires.getTime() + 10);
    document.cookie = "desccaptcha=" + escape() + ";" + "expires=" + expires.toGMTString() + ";" + "domain=." + path[0] + ";path=/;";

}


function ExpandCollapse(id) {
    if (id == "plus") {
        document.getElementById('plus').style.display = "block";
        document.getElementById('minus').style.display = "none";
    } else if (id == "thankyou") {
        document.getElementById('thankmsg').style.display = "none";
        document.getElementById('thankyou').style.display = "none";
        document.getElementById('fixmetoo3').style.display = "none";
        document.getElementById('add').style.display = "none";
        document.getElementById('min').style.display = "block";
        document.getElementById('fixmetoo').style.display = "block";
    } else if (id == "minus") {
        document.getElementById('minus').style.display = "block";
        document.getElementById('plus').style.display = "none";
        document.getElementById('add').style.display = "block";
        document.getElementById('min').style.display = "block";
        document.dataform.Description.focus();
    }
}

function searchCheck() {
    var str = '';
    if (document.frm.ss.value == '' || document.frm.ss.value == 'Search Products/Services') {
        alert("Please enter some keyword to search.");
        document.frm.ss.focus();
        document.frm.ss.value = '';
        return false;
    }

    if (document.frm.ss.value.length < 3) {
        alert("Please Enter atleast 3 character");
        document.frm.ss.focus();
        return false;
    }

    if (document.frm.ss.value) {
        var str1;
        str1 = document.frm.ss.value.replace(/^\s+/g, '').replace(/\s+$/g, '');
        str1 = str1.replace(/[^a-zA-Z0-9+ ]/g, ' ');
        str1 = str1.replace(/\+/g, ' ');
        str1 = str1.replace(/\s+/g, '+');
        str += 'ss=' + str1;
        window.location = "http://www.brilltechglobal.com/search.html?" + str;
        return false;
    }
}

function searchClear() {
    if (document.frm.ss.value == 'Search Products/Services') {
        document.frm.ss.value = '';
    }
}

function settext() {
    if (document.frm.ss.value == '') {
        document.frm.ss.value = 'Search Products/Services';
    }
}

function settextvalue() {
    document.frm.ss.value = 'Search Products/Services';
}

function getDwsCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) { // if there are any cookies
        offset = document.cookie.indexOf(search)
        if (offset != -1) { // if cookie exists
            offset += search.length
            // set index of beginning of value
            end = document.cookie.indexOf(";", offset)
            // set index of end of cookie value
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
    }
    return "";
}

function setDwsCookie(name, value) {
    if (value.length > 0)
        document.cookie = name + "=" + escape(value) + ";"
}





var persistmenu = "yes" //"yes" or "no". Make sure each DIV content contains an incrementing ID starting at 1 (id="sub1", id="sub2", etc)
var persisttype = "sitewide" //enter "sitewide" for menu to persist across site, "local" for this page only

if (document.getElementById) { //DynamicDrive.com change
    document.write('<style type="text/css">\n')
    document.write('.hn{display: none;}\n')
    document.write('.sub{display: none;}\n')
    document.write('.sub1{display: none;}\n')
    document.write('.tbq{display: none;}\n')
    document.write('</style>\n')
}

function SwitchMenu2(obj) {
    if (document.getElementById) {
        var el = document.getElementById(obj);
        var ar = document.getElementById("masterdiv2").getElementsByTagName("div"); //DynamicDrive.com change
        if (el.style.display != "inline") { //DynamicDrive.com change
            for (var i = 0; i < ar.length; i++) {
                if (ar[i].className == "hn") //DynamicDrive.com change
                    ar[i].style.display = "none";
            }
            el.style.display = "inline";
        }
    }
}


var news = 1;
var cnt = 0

function SwitchMenu(obj) {
    if (document.getElementById) {
        var el = document.getElementById(obj);
        if (obj == 'sub3') news = 5;
        else news = 1;
        var ar = document.getElementById("masterdiv").getElementsByTagName("div"); //DynamicDrive.com change
        if (el.style.display != "inline") { //DynamicDrive.com change
            for (var i = 0; i < ar.length; i++) {
                if (ar[i].className == "tbq") //DynamicDrive.com change
                    ar[i].style.display = "none";
            }
            el.style.display = "inline";
        }
    }
}

function SwitchMenu3(obj) {
    if (document.getElementById) {
        var el = document.getElementById(obj);
        var ar = document.getElementById("masterdiv3").getElementsByTagName("TABLE"); //DynamicDrive.com change
        if (el.style.display != "block") { //DynamicDrive.com change
            for (var i = 0; i < ar.length; i++) {
                if (ar[i].className == "sub1") //DynamicDrive.com change
                    ar[i].style.display = "none";
            }
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    }
}


function SwitchMenu4(obj) {
    if (document.getElementById) {
        var el = document.getElementById(obj);
        var ar = document.getElementById("masterdiv4").getElementsByTagName("div"); //DynamicDrive.com change
        if (el.style.display != "block") { //DynamicDrive.com change
            for (var i = 0; i < ar.length; i++) {
                if (ar[i].className == "sub1") //DynamicDrive.com change
                    ar[i].style.display = "none";
            }
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    }
}



//mouse over effect-----------------------------------------------------------------------------------------------------
function newImage(arg) {
    if (document.images) {
        rslt = new Image();
        rslt.src = arg;
        return rslt;
    }
}

function changeImages() {
    if (document.images && (preloadFlag == true)) {
        for (var i = 0; i < changeImages.arguments.length; i += 2) {
            document[changeImages.arguments[i]].src = changeImages.arguments[i + 1];
        }
    }
}

var preloadFlag = false;

function preloadImages() {
    if (document.images) {
        index_1 = newImage("ts/so-basket1.png");
        index_2 = newImage("ts/so-details1.png");
        index_3 = newImage("ts/so-close1.png");
        index_4 = newImage("ts/so-sel-cate1.png");
        index_5 = newImage("ts/loading1.gif");
        preloadFlag = true;
    }
}


//dynamiclayout effect start
var myWidthnew = "";
/*
// dynamicLayout
function dynamicLayout(){


if( typeof( window.innerWidth ) == 'number' ) {
myWidthnew = window.innerWidth;

} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    myWidthnew = document.documentElement.clientWidth;

  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   myWidthnew = document.body.clientWidth;
  }

if (document.getElementById('container1'))
{
if (myWidthnew > 1259)
{
document.getElementById('container1').style.width = "1259px";
document.getElementsByTagName('body')[0].className = "line"; //this line for body bg


}
else
	{
document.getElementById('container1').style.width = "";
document.getElementsByTagName('body')[0].className = "inside-bg"; //for body body bg

}
}
}
dynamicLayout();

addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);
*/

function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj["e" + type + fn] = fn;
        obj[type + fn] = function() {
            obj["e" + type + fn](window.event);
        }
        obj.attachEvent("on" + type, obj[type + fn]);
    }
}



//dynamiclayout effect end
function openchild(sPicURL, h, w) {
    window.open(sPicURL, 'Lookup', 'toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=no,copyhistory=no,width=' + w + ',height=' + h + '');
}
/*new-cart*/
/* for text value start*/
function RegValue(FieldName) {

    if (FieldName.value == 'First Name' || FieldName.value == 'Your Name') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function RegValue1(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'First Name';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function RegValue2(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Your Name';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function RegeValue2(FieldName) {

    if (FieldName.value == 'Last Name') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function RegeValue3(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Last Name';
        FieldName.className = 'txtfa';
    }
}

function AriaValue(FieldName) {
    if (FieldName.value == 'Area Code') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function AriaValue1(FieldName) {
    if (FieldName.value == '') {
        FieldName.value = 'Area Code';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}


function PhonValue(FieldName) {
    if (FieldName.value == 'Phone Number') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function PhonValue1(FieldName) {
    if (FieldName.value == '') {
        FieldName.value = 'Phone Number';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function CellValue(FieldName) {
    if (FieldName.value == 'Mobile / Cell Phone Number' || FieldName.value == 'Mobile Number') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    }
}

function CellValue1(FieldName) {
    if (FieldName.value == '') {
        FieldName.value = 'Mobile / Cell Phone Number';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function CellValue2(FieldName) {
    if (FieldName.value == '') {
        FieldName.value = 'Mobile Number';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function FaxValue(FieldName) {

    if (FieldName.value == 'Area Code') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else if (FieldName.value == '') {
        FieldName.value = 'Area Code';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}


function ContValue(FieldName) {

    if (FieldName.value == 'Your Mobile / Cell Phone') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else if (FieldName.value == '') {
        FieldName.value = 'Your Mobile / Cell Phone';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}


function desc1Value(FieldName) {

    if (FieldName.value == 'Your Mobile / Cell Phone') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else if (FieldName.value == '') {
        FieldName.value = 'Your Mobile / Cell Phone';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

//for open vidio's
var win = null;

function NewWinIM(mypage, myname, compname) {
    mx = document.getElementById('mx');
    mx1 = document.getElementById('mx1');
    imagediv = document.getElementById('imagediv');
    var embedcode = '';
    var arr = mypage.split('/');
    if (mypage.search(/heavy\#\#/) != -1) {
        mypage = mypage.replace('heavy##', '');
        var hw = 'height=350,width=370';
        var embedcode = '<embed src="http://www.videowebtown.com/community/flvplayer/flvplayer.swf?file=http://www.videowebtown.com/indiamartvideo/video/' + mypage + '.flv&autoStart=false"  quality="high" bgcolor="#ffffff" width="352" height="288" name="movie" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
    } else {
        var hw = 'height=350,width=370';
        var embedcode = '<embed src="http://www.4shared.com/flash/flvplayer.swf"   style="width: 400px; height: 326px;" bgcolor="#ffffff" allowscriptaccess="always" allowfullscreen="true" flashvars="file=http://dc152.4shared.com/img/' + arr[0] + '/' + arr[1] + '/dlink__2Fdownload_2F' + arr[0] + '_2F' + arr[1] + '_3Fdsid_3DJGITKOINJZHYGJIAJPJYHXISIQKIJFIVHXHZHYJIIZJBJPIWKSIRKQITIGJTIAGHGCIAHYJHINIQKVKU/preview.flv&amp;image=http://dc152.4shared.com/img/' + mypage + '&amp;autostart=true">';
    }
    LeftPosition = (screen.width) ? (screen.width - 400) / 2 : 0;
    TopPosition = (screen.height) ? (screen.height - 326) / 2 : 0;

    var settings = 'width=460';
    settings += ', height=400';
    settings += ', top=' + TopPosition + ', left=' + LeftPosition;
    settings += ', directories=no';
    settings += ', location=no';
    settings += ', menubar=no';
    settings += ', resizable=no';
    settings += ', scrollbars=no';
    settings += ', status=no';
    settings += ', toolbar=no';

    win = window.open("", myname, settings);
    win.document.write('<HTML><HEAD><TITLE>' + compname + ' Video</TITLE></HEAD><BODY BGCOLOR="#ffffff"><DIV style="color:#000000;font-size:11px;font-family:arial" align="center">Video by ' + compname + '</DIV><DIV ALIGN="CENTER"><table BORDER="0" CELLPADDING="0" CELLSPACING="0" WIDTH="440"> <tr> <TD><img src="ts/top-left-1.gif"  WIDTH="7" HEIGHT="9"></TD> <TD BACKGROUND="ts/bottom-lcenter.gif"></TD> <TD><img src="ts/top-right-1.gif"  WIDTH="7" HEIGHT="9"></TD> </tr> <tr> <TD BACKGROUND="ts/l-bg1.gif"><img src="ts/zero.gif"  WIDTH="7" HEIGHT="1"></TD> <TD VALIGN="TOP"> <table CELLPADDING="0" CELLSPACING="0" BORDER="0"> <tr> <TD WIDTH="460" HEIGHT="350"> <DIV CLASS="sec-div" STYLE="background-image:url(ts/indicator-new.gif); background-repeat:no-repeat; background-position: center center;padding:10px;" > ' + embedcode + '</DIV></TD> </tr> </table></TD> <TD BACKGROUND="ts/l-bg1.gif"><img src="ts/zero.gif"  WIDTH="7" HEIGHT="1"></TD> </tr> <tr> <TD><img src="ts/bottom-left-1.gif"  WIDTH="7" HEIGHT="9"></TD> <TD BACKGROUND="ts/bottom-lcenter.gif"></TD> <TD><img src="ts/bottom-right-1.gif"  WIDTH="7" HEIGHT="9"></TD> </tr> </table> </DIV></BODY></HTML>');
}

// show and hide product name on home page

var plnew = "pl2";

function show(obj, plus, obj1, plus1) {
    if (document.getElementById) {
        var el = document.getElementById(obj);
        var ar = document.getElementById("masterdiv1").getElementsByTagName("div");
        for (var i = 0; i < ar.length; i++) {
            if (ar[i].className == "on") {
                ar[i].className = "off";
            }
        }
        document.getElementById(obj).className = "on";
    }
    if (document.getElementById(plnew)) {
        document.getElementById(plnew).className = "prd lh1 c5 a b bo2 p41 cu";
    }
    if (document.getElementById(plus).className == "prd lh1 c5 a b bo2 p41 cu") {
        document.getElementById(plus).className = "pr1 lh1 c5 a b p43";
    }
    plnew = plus;
    document.getElementById(obj1).className = "off";
    document.getElementById(plus1).className = "b f2 u c5 txr";
}

function show1(obj, plus) {
    document.getElementById(obj).className = "on";
    document.getElementById(plus).className = "off";
}

function show2(obj, plus) {
    document.getElementById(obj).className = "b f2 u c5 txr";
    document.getElementById(plus).className = "off";
}



/* hide show */
function showcontact(co, im) {
    if (document.getElementById(co).className == "doff") {
        document.getElementById(co).className = "don";
        document.getElementById(im).src = "ts/vll.gif";
        document.getElementById(im).alt = "view less";

    } else {
        document.getElementById(co).className = "doff";
        document.getElementById(im).src = "ts/vl1.gif";
        document.getElementById(im).alt = "view all";
    }
}

function keyDown1(e, trace) {
    var n = (window.Event) ? e.which : e.keyCode;
    if (n == 9 && p_blo.className == "don") {
        return false;
    } else if (n == 32 && p_blo.className == "don") {
        return false;
    } else if (n == 27 && p_blo.className == "don") {
        blowup_hide();
    }
    if ((n == 37 && p_blo.className == "don") || (n == 38 && p_blo.className == "don")) {
        if (imgid == 1) {
            return false;
        }
        previousimg();
    } else if ((n == 39 && p_blo.className == "don") || (n == 40 && p_blo.className == "don")) {
        if (imgid == dataref1.length) {
            return false;
        }
        nextimg();
        return false;
    }
}


function FrmValue(FieldName) {

    if (FieldName.value == 'First Name' || FieldName.value == 'Your Name') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue1(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'First Name';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}



function FrmValue2(FieldName) {

    if (FieldName.value == 'Last Name' || FieldName.value == 'Your Name') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue3(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Last Name';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}


function FrmValue4(FieldName) {

    if (FieldName.value == 'Area Code' || FieldName.value == 'Phone or Mobile') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue5(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Area Code';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue6(FieldName) {

    if (FieldName.value == 'Phone Number' || FieldName.value == 'Phone or Mobile') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue7(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Phone Number';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue8(FieldName) {

    if (FieldName.value == 'Mobile / Cell Phone Number' || FieldName.value == 'Phone or Mobile') {
        FieldName.value = '';
        FieldName.className = 'txtf';
    } else {
        FieldName.className = 'txtf';
    }
}

function FrmValue9(FieldName) {

    if (FieldName.value == '') {
        FieldName.value = 'Mobile / Cell Phone Number';
        FieldName.className = 'txtfa';
    } else {
        FieldName.className = 'txtf';
    }
}


function fg_hideform(formdiv_id, bg_div_id) {
    var formdiv = document.getElementById(formdiv_id);
    formdiv.style.display = "none";
    var bgdiv = document.getElementById(bg_div_id);
    bgdiv.style.display = "none";
}