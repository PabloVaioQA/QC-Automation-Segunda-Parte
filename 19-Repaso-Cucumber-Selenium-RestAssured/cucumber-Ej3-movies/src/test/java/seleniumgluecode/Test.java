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
import java.util.List;
import java.util.Random;

public class Test {

    SoftAssert softAssert = new SoftAssert();
    String mList;
    String movie;
    WebDriver driver = new FirefoxDriver();

    @Given("I am an user at the Wikipedia WebPage requesting SW Movie {int}")
    public void i_am_an_user_at_the_wikipedia_web_page_requesting_sw_movie(Integer int1) {

        Random num = new Random( );
        int num2 = num.nextInt(5) + 1;
        System.out.println(num2);
        Response response;
        String url = "https://swapi.dev/api";
        response = RestAssured.given().get(url + "/films/" + (num2));
        //softAssert.assertEquals(response.getStatusCode(), 200);
        JsonPath jsonPath = response.jsonPath();
        movie = jsonPath.get("title");
        System.out.println(movie);
    }
    @When("I search the requested Movie name on Wikipedia search page")
    public void i_search_the_requested_movie_name_on_wikipedia_search_page() {

        driver.navigate().to("https://www.wikipedia.org/");

        WebElement busqueda = driver.findElement(By.id("searchInput"));
        busqueda.isDisplayed();
        busqueda.isEnabled();
        busqueda.sendKeys(movie);

        WebElement boton = driver.findElement(By.cssSelector(".pure-button"));
        boton.isDisplayed();
        boton.isEnabled();
        boton.click();
    }
    @When("I click on the Wikipedia Movie edit page")
    public void i_click_on_the_wikipedia_movie_edit_page() {

        WebElement verHistorial  = driver.findElement(By.id("ca-history"));
        verHistorial.isDisplayed();
        verHistorial.isEnabled();
        verHistorial.click();

    }
    @Then("I should be able to see the edit page displayed correctly for the requested random Movie.")
    public void i_should_be_able_to_see_the_edit_page_displayed_correctly_for_the_requested_random_movie() {

        WebElement titulo  = driver.findElement(By.id("firstHeading"));
        titulo.isDisplayed();
        titulo.isEnabled();
        softAssert.assertTrue(titulo.getText().contains(movie));
        driver.close();
    }



}
