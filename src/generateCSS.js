const createCSSRule = cssObj => {
    let {selector, propertyValuePairs} = cssObj;

    propertyValuePairs = propertyValuePairs.map(data => `${data.property}: ${data.value};`);
    return `${selector}{
        ${propertyValuePairs.join("\r\n")}
    }`
}

const parseHTML  = html => {
    //takes in html as string and returns array of class names.
    //find strings that are immediately preceded by class = " and immediately followed by "
    //add periods to class selectors
    //add header class if html contains header
    const regexStr = /class="[^"]*"/g;
    let classArray = Array.from(html.matchAll(regexStr)).map(data => data[0]);
    classArray = classArray.map(data => "." + data.replaceAll("\"","").replaceAll("class=", ""));
    if(html.includes("<header>")){
        classArray.unshift("header");
    }
    return classArray;
}

const createCSSObj = (classArray, stylingObj)=>{
    //header,manager,engineer,intern, and container
    //remove duplicates from classArray
    let set = new Set(classArray);
    classArray = Array.from(set);

    cssObjArray = [];
    classArray.forEach(data => {
        let styles = [];
        if(data.includes("header")){
            styles=stylingObj.header.split(";");
        }
        else if (data.includes("container")){
            styles = stylingObj.container.split(";");
        }
        else if (data.includes("manager")){
            styles=stylingObj.manager.split(';');
        }
        else if (data.includes("engineer")){
            styles = stylingObj.engineer.split(";");
        }
        else if (data.includes("intern")){
            styles = stylingObj.intern.split(";");
        }
        let cssObj = {
            selector: data,
            propertyValuePairs: styles.filter(data => data).map(data => {
                
                let temp = data.split(":");
                //console.log(temp[0], temp[1])
                let obj = {
                    property: temp[0].trim(),
                    value: temp[1].trim()
                }
                return obj;
            })
        }
        cssObjArray.push(cssObj);
    })
    return cssObjArray;
}


const generateCSS = () =>{
    let cssRules = [];
    //the following code is for testing purposes only!
    let cssObj = {
        selector: '.manager',
        propertyValuePairs : [{property:"background-color",value:"blue"},{property:"color",value:"white"}]
    }
    cssRules.push(createCSSRule(cssObj));
    return cssRules.join("\r\n");
}

module.exports = {generateCSS, createCSSRule, createCSSObj, parseHTML};