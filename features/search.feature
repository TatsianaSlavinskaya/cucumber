 Feature: search
 
 Scenario: search
 Given I navigate to "https://www.kinopoisk.ru/"
  Then I search film as "star wars"
  Then I check film's title as "Звёздные войны: Эпизод 4 – Новая надежда" and producer as "Джордж Лукас"
  Then I click on extended search 
  Then I input film's name "war" and year "1995"
  Then I check film's name after extended search as "Кровь и железо: История немецкой военной машины (мини-сериал)"
  Then I click on extended search by actor
  Then I cheсk extended search by actor as "Леонардо"