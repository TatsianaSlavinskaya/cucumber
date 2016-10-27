 Feature: search
 
 Scenario: search
 Given I navigate to "https://www.kinopoisk.ru/"
  Then I input film's name as "star wars"
  Then I click on buuton to saerch
  Then I check film's title as "Звёздные войны: Эпизод 4 – Новая надежда" and producer as "Джордж Лукас"
  Then I click on extended search 
  Then I input film's name "war" and year "1995"
  Then I check film's name after extended search as "Кровь и железо: История немецкой военной машины (мини-сериал)"
  Then I click on extended search by actor
  Then I cheсk extended search by actor as "Леонардо"

 Scenario: check links
 Given I navigate to "https://www.kinopoisk.ru/"
  Then I click on link support
  Then I click on what people looking for
  #Then I click on return to home page 
