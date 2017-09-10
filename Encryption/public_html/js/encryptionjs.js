var encryptionApp = { };

/* 
 *  Adds events to objects cross-browser.
 *  @param {obj} item      Any object from the site
 *  @param {event} type     The type of event.
 *  @param {function} func The function passed in.
 */
function addEvent(item, type, func) {
  //add event type to the obj sent 
  if(window.addEventListener){
    item.addEventListener(type, func, false); 
  } else if(window.attachEvent) {
      item.attachEvent("on"+type, func);
    }
}

/* 
 *  Initializes the website.
 */
function init(){
    
    //array of characters
    encryptionApp.charArrayL = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"];
    encryptionApp.charArrayU = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z"];
    encryptionApp.charArrayN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    encryptionApp.emojiArray = [String.fromCodePoint(128169),String.fromCodePoint(128512),String.fromCodePoint(127774),
        "🌫",String.fromCodePoint(9729),String.fromCodePoint(127784),String.fromCodePoint(127783),"🌦",String.fromCodePoint(9928),"🌪",
        String.fromCodePoint(128513),String.fromCodePoint(128514),String.fromCodePoint(128515),
        String.fromCodePoint(128516),String.fromCodePoint(128517),String.fromCodePoint(128518),
        String.fromCodePoint(128521),String.fromCodePoint(128522),String.fromCodePoint(128523),
        String.fromCodePoint(128526),String.fromCodePoint(128525),String.fromCodePoint(128536),
        String.fromCodePoint(128535),String.fromCodePoint(128537),String.fromCodePoint(128538),
        String.fromCodePoint(9786),String.fromCodePoint(128578),String.fromCodePoint(129303),
        String.fromCodePoint(128519),String.fromCodePoint(129300),String.fromCodePoint(128528),
        String.fromCodePoint(128529),String.fromCodePoint(128566),String.fromCodePoint(128580),
        String.fromCodePoint(128527),String.fromCodePoint(128547),String.fromCodePoint(128549),
        String.fromCodePoint(128558),String.fromCodePoint(129296),String.fromCodePoint(128559),
        String.fromCodePoint(128554),String.fromCodePoint(128555),String.fromCodePoint(128564),
        String.fromCodePoint(128524),String.fromCodePoint(129299),String.fromCodePoint(128539),
        String.fromCodePoint(128540),String.fromCodePoint(128541),String.fromCodePoint(9785),
        String.fromCodePoint(128577),String.fromCodePoint(128530),String.fromCodePoint(128531),
        String.fromCodePoint(128532),String.fromCodePoint(128533),String.fromCodePoint(128534),
        String.fromCodePoint(128579),String.fromCodePoint(128567),String.fromCodePoint(129298),
        String.fromCodePoint(129301),String.fromCodePoint(129297),String.fromCodePoint(128562),
        String.fromCodePoint(128542),String.fromCodePoint(128543),String.fromCodePoint(128548),
        String.fromCodePoint(128546),String.fromCodePoint(128557),String.fromCodePoint(128550),
        String.fromCodePoint(128551),String.fromCodePoint(128552),String.fromCodePoint(128553),
        String.fromCodePoint(128556),String.fromCodePoint(128560),String.fromCodePoint(128561),
        String.fromCodePoint(128563),String.fromCodePoint(128565),String.fromCodePoint(128545),
        String.fromCodePoint(128544),String.fromCodePoint(128127),String.fromCodePoint(128520),
        String.fromCodePoint(128102),String.fromCodePoint(128103),String.fromCodePoint(128104),
        String.fromCodePoint(128105),String.fromCodePoint(128116),String.fromCodePoint(128117),
        String.fromCodePoint(128118),String.fromCodePoint(128113),String.fromCodePoint(128110),
        String.fromCodePoint(128114),String.fromCodePoint(128115),String.fromCodePoint(128119),
        String.fromCodePoint(9937),String.fromCodePoint(128120),String.fromCodePoint(128130),
        String.fromCodePoint(127877),String.fromCodePoint(128124),String.fromCodePoint(128373),
        String.fromCodePoint(128134),String.fromCodePoint(128135),String.fromCodePoint(128112),
        String.fromCodePoint(128589)];

    //images
    encryptionApp.insctructionImage = $("instructions_image");
    encryptionApp.homeImage = $("home_image");
    encryptionApp.aboutImage = $("about_image");
    
    encryptionApp.insctructionImage.style.visibility = "hidden";
    encryptionApp.homeImage.style.visibility = "visible";
    encryptionApp.aboutImage.style.visibility = "hidden";    
    
    //buttons
    encryptionApp.homeButton = $("home");
    encryptionApp.instructionsButton = $("instructions");
    encryptionApp.aboutButton = $("about");
    encryptionApp.encryptionButton = $("encryption");
    encryptionApp.decryptionButton = $("decryption");
    
    addEvent(encryptionApp.homeButton, "click", showImage);
    addEvent(encryptionApp.aboutButton, "click", showImage);
    addEvent(encryptionApp.instructionsButton, "click", showImage);
    
    addEvent(encryptionApp.encryptionButton, "click", showInput);
    addEvent(encryptionApp.decryptionButton, "click", showInputDecryption);
    
    
    
   /* if (document.cookie.indexOf("visited") === -1) {
        createCookie("visited", "visited", 7);
        showWizard();
    }*/
    
    showWizard();
}

