const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("User is on page2 {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day2", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("The user selects the desired movie2", async function () {
  return await clickElement (
    this.page,"body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
});
Then ("The user chooses a location2", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("The user is booking tickets2", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then("The user confirms the booking2 {string}", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Забронировать");
});

Given("User is on page3 {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("The user selects the desired day3", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("The user selects the desired movie3", async function () {
  return await clickElement(
    this.page,"body > main > section:nth-child(3) > div.movie-seances__hall > ul > li:nth-child(1) > a");
});
Then ("The user chooses a location3", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("The user is booking tickets3", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("The user confirms the booking3 {string}", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Получить код бронирования");
});

Given("user is on page2 {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("user selects the desired day2", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("user selects the desired movie2", async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a"
  );
});
Then ("user selects the occupied place", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then ("user has confirmed the booking of tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Get Error {string}", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Забронировать");
});