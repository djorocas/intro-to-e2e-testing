module.exports = {
    '@tags': ['demo'],
    'Demo test Google': function (client) {
        client
            //Path to HTML
            .url('file:///Users/djobukata/Documents/MyProjects/intro-to-e2e-testing/pages/index.html')
            .useXpath()
            .pause(1000)
            // Select input with Xpath
            .assert.visible('/html/body/form/input[1]', "Make sure that the field First name  exists")
            .setValue('/html/body/form/input[1]', 'djo')
            .assert.visible('/html/body/form/input[2]', "Make sure that the field Last name  exists")
            .setValue('/html/body/form/input[2]', 'bukata')
            .useCss()
            // Select input with css
            .assert.visible('#middlename', 'Make sure that the field Middle name exists')
            .assert.visible('#title', 'Make sure that the field Title exists')
            .setValue('#middlename', 'Mwanza')
            .setValue('#title', 'Mr')
            .useXpath()
            // Check that radio buttons exist
            .assert.visible("/html/body/form/div/input[2]", 'Make sure that female radio button exists')
            .assert.visible("/html/body/form/div/input[1]", 'Make sure that male radio button exists')
            .assert.visible("/html/body/form/div/input[3]", 'Make sure that other radio button exists')
            // Click the other radio button
            .click('/html/body/form/div/input[3]')
            // Select Drop Down(select Saab)
            .click('/html/body/form/select/option[2]')

            // File upload
            .setValue('/html/body/form/input[5]', require('path').resolve(__dirname + '/../assets/Smartseries.pdf'))
            .pause()
            .end()
    }
};

// Document upload
// .setValue('input[type="file"]', require('path').resolve(__dirname + '/../assets/Smartseries.pdf'))