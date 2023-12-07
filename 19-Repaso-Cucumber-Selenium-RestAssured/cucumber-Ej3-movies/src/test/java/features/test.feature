Feature: PruebaTest2
  Scenario Outline: Check Wikipedia edit page is displayed for a random Star Wars Movie
    Given I am an user at the Wikipedia WebPage requesting SW Movie <random>
    When I search the requested Movie name on Wikipedia search page
    And I click on the Wikipedia Movie edit page
    Then I should be able to see the edit page displayed correctly for the requested random Movie.

    Examples:
      |random|
      |1|
      |1|
      |1|
      |1|
      |1|
      |1|
