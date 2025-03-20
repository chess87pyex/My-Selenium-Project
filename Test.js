const {By,Key,Builder, Actions} = require("selenium-webdriver");

require("geckodriver");

async function example(){

    //var searchString = "Automation testing with Selenium and JavaScript";
 
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("firefox").build();

    //To fetch http://google.com from the browser with our code.
     await driver.get("https://www.saucedemo.com/");

     username ="standard_user"
     password="secret_sauce"

     first_name= "Carl"
     last_name="Mayer"
     zip_code="12345"
    

    // Login mit vorhanden User daten 
     await driver.findElement(By.xpath('//*[@id="user-name"]')).sendKeys(username);
     await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(password);
     await driver.findElement(By.xpath('//*[@id="login-button"]')).submit();
     
    //Hinzufügen von Element in den Warenkorb

     await driver.manage().window().maximize()
     element = await driver.findElement(By.id("item_4_title_link")).sendKeys(Key.RETURN)
    
     await driver.findElement(By.id("add-to-cart")).click()
     await driver.findElement(By.id("back-to-products")).click()
    
     await driver.findElement(By.id("item_3_title_link")).sendKeys(Key.RETURN)
     await driver.findElement(By.id("add-to-cart")).click()
     await driver.findElement(By.id("back-to-products")).click()
     //Einkauf beenden und auf das Shopping Cart klicken Checkout
     await driver.findElement(By.xpath('//*[@id="shopping_cart_container"]')).click()
     await driver.findElement(By.id('checkout')).click()
     //User Info eingeben 
     await driver.findElement(By.id("first-name")).sendKeys(first_name)
     await driver.findElement(By.id("last-name")).sendKeys(last_name)
     await driver.findElement(By.id("postal-code")).sendKeys(zip_code)  
     await driver.findElement(By.id("continue")).click() 
     
     //Überischt Kontrolle
     //Ausgabe als Text in der Konsole von Info und Preis
     PaymentInfo = await driver.findElement(By.css("div.summary_value_label")).getText('payment-info-value')
     Price = await driver.findElement(By.css("div.summary_total_label")).getText('total-label')
     console.log("Payment Information:"+ PaymentInfo)
     console.log("Price:"+ Price)
     //Exit Button
     await driver.findElement(By.id("finish")).click() 
     //It is always a safe practice to quit the browser after execution
     await driver.quit();
  
     
}


example()
