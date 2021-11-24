// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

describe("Check app", function () {
  async function fillFormUsingJson(jsonUserData) {
    //const userData = JSON.parse(jsonString)
    //browser.debug();
    await $("#email").addValue(jsonUserData.email);
    await $("#password").addValue(jsonUserData.password);
    await $("#address1").addValue(jsonUserData.address1);
    await $("#address2").addValue(jsonUserData.address2);
    await $("#city").addValue(jsonUserData.city);
    await $("#zip").addValue(jsonUserData.zip);
    await $("#description").addValue(jsonUserData.description);
    await browser.pause(10000);
    await $("button[type='submit']").click();
  }

  it("should login", async function () {
    await browser.url(
      "https://viktor-silakov.github.io/course-sut/index.html?quick"
    );
    await $("#login").setValue("walker@jw.com");
    await $("#password").setValue("password");
    await $("button").click();
    await await $("#spinner").waitForDisplayed({
      reverse: true,
      timeout: 5000,
    });
    //await browser.pause(15000);
    const titlePortal = await browser.getTitle();
    if (titlePortal !== "Report portal") {
      throw new Error("You don`t login into system!!!");
    }

    await $("a[href='./formUser.html']").click();

    const titleUserForm = await browser.getTitle();
    if (titleUserForm !== "User form") {
      throw new Error("You don`t open User form page!!!");
    }

    const stringJson = '{ "email" : "email.com", "password" : "Passw", "address1" : " ffs", "address2" : " аворпорорва ", "city" : " Minsk", "zip": "220000", "description": "fdkuhjhf kh fksjhkjfhse k"}';
    const dataJson = JSON.parse(stringJson);

    //console.log(userData);
    
    await fillFormUsingJson(dataJson);

    //await $("button[type='submit']").click();

    //const menuElements = await $$("#first-nav-block>a[href='./formUser.html']");
    // const createUserElement = await $("a[href='./formUser.html']");
    // createUserElement.click();

    await browser.pause(10000);

    /* for (const menuElement of menuElements) {
          const textElement = await menuElement.getText();
          console.log({ textElement });
          await menuElement.moveTo();
          await browser.pause(500);
          const textBackground = await menuElement.getCSSProperty(
            "background-color"
          );
          const colorBackground = textBackground.value;
          assertBgColor(colorBackground, textElement);
        }*/
  });
});
