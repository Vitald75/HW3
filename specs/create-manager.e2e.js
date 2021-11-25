// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

describe("Create manager", function () {
  /*async function fillFormUsingJson(jsonUserData) {
    //const userData = JSON.parse(jsonString)
    //browser.debug();
    await $("#email").addValue(jsonUserData.email);
    await $("#password").addValue(jsonUserData.password);
    await $("#address1").addValue(jsonUserData.address1);
    await $("#address2").addValue(jsonUserData.address2);
    await $("#city").addValue(jsonUserData.city);
    await $("#zip").addValue(jsonUserData.zip);
    await $("#description").addValue(jsonUserData.description);
    await browser.pause(500);
    await $("button[type='submit']").click();
  }*/

  before ("Login with credentials walker@jw.com:password", async function(){
    await browser.url("https://viktor-silakov.github.io/course-sut/index.html?quick");
    await $("#login").setValue("walker@jw.com");
    await $("#password").setValue("password");
    await $("button").click();
    await await $("#spinner").waitForDisplayed({
      reverse: true,
      timeout: 5000,
    });
  })

  it("should open Create manager form, fill from Json string", async function () {
    const titlePortal = await browser.getTitle();
    if (titlePortal !== "Report portal") {
      throw new Error("You don`t login into system!!!");
    }
    await $("a[href='./formManager.html']").click();
    
    const titleUserForm = await browser.getTitle();
    if (titleUserForm !== "User form") {
      throw new Error("You don`t open User form page!!!");
    }

    await $("#email").addValue("userManager@company.com");
    await $("#password").addValue("1452qw");
    await $("#address1").addValue("addr1");
    await $("#address2").addValue("addr2");
    await $("#state").addValue("state of ");
    await $("#zip").addValue("220000");
    await $("#description").addValue("some descriptions");
    
    await $("#demo-balance").click();
    await $("#wait-supervisor").click();
    await $("input[value='country']").click();
    await $("input[name='city']").addValue("Montreal");

    const list = await $("#autoComplete_list_1");
    console.log(list.getValue());
   
    await list.selectByVisibleText('0 USA');

    //await list.selectByIndex(3);
    //const result = await list.getValue();
    //await $("input[name='city']").setValue(result);
    

    //await radiocheck.checked = true ;
    //await radiocheck.selectByVisibleText('Demo balance');

    //await $("#wait-supervisor").se
    await browser.pause(5000);
    //await $("button[type='submit']").click();

    //const stringJson = '{ "email" : "email.com", "password" : "Passw", "address1" : " ffs", "address2" : " аворпорорва ", "city" : " Minsk", "zip": "220000", "description": "fdkuhjhf kh fksjhkjfhse k"}';
    //const dataJson = JSON.parse(stringJson);
    //await fillFormUsingJson(dataJson);
    await browser.pause(3000);
  });
});