/* 
 *  Initializes the wizard.
 */
function showWizard() {
    
    var content = $("content");
    
    var img1 = document.createElement("img");
    img1.id = "img1";
    img1.setAttribute("src", "images/encryptionoverview.png");
    
    var next = document.createElement("button");
    next.innerHTML = "Next";
    next.id = "nextButton";
    
    content.append(img1);
    content.append(next);
    
    addEvent(next, "click", secondPicture);

}

/* 
 *  Displays the second wizard image.
 */
function secondPicture(){

    var content = $("content");

    var img2 = document.createElement("img");
    img2.id = "img2";
    img2.setAttribute("src", "images/instructionswizard.png");
    
    var next = document.createElement("button");
    next.innerHTML = "Next";
    next.id = "nextButton";
    var previous = document.createElement("button");
    previous.innerHTML = "Previous";
    previous.id = "previousButton";
    content.append(img2);
    content.append(next);
    content.append(previous);
    
    content.removeChild(content.childNodes[7]);
    content.removeChild(content.childNodes[7]);
    
    addEvent(next, "click", thirdPicture);
    addEvent(previous, "click", showWizard);
    
}

/* 
 *  Displays the third wizard image.
 */
function thirdPicture(){
    
    var content = $("content");
    var img3 = document.createElement("img");
    img3.id = "img3";
    img3.setAttribute("src", "images/enjoywizard.png");
    
    var close = document.createElement("button");
    close.innerHTML = "Close";
    close.id = "closeButton";
    var previous = document.createElement("button");
    previous.innerHTML = "Previous";
    previous.id = "previousButton";
    
    content.append(img3);
    content.append(close);
    content.append(previous);
    
    content.removeChild(content.childNodes[7]);
    content.removeChild(content.childNodes[7]);
    content.removeChild(content.childNodes[7]);

    addEvent(close, "click", closeAll);
    addEvent(previous, "click", secondPicture);    
}

/* 
 *  Displays the third wizard image.
 */
function closeAll(){
    
    var content = $("content");
    var c = $("content").childNodes.length - 1;

    while (c >= 7){
        content.removeChild(content.childNodes[c]);
        c--;
    }       
}

/* 
 *  Displays an image depending on what was clicked.
 */
