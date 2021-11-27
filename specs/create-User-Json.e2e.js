describe("Create new user", function () {

  async function fillFormUsingJson(jsonUserData) {
    for(const key in jsonUserData.user){
      await $("a[href='./formUser.html']").click();
      const titleUserForm = await browser.getTitle();
      if (titleUserForm !== "User form") {
        throw new Error("You don`t open User form page!!!");
      }
      await $("#email").addValue(jsonUserData.user[key].email);
      await $("#password").addValue(jsonUserData.user[key].password);
      await $("#address1").addValue(jsonUserData.user[key].address1);
      await $("#address2").addValue(jsonUserData.user[key].address2);
      await $("#city").addValue(jsonUserData.user[key].city);
      await $("#zip").addValue(jsonUserData.user[key].zip);
      await $("#description").addValue(jsonUserData.user[key].description);
      await $("button[type='submit']").click(); 
    } 
  }

  before ("Login with credentials walker@jw.com:password", async function(){
    await browser.url("https://viktor-silakov.github.io/course-sut/index.html?quick");
    await $("#login").setValue("walker@jw.com");
    await $("#password").setValue("password");
    await $("button").click();
    await $("#spinner").waitForDisplayed({
      reverse: true,
      timeout: 5000,
    });
  })

  it("should open Create user form, fill users from Json string", async function () {
    const titlePortal = await browser.getTitle();
    if (titlePortal !== "Report portal") {
      throw new Error("You don`t login into system!!!");
    }
    // stringJson contain 2 users data  
    const stringJson = '{ "user" : [ {"email" : "email.com", "password" : "Passw", "address1" : " ffs", "address2" : " аворпорорва ", "city" : " Minsk", "zip": "220000", "description": "fdkuhjhf kh fksjhkjfhse k"}, {"email" : "email2.com", "password" : "Passw", "address1" : " ffs2", "address2" : " ав2", "city" : " Minsk2", "zip": "444444", "description": "desc"}]}';
    const dataJson = JSON.parse(stringJson);
    await fillFormUsingJson(dataJson);
    await browser.pause(3000);
  });
});
