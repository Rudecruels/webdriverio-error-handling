import WDIOReporter from "@wdio/reporter";

export default class CustomReporter extends WDIOReporter {
  onRunnerStart() {
    console.log("onRunnerStart");
  }
  onBeforeCommand() {
    console.log("onBeforeCommand");
  }
  onAfterCommand() {
    console.log("onAfterCommand");
  }
  onSuiteStart() {
    console.log("onSuiteStart");
  }
  onHookStart() {
    console.log("onHookStart");
  }
  onHookEnd() {
    console.log("onHookEnd");
  }
  onTestStart() {
    console.log("onTestStart");
  }
  onTestPass() {
    console.log("onTestPass");
  }
  onTestFail() {
    console.log("onTestFail");
  }
  onTestSkip() {
    console.log("onTestSkip");
  }
  onTestEnd() {
    console.log("onTestEnd");
  }
  onSuiteEnd() {
    console.log("onSuiteEnd");
  }
  onRunnerEnd() {
    console.log("onRunnerEnd");
  }
}
