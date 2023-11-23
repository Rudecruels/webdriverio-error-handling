var isTerminated;

describe("My Login application", () => {
  it("go to url", async function () {
    await browser.url("https://www.saucedemo.com/");
  });
  it("go to url", async function () {
    await expect(browser).toHaveTitle("sauseDemo");
  });
  it("go to url", async function () {
    await $('//*[@id="user-name"]').click();
  });
  it("go to url", async function () {
    await $('//*[@id="user-name"]').setValue("standarduser");
  });
  it("go to url", async function () {
    await $('//*[@id="padssdsdssword"]').click();
  });
  it("go to url", async function () {
    await $('//*[@id="passwoqqqrd"]').setValue("standarduser");
  });
  it("go to url", async function () {
    await $('//*[@id="login-button"]').click();
  });
});
