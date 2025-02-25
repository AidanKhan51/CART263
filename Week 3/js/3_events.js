window.onload = setup;
function setup(){
    console.log("events!")
    let introSection = document.querySelector("#intro");
    introSection.addEventListener("click",introMouseClickCallback)
        
    function introMouseClickCallback(e){
        this.style.background = `rgba(214, 110, 239, 0.5)`
        console.log(this);
        console.log(e);
        let cssObj = window.getComputedStyle(this, null);
        let bgColor = cssObj.getPropertyValue("background-color");
        let backgroundColorArray = getColorObj(bgColor)
    console.log(backgroundColorArray)
if(this.getAttribute("custom-cool") === "inactive"){
//a:
this.style.background = `rgba(
    ${backgroundColorArray[0]},
    ${backgroundColorArray[1]},
    ${backgroundColorArray[2]},
    0.5)`
document.querySelector(`#${this.id} p`).style.background = `rgba(
    ${backgroundColorArray[0]},
    ${backgroundColorArray[1]},
    ${backgroundColorArray[2]},
    0.75)`
//mAKE active
this.setAttribute("custom-bool","active")
}
else {
    console.log('is now active')
    this.setAttribute("custom-bool","inactive")
    this.style.background = `rgba(
        ${backgroundColorArray[0]},
        ${backgroundColorArray[1]},
        ${backgroundColorArray[2]},
        1.0)`

    document.querySelector(`#${this.id} p`).style.background =""
}

    //set the outer div
    this.style.background = `rgba(
                                  ${backgroundColorArray[0]},
                                  ${backgroundColorArray[1]},
                                  ${backgroundColorArray[2]},
                                  0.5)`;
    document.querySelector(`#${this.id} p`).style.background =`rgba(
                                  ${backgroundColorArray[0]},
                                  ${backgroundColorArray[1]},
                                  ${backgroundColorArray[2]},
                                  0.75)`;
    }
    function getColorObj(inColor) {
        let substringColor = inColor.substring(
        inColor.indexOf("(") + 1,
        inColor.indexOf(")")
     );
        let rgbArray = [];
        rgbArray = substringColor.split(",");
        return rgbArray;
    }
}
