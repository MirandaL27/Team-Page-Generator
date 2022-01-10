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

const getStylingObject = () => {
    return stylingObj = {
        header: 'background-color: blue; height: 500px; color: white; border: 3px solid black;',
        container:'display:flex;',
        manager:'background-color: red; color: white; border: 3px solid black;',
        engineer:'background-color: green; color: white; border: 3px solid black;',
        intern:'background-color: purple; color: white; border: 3px solid black;'
    };
}


const generateCSS = (htmlStr) =>{
    //parse the html to get a list of class names
    //use a styling object and the class list to create an array of css objects
    //loop through the css object array and convert them to an array of strings
    //join the strings with a \r\n between each
    let classArray = parseHTML(htmlStr);
    let cssObjectArray = createCSSObj(classArray, getStylingObject())
    let cssRules = [];
    cssObjectArray.forEach(data => cssRules.push(createCSSRule(data)));
    return cssRules.join("\r\n");
}

module.exports = {generateCSS, createCSSRule, createCSSObj, getStylingObject, parseHTML};