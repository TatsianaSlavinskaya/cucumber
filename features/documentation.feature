
Feature: Example feature


  Scenario: visit page and login
  Given I navigate to "https://www.kinopoisk.ru/"
	When user logs in using Username as "TatsianaSlavinskaya" and Password "tanya231195"
	Then login should be successful as "Профиль: TatsianaSlavinskaya"

 


