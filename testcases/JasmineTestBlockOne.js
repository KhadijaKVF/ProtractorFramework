describe("mySuite", function()
{
    beforeAll(function()
    {
        console.log("Launching Application...");


    })

    afterAll(function()
    {
        console.log("Closing Application...");


    })
 beforeEach(function()
    {
        console.log("Welcome to Main Page...");


    })

    afterEach(function()
    {
        console.log("....GoodBye....!!!!!...");


    })
    it("SearchTest", function(){
       
        //steps
        console.log("This is my Search Test...");
        expect(true).toBe(true);
    });

    it("Advanced SEARCH" ,function(){

        //steps
        console.log("This is my Advanced SEARCH...");
        expect(true).toBe(true);
    });

    it("HelloTest" ,function(){

        //steps
        console.log("This is my test3...");
        expect(true).toBe(true);
    });

    });

    // describe represents the suite
    //---- a suite can have multiple it blocks . it blocks contains test statements
    //1 spec file can have multiple describe
    // each it block is representing 1 test
    //beforeEach anf after Each means before and after executes every It block 
    //beforeAll and afterAll means execute before and after all IT bLock time