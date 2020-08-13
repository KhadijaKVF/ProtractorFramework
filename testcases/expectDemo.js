describe("Expect dEMO", function()
{
    it("expectTest" , function(){
//Test 1

     //   let a = 40;
      //  expect(a).toBe(40); //ToBe
      //  expect(a).not.toBe(400); //nOt To be

     //   expect(a).toEqual(40); //Equal
      //  expect(a).not.toEqual(140); //Not Equal

//Test 2
    //  let x = [10 , 27 , 33];
    //  expect(x).toBe([10 , 27 , 33]); //failed -> object values get by toBe only
    //    expect(x).toEqual([10 , 27 , 33]); //passed  -> primitive values get by using toEqual

//Test 3
// let x = [10 , 27 , 33];
// let y = x;
// expect(x).toBe(y);


//Test 4
// browser.get('http://cafetownsend-angular-rails.herokuapp.com/login')
// expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails');
    
// expect(browser.getTitle()).toContain('AngularJS-Rails'); //toContain -> partialText to get title

//Test 5
// let arr = [12 , 56 , 90 , 56 , 45];
// expect(arr).toContain(56); //passed becoz 56 is present
// expect(arr).not.toContain(1256); //passed


//Test 6

// let names =["ALI" , "DAVID" , "JOHN"];
// expect(names).toContain("ALI");
// })

//Test 7

// let value = 100;
// expect(value).toBeGreaterThan(50);
// expect(value).toBeLessThan(200);


//Test 8

let value = 100;
expect(value).not.toBeNaN(); //NaN -> not a number , not.NaN -> should be a number

expect(value).not.toBeNull(); //toBeNull -> null  


})
})

//By using toBe -> we can only compare objectvalues not object thats Expected [ 10, 27, 33 ] to be [ 10, 27, 33 ].
// toBe vs toEqual -> difference in working objects