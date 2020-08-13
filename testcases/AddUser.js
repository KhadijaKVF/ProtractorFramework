describe("Elements Suite", function(){

    beforeAll(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
        browser.sleep(7000);

        browser.manage().window().maximize();

        // verifying Url

        expect(browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/webtables/');
    })

    it("add new User" , function(){
      
        // Add user 
        
        browser.sleep(2000);


        var add_user = element.all(by.css('button[ng-click="pop()"]')).first();  //getting first element with same ng-click value
        
        expect(add_user.isPresent()).toBe(true);
       
        add_user.click();
 
 
        element(by.name("FirstName")).sendKeys("Khadija");


        element(by.name("LastName")).sendKeys("Asif");


        element(by.name("UserName")).sendKeys("Khadija123");


        element(by.name("Password")).sendKeys("121212");
       
        browser.sleep(3000);

        //ng-repeater and getting row index

        element(by.repeater("option in column.options").row(1)).click();
        
        //ng-options -> select dropDown


       //verifying elements count options in dropdown


        element(by.name("RoleId")).click();
        
        let allOptions = element.all(by.options('c.Value as c.Text for c in column.options'));

         expect(allOptions.count()).toEqual(4);
    
        //selecting specific option

        var firstOption =  element.all(by.options('c.Value as c.Text for c in column.options')).get(1); //ng-options -> getting index 1 value 
        
        expect(firstOption.getText()).toEqual('Sales Team');

        console.log("Value matched");

        firstOption.click();

        //  var firstOption = allOptions.first(); //selecting first option

        element(by.name("Email")).sendKeys("khadija.asif@kualitatem.com");

        element(by.name("Mobilephone")).sendKeys("03344495537");
        
        element(by.css('button[ng-click="save(user)"]')).click();
        
        browser.sleep(5000);

    });
});