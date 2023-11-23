var isTerminated;

describe("My Login application", () => {
  it("go to url", async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.pause(5000);
  });

  it("click the username field", async () => {
    const inputSelector = $('//*[@id="user-name"]');
    await inputSelector.click();
    browser.saveScreenshot("/tmp/screenshot1.png");
  });

  it("setvalue to username", async () => {
    const inputSelector = $('//*[@id="user-name"]');
    await inputSelector.setValue("standard_user");
    browser.saveScreenshot("/tmp/screenshot1.png");
  });

  it("click on the password field and set password", async () => {
    const RenderSelector = $('//*[@id="padssdsdssword"]');
    try {
      await RenderSelector.click();
      isTerminated = false;
    } catch (error) {
      isTerminated = true;
    }

    browser.saveScreenshot("/tmp/screenshot2.png");
    const RenderSelectors = $('//*[@id="password"]');

    await RenderSelectors.setValue("secret_sauce");

    browser.saveScreenshot("/tmp/screenshot3.png");

    await browser.pause(5000);
  });

  it("click on the login based on the condition", async () => {
    if (isTerminated === false) {
      browser.saveScreenshot("/tmp/screenshot4.png");
    } else if (isTerminated === true) {
      await browser.pause(1000);
      // await browser.deleteSession();
      // process.exit(0);
    }
  });

  it("click the login", async () => {
    const login = $('//*[@id="login-button"]');
    await login.click();
    await browser.pause(1000);
    browser.saveScreenshot("/tmp/screenshot5.png");
  });
});
