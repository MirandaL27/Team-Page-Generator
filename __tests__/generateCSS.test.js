const generateCSS = require('../src/generateCSS');

test("testing the output of the createCCSRule helper function", () =>{
    let cssObj = {
        selector: '.manager',
        propertyValuePairs : [{property:"background-color",value:"blue"},{property:"color",value:"white"}]
    }
    expect(generateCSS.createCSSRule(cssObj)).toMatch(/[.]manager{[\s]*background-color: blue;[\s]*color: white;[\s]*}[\s]*$/);
})

test("testing the output of the parseHTML helper function", () =>{
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Miranda Lane-Portfolio</title>
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
    <!--header section-->
        <header>
            <h1>Miranda Lane</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                    <li>
                        <a href="./assets/images/Resume.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    <!--hero/jumbotron section-->
        <section class="hero">
            <h2>Creative Coder</h2>
            <img src="./assets/images/madphoto.com-34_pp.jpg" alt="Miranda Lane. Profession headshot. Woman with red hair, red glasses, and hazel eyes smiling."/>
        </section>
    <!--About me section-->
        <section id="about-me" class="about-me">
            <div class="about-me-header">
                <h2>About Me</h2>
            </div>   
        </section>  
    <!--Work section-->
        <section id="work" class="work">
            <div class="work-header">
                <h2>Work</h2>
            </div>
            <div class="work-links">
            </div>
        </section>     
    <!--Contact me section-->
        <footer id="contact-me" class="contact-me">
            <div class="contact-me-header">
            </div>
            <div class="contact-me-list">
            </div>
        </footer>     
    </body>
    </html>`;
    let expected = ["header",".hero",".about-me",".about-me-header",".work",".work-header",".work-links",".contact-me",".contact-me-header",".contact-me-list"];
    expect(generateCSS.parseHTML(html)).toStrictEqual(expected);
    expect()
})

test("testing the output of the createCSSObj helper function", ()=>{
    let classArray = ["header", "employee-container","manager","engineer","intern", "intern"];
    let stylingObj = {
        header: 'background-color: blue; height: 500px; color: white; border: 3px solid black;',
        container:'display:flex;',
        manager:'background-color: red; color: white; border: 3px solid black;',
        engineer:'background-color: green; color: white; border: 3px solid black;',
        intern:'background-color: purple; color: white; border: 3px solid black;'
    }
    let result = generateCSS.createCSSObj(classArray, stylingObj);
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                selector: 'header',
                propertyValuePairs: expect.arrayContaining([
                    expect.objectContaining({property: 'background-color', value: 'blue'}),
                    expect.objectContaining({property: 'height', value: '500px'}),
                    expect.objectContaining({property: 'color', value: 'white'}),
                    expect.objectContaining({property: 'border',value: '3px solid black'})
                ])
            })
        ])
    )

    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                selector: 'employee-container',
                propertyValuePairs: expect.arrayContaining([
                    expect.objectContaining({property: 'display', value: 'flex'})
                ])
            })
        ])
    )

    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                selector: 'manager',
                propertyValuePairs: expect.arrayContaining([
                    expect.objectContaining({property: 'background-color', value: 'red'}),
                    expect.objectContaining({property: 'color', value: 'white'}),
                    expect.objectContaining({property: 'border', value: '3px solid black'})
                ])
            })
        ])
    )
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                selector: 'engineer',
                propertyValuePairs: expect.arrayContaining([
                    expect.objectContaining({property: 'background-color', value: 'green'}),
                    expect.objectContaining({property: 'color', value: 'white'}),
                    expect.objectContaining({property: 'border', value: '3px solid black'})
                ])
            })
        ])
    )
    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                selector: 'intern',
                propertyValuePairs: expect.arrayContaining([
                    expect.objectContaining({property: 'background-color', value: 'purple'}),
                    expect.objectContaining({property:'color', value:'white'}),
                    expect.objectContaining({property: 'border', value:'3px solid black'})
                ])
            })
        ])
    )
    expect(generateCSS.createCSSObj(classArray, stylingObj))
})

test("testing the output of the generateCSS function",()=>{
    const mock = jest.spyOn(generateCSS, 'getStylingObject');
    mock.mockImplementation(() => {
        return stylingObj = {
            header: 'background-color: blue; height: 500px; color: white; border: 3px solid black;',
            container:'display:flex;',
            manager:'background-color: red; color: white; border: 3px solid black;',
            engineer:'background-color: green; color: white; border: 3px solid black;',
            intern:'background-color: purple; color: white; border: 3px solid black;'
        };
    })

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
    <!--header section-->
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="manager">
            <p>name: Miranda Lane</p>
            <p>id: 1234</p>
            <p>email: m@aol.com</p>
            <p>office number: 2345</p>
        </div>
        <div class="engineer">
            <p>name: Poppy Dada</p>
            <p>id: 3456</p>
            <p>email: p@aol.com</p>
            <p>github: dada24</p>
        </div>
        <div class="intern">
            <p>name: Micheal Washington</p>
            <p>id: 4567</p>
            <p>email: w@aol.com</p>
            <p>school: UCSB</p>
        </div>
    </main>    
    </body>
    </html>`;

    expect(generateCSS.generateCSS(html)).toMatch(/header{[\s]*background-color: blue;[\s]*height: 500px;[\s]*color: white;[\s]*border: 3px solid black;[\s]*}[\s]*[.]manager{[\s]*background-color: red;[\s]*color: white;[\s]*border: 3px solid black;[\s]*}[\s]*.engineer{[\s]*background-color: green;[\s]*color: white;[\s]*border: 3px solid black;[\s]*}[\s]*.intern{[\s]*background-color: purple;[\s]*color: white;[\s]*border: 3px solid black;[\s]*}[\s]*$/);

})

