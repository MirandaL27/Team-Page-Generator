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

const createCSSObj = classArray =>{
    
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