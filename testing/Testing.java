import java.util.List;
import java.util.Random;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

class Testing {
	
	private static WebDriver webDriver;
	private static String baseUrl;
	JavascriptExecutor js = (JavascriptExecutor) webDriver;
	
	@BeforeAll
	static void setUp(){
		System.setProperty("webdriver.chrome.driver", "Enter ChromeDriver location here");
		webDriver = new ChromeDriver();
		baseUrl = "https://se-clothing-store-project.herokuapp.com/";
		webDriver.manage().window().maximize();
		
	}

	@AfterAll
	static void tearDown(){
		webDriver.close();
	}

	@Test
	void testHomePage() throws InterruptedException {
		webDriver.get("https://se-clothing-store-project.herokuapp.com/");
		WebElement homeLogo = webDriver.findElement(By.xpath("*[@id=\"navbar\"]/div/div[1]/a/img[1]"));
		homeLogo.click();
		Thread.sleep(2000);
		String currentUrl = webDriver.getCurrentUrl();
		assertEquals(currentUrl, baseUrl);
	}
	
	@Test
	void testHomePageButton() throws InterruptedException{
		webDriver.get("https://se-clothing-store-project.herokuapp.com/");
		WebElement homeButton = webDriver.findElement(By.className("link-name"));
		homeButton.click();
		Thread.sleep(2000);
		String currentUrl = webDriver.getCurrentUrl();
		assertEquals(currentUrl, baseUrl);
	}
	
	@Test
	void testSmallNavBar() throws InterruptedException{
		webDriver.get(baseUrl);
		Actions action = new Actions(webDriver);
		WebElement exampleNavBar = webDriver.findElement(By.xpath("*[@id=\"slidemenu\"]/div[2]/ul/li[5]"));
		WebElement navBarArea = webDriver.findElement(By.xpath("*[@id=\"slidemenu\"]/div[2]/ul/li[5]/ul"));
		List<WebElement> navBarOptions = navBarArea.findElements(By.tagName("a"));
		Random r = new Random();
		action.moveToElement(exampleNavBar).perform();;
		navBarOptions.get(r.nextInt(4)).click();
		Thread.sleep(3000);
		String linkTitle = webDriver.getTitle();
		System.out.println("The title of the page is" + linkTitle);
	}
	
