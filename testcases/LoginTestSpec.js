describe("Suite1", function()
{
 it("validate Url", function(){
       
        //steps
        
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        
        browser.sleep(5000);
        
        browser.manage().window().maximize();
        
        expect(browser.getCurrentUrl()).toBe('http://cafetownsend-angular-rails.herokuapp.com/login');




    });

    it("validate Title", function(){
       
        //steps
        
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        
        browser.sleep(3000);
        
        browser.manage().window().maximize();
        
        expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails');




    });

    it("validate Login", function(){
       
        //steps
        
        element(by.model("user.name")).sendKeys("Luke");

        element(by.model("user.password")).sendKeys("Skywalker");

        element(by.buttonText("Login")).click();

        


    });

    it("HomePage", function(){
       
        //steps

        browser.sleep(3000);

        // verifying greeeting message

        var greeting_msg = element(by.id("greetings"));
        
        expect(greeting_msg.getText()).toBe("Hello Luke"); //validating message

        //verifying Logout presence

        var logout = element(by.css('[ng-click="logout()"]'));  //css locator 
        
        expect(logout.isPresent()).toBe(true);

        logout.click();

    });
 

 });