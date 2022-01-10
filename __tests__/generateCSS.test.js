const generateCSS = require('../src/generateCSS');

test("testing the output of the createCCSRule helper function", () =>{
    let cssObj = {
        selector: '.manager',
        propertyValuePairs : [{property:"background-color",value:"blue"},{property:"color",value:"white"}]
    }
    expect(generateCSS.createCSSRule(cssObj)).toMatch(/[.]manager{[\s]*background-color: blue;[\s]*color: white;[\s]*}/);
})