function showImage(e){
    var eventType = e.type;
    
    if (eventType === "click"){
        if (e.target === $("about")){
            encryptionApp.homeImage.style.visibility = "hidden";
            encryptionApp.insctructionImage.style.visibility = "hidden";
            encryptionApp.aboutImage.style.visibility = "visible";
            $("site_content").style.height = "800px";
            closeAll();
        } else if (e.target === $("home")){
            encryptionApp.homeImage.style.visibility = "visible";
            encryptionApp.insctructionImage.style.visibility = "hidden";
            encryptionApp.aboutImage.style.visibility = "hidden";
            $("site_content").style.height = "600px";
            closeAll();
        } else if (e.target === $("instructions")){
            encryptionApp.homeImage.style.visibility = "hidden";
            encryptionApp.insctructionImage.style.visibility = "visible";
            encryptionApp.aboutImage.style.visibility = "hidden";
            $("site_content").style.height = "600px";
            closeAll();
        } else {
            $("site_content").style.height = "600px";
        }         
    }
}
/*
 * Displays a regular ASCII input for older browser, if not, displays emoji input.
 * @returns {undefined}
 */
function showInput(){
    
    closeAll();
    
    encryptionApp.homeImage.style.visibility = "hidden";
    encryptionApp.insctructionImage.style.visibility = "hidden";
    encryptionApp.aboutImage.style.visibility = "hidden";
    
    var content = $("content");
    var inputBox = document.createElement("input");
    inputBox.id = "encryptioninput";
    inputBox.setAttribute('type', 'text');
    var newP = document.createElement("p");
    newP.id = "textInputEncryption";
    newP.innerHTML = "Enter the text to encrypt";
    var outputBox = document.createElement("input");
    outputBox.id = "encryptionoutput";
    outputBox.setAttribute('type', 'text');
    var shift = document.createElement("input");
    shift.id = "shift";
    shift.setAttribute('type', 'text');
    shift.setAttribute('value', 'a');
    shift.setAttribute('maxlength', 1);
    var op = document.createElement("p");
    op.id = "textOutputEncryption";
    op.innerHTML = "Output";
    var shiftText = document.createElement("p");
    shiftText.id = "shiftText";
    shiftText.innerHTML = "Enter the key";
    var cityP = document.createElement("p");
    cityP.id = "cityP";
    cityP.innerHTML = "Encrypt according to the city";
    var cityInput = document.createElement("input");
    cityInput.id = "cityInput";
    cityInput.setAttribute('type', 'text');
    var button2 = document.createElement("button");
    button2.id = "encryptcitybutton";
    button2.innerHTML = "Encrypt via city";
    
    var img = document.createElement("img");
    img.id = "keys";
    img.setAttribute("src", "images/keys.png");
    var img2 = document.createElement("img");
    img2.id = "emojikeys";
    img2.setAttribute("src", "images/emojikeys.png");
    
    var counter = 0;

    shift.setAttribute('value', "a");
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for (var j = 0; j < 5; j++) {
        var row = document.createElement("tr");

        for (var i = 0; i < 20; i++) {
            var cell = document.createElement("td");    
            var cellText = document.createTextNode(encryptionApp.emojiArray[counter]); 

            cell.appendChild(cellText);
            row.appendChild(cell);
            counter++;
            }
            tableBody.appendChild(row);
        }
        
    table.id = "emojitable";
    table.appendChild(tableBody);
        
    content.append(table);    
    content.append(shiftText);
    content.append(inputBox);
    content.append(shift);
    content.append(newP);
    content.append(outputBox);
    content.append(op);
    content.append(img);
    content.append(img2);
    content.append(cityP);
    content.append(cityInput);
    content.append(button2);
    
    addEvent(shift, "input", showOutput);
    addEvent(inputBox, "input", showOutput);
    
      if (addEventListener){
        addEvent($("emojitable"), "click", addEmoji);
        addEvent(inputBox, "input", showEmojiOutput);
        addEvent(shift, "input", showEmojiOutput);
        addEvent(button2, "click", showWeatherOutput);
    }

}

