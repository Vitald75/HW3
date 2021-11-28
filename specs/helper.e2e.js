// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

describe("Check app", function () {
  async function waitForText(selector, text, timeout) {
    const el = await $(`${selector}`);
    const res = await browser.waitUntil(
      async () => {
        return (await el.isDisplayed() && (await el.getText() == text)) 
      },
      {
        timeout : timeout,
        timeoutMsg : `The element - ${selector} is not displayed or is not equal ${text}` 
      }
    )
      return res;
  };

  it("should login with credentials walker@jw.com:password, press Check status button", async function () {
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
    const strSelector = '#status';
    const result = await waitForText(strSelector, 'Active', 5000);
  });
})
