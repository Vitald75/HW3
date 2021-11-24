// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

describe("Check app", function () {
  async function waitForText(selector, text, timeout) {
    //const elem = await selector;
    await browser.waitUntil(async function () {
        return (await $("#status").getText()) === text }, 
        {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
    });

  };


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
    await $("#status").click();
    await browser.pause(2000);
    
    const selector = "$('#status')"; 
    const result = waitForText(selector, 'Active111', 5000);
    console.log(result);
    
    //await browser.pause(15000);
    //const titlePortal = await browser.getTitle();
    //if (titlePortal !== "Report portal") {
    //  throw new Error("You don`t login into system!!!");
    //}

    
    //console.log(userData);
   
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