	@Test
	void testSmallTopBar() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement topNavBar = webDriver.findElement(By.xpath("/html/body/div[4]/header/div[1]/div/div[2]/div"));
		List<WebElement> navBarOptions = topNavBar.findElements(By.tagName("a"));
		Random r = new Random();
		navBarOptions.get(r.nextInt(6)).click();
		Thread.sleep(3000);
		String linkTitle = webDriver.getTitle();
		System.out.println("The title of the page is" + linkTitle);
	}
	
	@Test
	void loginFalse() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement loginButton = webDriver.findElement(By.xpath("/html/body/div[4]/header/div[1]/div/div[2]/div/ul/li[4]/a"));
		loginButton.click();
		Thread.sleep(2000);
		WebElement typeEmail = webDriver.findElement(By.name("email"));
		typeEmail.sendKeys("testSelenium48@gmail.com");
		WebElement typePassword = webDriver.findElement(By.name("password"));
		typePassword.sendKeys("am012345");
		WebElement submitButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/button"));
		submitButton.click();
		Thread.sleep(2000);
	}
	
	@Test
	void loginCorrect() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement loginButton = webDriver.findElement(By.xpath("/html/body/div[4]/header/div[1]/div/div[2]/div/ul/li[4]/a"));
		loginButton.click();
		Thread.sleep(2000);
		WebElement typeEmail = webDriver.findElement(By.name("email"));
		typeEmail.sendKeys("testSelenium47@gmail.com");
		WebElement typePassword = webDriver.findElement(By.name("password"));
		typePassword.sendKeys("am012345");
		WebElement submitButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/button"));
		submitButton.click();
		Thread.sleep(2000);
		WebElement toastClose = webDriver.findElement(By.xpath("*[@id=\"flash-overlay-modal\"]/div/div/div[3]/button"));
		toastClose.click();
		Thread.sleep(2000);
		WebElement dots = webDriver.findElement(By.xpath("*[@id=\"navbar\"]/div/div[3]/div/div[3]/a/span"));
		dots.click();
		WebElement userProfile = webDriver.findElement(By.xpath("*[@id=\"navbar\"]/div/div[3]/div/div[3]/ul/li/ul/li[1]/a"));
		userProfile.click();
		Thread.sleep(4000);
	}
	
	@Test
	void registerFalse() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement registerButton = webDriver.findElement(By.xpath("/html/body/div[4]/header/div[1]/div/div[2]/div/ul/li[5]/a"));
		registerButton.click();
		Thread.sleep(2000);
		WebElement typeName = webDriver.findElement(By.name("name"));
		typeName.sendKeys("TestSelenium287");
		WebElement typeEmail = webDriver.findElement(By.name("email"));
		typeEmail.sendKeys("TestSelenium287@gmail.com");
		WebElement typePassword = webDriver.findElement(By.name("password"));
		typePassword.sendKeys("am012345");
		WebElement confirmPassword = webDriver.findElement(By.xpath("*[@id=\"password-confirm\"]"));
		confirmPassword.sendKeys("kl012345");
		WebElement captchaWindow = webDriver.findElement(By.xpath("*[@id=\"recaptcha-div\"]/div/div/iframe"));
		webDriver.switchTo().frame(captchaWindow);
		WebElement captcha = webDriver.findElement(By.xpath("*[@id=\"recaptcha-anchor-label\"]"));
		captcha.click();
		Thread.sleep(10000);
		webDriver.switchTo().defaultContent();
		WebElement submitButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/button"));
		submitButton.click();
		Thread.sleep(2000);
		WebElement errorMessage = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/span/strong"));
		String message = errorMessage.getText();
		System.out.println("The following message is displayed with wrong information: " + message);
	}
	
	@Test
	void registerCorrect() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement registerButton = webDriver.findElement(By.xpath("/html/body/div[4]/header/div[1]/div/div[2]/div/ul/li[5]/a"));
		registerButton.click();
		Thread.sleep(2000);
		WebElement typeName = webDriver.findElement(By.name("name"));
		typeName.sendKeys("TestSelenium287");
		WebElement typeEmail = webDriver.findElement(By.name("email"));
		typeEmail.sendKeys("TestSelenium287@gmail.com");
		WebElement typePassword = webDriver.findElement(By.name("password"));
		typePassword.sendKeys("kl012345");
		WebElement confirmPassword = webDriver.findElement(By.xpath("*[@id=\"password-confirm\"]"));
		confirmPassword.sendKeys("kl012345");
		WebElement captchaWindow = webDriver.findElement(By.xpath("*[@id=\"recaptcha-div\"]/div/div/iframe"));
		webDriver.switchTo().frame(captchaWindow);
		WebElement captcha = webDriver.findElement(By.xpath("*[@id=\"recaptcha-anchor-label\"]"));
		captcha.click();
		Thread.sleep(10000);
		webDriver.switchTo().defaultContent();
		WebElement submitButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/button"));
		submitButton.click();
		Thread.sleep(2000);
	}
	@Test
	void changeInformation() throws InterruptedException{
		WebElement nameField = webDriver.findElement(By.xpath("*[@id=\"name\"]"));
		nameField.click();
		nameField.clear();
		String newName = "TestingSelenium59";
		nameField.sendKeys(newName);
		WebElement saveButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section/div/div[2]/div/div/form/button"));
		saveButton.click();
		Thread.sleep(4000);
		WebElement toastClose = webDriver.findElement(By.xpath("*[@id=\"flash-overlay-modal\"]/div/div/div[3]/button"));
		toastClose.click();
		String nameRead = nameField.getText();
		assertEquals(nameRead, newName);
	}
	
	@Test
	void leaveComment() throws InterruptedException{
		webDriver.get(baseUrl);
		WebElement categorySelect = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/section[1]/div/nav/ul"));
		List<WebElement> navBarOptions = categorySelect.findElements(By.tagName("a"));
		Random r = new Random();
		navBarOptions.get(r.nextInt(12)).click();
		Thread.sleep(3000);
		WebElement productSelect = webDriver.findElement(By.xpath("*[@id=\"products-grid\"]"));
		List<WebElement> productOptions = productSelect.findElements(By.tagName("a"));
		productOptions.get(r.nextInt(12)).click();
		Thread.sleep(2000);
		js.executeScript("window.scrollBy(0,1000)");
		WebElement allStars = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/div[1]/section/div/div[2]/form/div[1]/div[2]/div[2]/div[2]/span[2]"));
		List<WebElement> oneStar = allStars.findElements(By.tagName("a"));
		oneStar.get(r.nextInt(5)).click();
		WebElement reviewComment = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/div[1]/section/div/div[2]/form/div[2]/div[1]/div[1]/textarea"));
		reviewComment.click();
		reviewComment.sendKeys("This is a nice article");
		WebElement receiptNumber = webDriver.findElement(By.xpath("*[@id=\"bill_number\"]"));
		receiptNumber.click();
		receiptNumber.sendKeys("396");
		WebElement captchaWindow = webDriver.findElement(By.xpath("*[@id=\"recaptcha-div\"]/div/div/iframe"));
		webDriver.switchTo().frame(captchaWindow);
		WebElement captcha = webDriver.findElement(By.xpath("*[@id=\"recaptcha-anchor-label\"]"));
		captcha.click();
		Thread.sleep(10000);
		webDriver.switchTo().defaultContent();
		WebElement postButton = webDriver.findElement(By.xpath("*[@id=\"pageContent\"]/div[1]/section/div/div[2]/form/div[2]/div[2]/button"));
		postButton.click();
		Thread.sleep(5000);
	}
}


