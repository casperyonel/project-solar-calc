
function floor(diameter) {
    var radius = diameter / 2;
    var floorArea = Math.PI * (radius * radius);
    return floorArea
}

function walls (diameter, height) {
    var radius = diameter / 2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;
    return wallArea
}

function materialsNeeded() {
    
    
    var d = document.getElementById("across").value;
    var h = document.getElementById("height").value;
    
    var carpetNeeded = Math.ceil(floor(d))
    var paintNeeded = Math.ceil(walls(d, h))

    console.log('Carpet needed is ' + carpetNeeded + ' sqft')
    console.log('Paint needed is ' + paintNeeded + ' sqft')
}





function showStuff(el) {
    var elementID = document .getElementById(el);
    for (i = 0; i < elementID.length; i++) {
    if (elementID[i].selected) {
        var x = elementID[i].text
    }
    }
    return x;
    // not needed
}

function showMore(el) {
    var elementID = document.getElementsByName(el)
    // console.log(elementID.length)
    var myCheck = ""
    for (i = 0; i < elementID.length; i++) {
        // console.log(elementID[i].checked)
        // console.log(elementID[i].value)
        if (elementID[i].checked) {
            myCheck = myCheck + elementID[i].value + '<br>'
        }
    }
    return myCheck
    
}


function evaluatePage() {
    var feedbackState = showStuff('state')
    var feedbackHome = showStuff('home')
    var feedbacklight = showMore('bulb')
    document.getElementById('output').innerHTML = feedbackState + feedbackHome + feedbacklight
}