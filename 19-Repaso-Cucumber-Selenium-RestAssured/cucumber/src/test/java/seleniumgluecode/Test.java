package seleniumgluecode;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.asserts.SoftAssert;

import java.sql.Driver;

public class Test {
    SoftAssert softAssert = new SoftAssert();
    String name;
    WebDriver driver = new FirefoxDriver();
    @Given("I am an user at the Wikipedia WebPage requesting SW character {int}")
    public void i_am_an_user_at_the_wikipedia_web_page_requesting_sw_character(Integer int1) {

        Response response;
        String url = "https://swapi.dev/api";
        response = RestAssured.given().get(url + "/people/" + int1);
        softAssert.assertEquals(response.getStatusCode(), 200);
        JsonPath jsonPath = response.jsonPath();
        name = jsonPath.get("name");

    }
    @When("I search the requested character name on Wikipedia search page")
    public void i_search_the_requested_character_name_on_wikipedia_search_page() {
        driver.navigate().to("https://www.wikipedia.org/");

        WebElement busqueda = driver.findElement(By.id("searchInput"));
        busqueda.isDisplayed();
        busqueda.isEnabled();
        busqueda.sendKeys(name);

        WebElement boton = driver.findElement(By.cssSelector(".pure-button"));
        boton.isDisplayed();
        boton.isEnabled();
        boton.click();
    }
    @Then("I should be able to see the article page correctly displayed for the requested character")
    public void i_should_be_able_to_see_the_article_page_correctly_displayed_for_the_requested_character() {
        WebElement titulo  = driver.findElement(By.cssSelector(".mw-page-title-main"));
        titulo.isDisplayed();
        titulo.isEnabled();
        softAssert.assertEquals(titulo.getText(),name);
        driver.close();
    }


}
