describe("First Describe", function()
{
   
    it("first it block", function(){
       
        //steps

        console.log("This is my 1st Search Test...");
        expect(true).toBe(true);
    });

  

    });

    xdescribe("Second Describe", function()
{
   
    it("second it block", function(){
       
        //steps

        console.log("This is my 2nd Search Test...");
        expect(true).toBe(true);
    });

  

    });

    fdescribe("Third Describe", function()
{
   
    it("third it block", function(){
       
        //steps

        console.log("This is my 3rd Search Test...");
        expect(true).toBe(true);
    });

  

    });

    //Spec file can have multiple describe block 
    //FDescribe Block -> fdescribe -> Focused Describe ->  specify to run specific block only , rest of them will be ignored
    //XDescribe Block -> xdescribe -> disable describe block