function showWeatherOutput(){
    var city = $("cityInput");
    var out = $("encryptionoutput");
    var cityValue = city.value;
    cityValue = cityValue.toString().trim();
            
    createCookie("city", city.value, 7);
    var info = JSON.parse(loadCityWeather(cityValue));
    
    window.alert(info);
    
    if (info.weather.main === "Rain"){
        out.value = encryptionApp.emojiArray[5];
    } else if (info.weather.main === "Drizzle"){
        out.value = encryptionApp.emojiArray[7];
    } else if (info.weather.main === "Clear"){
        out.value = encryptionApp.emojiArray[2];
    } else if (info.weather.main === "Atmosphere"){
        out.value = encryptionApp.emojiArray[2];
    } else if (info.weather.main === "Clouds"){
        out.value = encryptionApp.emojiArray[4];
    } else if (info.weather.main === "Snow"){
        out.value = encryptionApp.emojiArray[6];
    } else if (info.weather.main === "Thunderstorm"){
        out.value = encryptionApp.emojiArray[8];
    } else if (info.weather.main === "Extreme"){
        out.value = encryptionApp.emojiArray[9];
    } else {
        out.value = encryptionApp.emojiArray[2];
    }
}
/*
 * Returns the index of the emoji selected.
 * @returns {Index} Index of the emoji
 */
function getEmojiIndex(){
    var shiftBox = $("shift");
    var shift = shiftBox.value;
    var index = encryptionApp.emojiArray.indexOf(shift);
    
    return index; 
}
/*
 * Returns the shift by the emoji selected.
 * @returns {shift} The shift of the emoji
 */
function getEmojiShift(){
    var index = getEmojiIndex();
    var emojiShift;
    
    if (index >= 0 && index < 9)
        emojiShift = 1;
    
    if (index > 9 && index < 19)
        emojiShift = 2;
    
    if (index > 19 && index < 29)
        emojiShift = 3;
    
    if (index > 29 && index < 39)
        emojiShift = 4;
    
    if (index > 39 && index < 49)
        emojiShift = 5;
    
    if (index > 49 && index < 59)
        emojiShift = 6;
    
    if (index > 59 && index < 69)
        emojiShift = 7;
    
    if (index > 69 && index < 79)
        emojiShift = 8;
    
    if (index > 79 && index < 89)
        emojiShift = 9;
    
    if (index > 89 && index <= 99)
        emojiShift = 10;
    
    return emojiShift;
        
}

/*
 * Displays an encrypted message as emojis.
 */
function showEmojiOutput(){
    var textToEncrypt = $("encryptioninput");
    var string;
    var key = getEmojiShift();
    string = encryptEmoji(textToEncrypt.value, key);
    
    var out = $("encryptionoutput");
    
    out.value = string;
}
/*
 * Encrypts a text into emojis.
 * @param {string} text The text to encrypt
 * @param {int} shift The shift
 * @returns {String} The emoji string.
 */
function encryptEmoji(text, shift){
     if (shift.length > 3){
        if (shift.length < 0)
            window.alert("You must choose from the table of keys.");
    }
    
    if (/^[\x20-\x7F]+$/.test(text)){    
        var index;
        var result = "";
            for (var i = 0; i < text.length; i++) {
                    var c = text.charCodeAt(i);
                    var letter = String.fromCharCode(c);
                    if (c >= 65 && c <=  90){ //upper
                        index = encryptionApp.charArrayU.indexOf(letter);
                        result += encryptionApp.emojiArray[(index + shift) % 26];
                    } else if (c >= 97 && c <= 122) { //lower case
                        index = encryptionApp.charArrayL.indexOf(letter);
                        result += encryptionApp.emojiArray[(index + shift) % 26];
                    } else if (c >= 48 && c <= 57){
                        index = encryptionApp.charArrayN.indexOf(letter);
                        result += encryptionApp.emojiArray[(index + shift) % 10];
                    } else {                        
                        result += text.charAt(i);
                    }
            }
        }
	
        return result;
}

/*
 * Adds the chosen emoji in the shift input box.
 * @param {type} e The event.
 */
