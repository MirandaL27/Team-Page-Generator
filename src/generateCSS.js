const createCSSRule = cssObj => {
    let {selector, propertyValuePairs} = cssObj;

    propertyValuePairs = propertyValuePairs.map(data => `${data.property}: ${data.value};`);
    return `${selector}{
        ${propertyValuePairs.join("\r\n")}
    }`
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

module.exports = {generateCSS, createCSSRule};