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
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails');




    });

 });