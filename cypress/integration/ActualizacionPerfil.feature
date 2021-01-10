Feature: Actualizacion de informacion dentro del perfil
As
User Wappi
I want 
    Updated my Personal Information

@Test
Scenario Outline: login into platfom with credential and updated  personal information 
    Given I open to page with user and password "<username>" and "<password>" 
    When I click and into information personal form
    And Validate initialized information
    And I put "<image>"  
    Then validate confirmation "<message>" is present and close

     Examples: 
      | username   | password    | image        | message   |
      | david31982 |  admin123   | true         | true      |
      | david31982 |  admin123   | false        | false     |
  