function addEmoji(e){
    var eventType = e.type;
    var shift = $("shift");
    
    if (eventType === "click"){
        shift.value = "";
        shift.value = e.target.innerHTML;
    }
}

/*
 * Displays the decrypted message.
 */
function showInputDecryption(){
    
    closeAll();
    
    encryptionApp.homeImage.style.visibility = "hidden";
    encryptionApp.insctructionImage.style.visibility = "hidden";
    encryptionApp.aboutImage.style.visibility = "hidden";
    
    var content = $("content");
    var inputBox = document.createElement("input");
    inputBox.id = "decryptioninput";
    inputBox.setAttribute('type', 'text');
    var newP = document.createElement("p");
    newP.id = "textInputDecryption";
    newP.innerHTML = "Enter the text to decrypt";
    var outputBox = document.createElement("input");
    outputBox.id = "decryptionoutput";
    outputBox.setAttribute('type', 'text');
    var shift = document.createElement("input");
    shift.id = "shift";
    shift.setAttribute('type', 'text');
    shift.setAttribute('value', 'a');
    var op = document.createElement("p");
    op.id = "textOutputDecryption";
    op.innerHTML = "Output";
    var shiftText = document.createElement("p");
    shiftText.id = "shiftText";
    shiftText.innerHTML = "Enter the key";
    
    var img = document.createElement("img");
    img.id = "keys";
    img.setAttribute("src", "images/keys.png");
    var img2 = document.createElement("img");
    img2.id = "emojikeys";
    img2.setAttribute("src", "images/emojikeys.png");
    
    var counter = 0;

    shift.setAttribute('value', "a");
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for (var j = 0; j < 5; j++) {
        var row = document.createElement("tr");

        for (var i = 0; i < 20; i++) {
            var cell = document.createElement("td");    
            var cellText = document.createTextNode(encryptionApp.emojiArray[counter]); 

            cell.appendChild(cellText);
            row.appendChild(cell);
            counter++;
            }
            tableBody.appendChild(row);
        }
        
    table.id = "emojitable";
    table.appendChild(tableBody);
        
    content.append(table);    
    content.append(shiftText);
    content.append(inputBox);
    content.append(shift);
    content.append(newP);
    content.append(outputBox);
    content.append(op);
    content.append(img);
    content.append(img2);
    
    addEvent(shift, "input", showOutputDecryption);
    addEvent(inputBox, "input", showOutputDecryption);
    
    if (addEventListener){
        addEvent($("emojitable"), "click", addEmoji);
    }
}
/*
 * Changes the text using the shift selected.
 * @param {type} text The text to be encrypted or decrypted
 * @param {type} shift The sfhit
 * @returns {String} result The encrypted or decrypted text
 */
function caesarShift(text, shift) {
    if (shift.length > 2){
        if (shift.length < 0)
            window.alert("You must choose from the table of keys.");
    }
    
    if (/^[\x20-\x7F]+$/.test(text)){     
        var index;
        var result = "";
            for (var i = 0; i < text.length; i++) {
                    var c = text.charCodeAt(i);
                    var letter = String.fromCharCode(c);
                    if (c >= 65 && c <=  90){ //upper
                        index = encryptionApp.charArrayU.indexOf(letter);
                        result += encryptionApp.charArrayU[(index + shift) % 26];
                    } else if (c >= 97 && c <= 122) { //lower case
                        index = encryptionApp.charArrayL.indexOf(letter);
                        result += encryptionApp.charArrayL[(index + shift) % 26];
                    } else if (c >= 48 && c <= 57){
                        index = encryptionApp.charArrayN.indexOf(letter);
                        result += encryptionApp.charArrayN[(index + shift) % 10];
                    } else {                        
                        result += text.charAt(i);
                    }
            }
	}
        return result;
}
/*
 * Returns the shift from a selected key.
 * @param {type} key The key chosen
 * @returns {Number} The shift.
 */
