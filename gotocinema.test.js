const {generateName} = require("./lib/util.js");
const { getText, putText, clickElement } = require("./lib/commands.js");
const { TestWatcher } = require("jest");
const { expect } = require("chai");

let page;

describe("Service for Movie tickets order", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  afterEach(() => {
    page.close();
  });

  test ("Mickey Mouse pozitive", async() =>{ 
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".acceptin-button");
    await expect(actual).contain("Забронировать");
  })
  test ("Gone with the Wind positive", async() =>{ 
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(3) > div.movie-seances__hall > ul > li:nth-child(1) > a"); // Время
    await clickElement(page, ".buying-scheme__chair_standart");
    await page.click(".acceptin-button");
    const actual = await getText(page, ".acceptin-button");
    await expect(actual).contain("Получить код бронирования");
  })

  test ("Mickey Mouse negative", async() =>{
    await clickElement(page, ".page-nav__day:last-child");
    await clickElement(page, "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
    await clickElement(page, ".buying-scheme__chair_selected");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button", {
      visible: false,
    });
    const actual = await getText(page, ".acceptin-button");
    expect(actual).contain("Забронировать");
  });
});
  
  
  // const { clickElement, putText, getText } = require("./lib/commands.js");
  // const { generateName } = require("./lib/util.js");

  // let page;

  // beforeEach(async () => {
  //   page = await browser.newPage();
  //   await page.setDefaultNavigationTimeout(0);
  // });

  // afterEach(() => {
  //   page.close();
  // });

  // describe("Netology.ru tests", () => {
  //   beforeEach(async () => {
  //     page = await browser.newPage();
  //     await page.goto("https://netology.ru");
  //   });

  //   test("The first test'", async () => {
  //     const title = await page.title();
  //     console.log("Page title: " + title);
  //     await clickElement(page, "header a + a");
  //     const title2 = await page.title();
  //     console.log("Page title: " + title2);
  //     const pageList = await browser.newPage();
  //     await pageList.goto("https://netology.ru/navigation");
  //     await pageList.waitForSelector("h1");
  //   });

  //   test("The first link text 'Медиа Нетологии'", async () => {
  //     const actual = await getText(page, "header a + a");
  //     expect(actual).toContain("Медиа Нетологии");
  //   });

  //   test("The first link leads on 'Медиа' page", async () => {
  //     await clickElement(page, "header a + a");
  //     const actual = await getText(page, ".logo__media");
  //     await expect(actual).toContain("Медиа");
  //   });
  // });

  // test("Should look for a course", async () => {
  //   await page.goto("https://netology.ru/navigation");
  //   await putText(page, "input", "тестировщик");
  //   const actual = await page.$eval("a[data-name]", (link) => link.textContent);
  //   const expected = "Тестировщик ПО";
  //   expect(actual).toContain(expected);
  // });

  // test("Should show warning if login is not email", async () => {
  //   await page.goto("https://netology.ru/?modal=sign_in");
  //   await putText(page, 'input[type="email"]', generateName(5));
  // });
