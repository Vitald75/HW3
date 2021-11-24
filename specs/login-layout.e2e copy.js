// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe("Check app", function () {
  async function fillFormUsingJson(dataJson) {}

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

    const dataJson = {
      email: "email.com",
      password: "Passw",
      address1: " ffs",
      address2: " аворпорорва ",
      city: " Minsk",
      zip: "220000",
      description: "fdkuhjhf kh fksjhkjfhse k",
    };

    await $("#email").addValue("test@my_email.com");
    await $("#password").addValue("my pass");
    await $("#address1").addValue("my diuy ndljkdj lk email");
    await $("#address2").addValue("my duhdudhy email");
    await $("#city").addValue("Grodno");
    await $("#zip").addValue("230000");
    await $("#description").addValue("description jhgjhgf jg jhghjg");

    await $("button[type='submit']").click();

    //const menuElements = await $$("#first-nav-block>a[href='./formUser.html']");
    // const createUserElement = await $("a[href='./formUser.html']");
    // createUserElement.click();

    await browser.pause(5000);

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