function getShift(key){
    var shift;
    
    if ((key === "a") || (key === "A") || (key === "n") || (key === "N") ||
            (key === "!") || (key === "?") || (key === "0"))
        shift = 1;
    
    if ((key === "b") || (key === "B") || (key === "o") || (key === "O") ||
            (key === "@") || (key === "<") || (key === "1"))
        shift = 2;
    
    if ((key === "c") || (key === "C") || (key === "p") || (key === "P") ||
            (key === "#") || (key === ">") || (key === "2"))
        shift = 3;
    
    if ((key === "d") || (key === "D") || (key === "q") || (key === "Q") ||
            (key === "$") || (key === ".") || (key === "3"))
        shift = 4;
    
    if ((key === "e") || (key === "E") || (key === "r") || (key === "R") ||
            (key === "%") || (key === ",") || (key === "4"))
        shift = 5;
    
    if ((key === "f") || (key === "F") || (key === "s") || (key === "S") ||
            (key === "&") || (key === "'") || (key === "5"))
        shift = 6;
    
    if ((key === "g") || (key === "G") || (key === "t") || (key === "T") ||
            (key === "*") || (key === "\"") || (key === "6"))
        shift = 7;
    
    if ((key === "h") || (key === "H") || (key === "u") || (key === "U") ||
            (key === "(") || (key === ";") || (key === "7"))
        shift = 8;
    
    if ((key === "i") || (key === "I") || (key === "v") || (key === "V") ||
            (key === ")") || (key === ":") || (key === "8"))
        shift = 9;
    
    if ((key === "j") || (key === "J") || (key === "w") || (key === "W") ||
            (key === "[") || (key === "+") || (key === "9"))
        shift = 10;
    
    if ((key === "k") || (key === "K") || (key === "x") || (key === "X") ||
            (key === "]") || (key === "-") || (key === "="))
        shift = 11;
    
    if ((key === "l") || (key === "L") || (key === "y") || (key === "Y") ||
            (key === "{") || (key === "/") || (key === "^"))
        shift = 12;
    
    if ((key === "m") || (key === "M") || (key === "z") || (key === "Z") ||
            (key === "}") || (key === "\\") || (key === "|"))
        shift = 13;
    
    
    return shift;
}

/*
 * Displays the output of the encrypted text.
 */
function showOutput(){
    var textToEncrypt = $("encryptioninput");
    var shiftInput = $("shift");
    var string;
    var key = getShift(shiftInput.value);
    string = caesarShift(textToEncrypt.value, key);
    
    var out = $("encryptionoutput");
    
    out.value = string;
}

/*
 * Displays the output of the decrypted text.
 */
function showOutputDecryption(){
    var textToEncrypt = $("decryptioninput");
    var shiftInput = $("shift");
    var string;
    var key = getShift(shiftInput.value);
    key = (26 - key) % 26;
    string = caesarShift(textToEncrypt.value, key);
    
    var out = $("decryptionoutput");
    
    out.value = string;
}


/* 
 *  Creates a cookie.
 *  @param {obj} name The name of the cookie
 *  @param {obj} value The value of the cookie
 *  @param {obj} days The number of days before it expires.
 */
function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }

    document.cookie = encodeURIComponent(name) +
            "=" + encodeURIComponent(value) + expires;
}

/* 
 *  Gets a cookie.
 *  @param {obj} cname The name of the cookie
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieSplit = decodedCookie.split(";");

    for (var i = 0; i < cookieSplit.length; i++) {
        var c = cookieSplit[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
 * Returns the JSON.
 * @param {type} city
 * @returns {String} Response text
 */

function loadCityWeather(city){
  var request = new XMLHttpRequest();
  var url = "api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=6b15cad3faadbd876872740f1f771ff6";
  request.open("GET", url, true);
  
  request.send(null);

  return request.responseText;
  
}

/*
 * Returns the element by ID.
 */
function $(id) { return document.getElementById(id); }

addEvent(document, "DOMContentLoaded", init);


