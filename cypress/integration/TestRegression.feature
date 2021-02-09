Feature: Pedir una orden con el cupon de bienvenida
As
User Wappi
I want 
    get an order with coupon  
  Background:
    Given I open to page with user and password 

  Scenario: login into at Wappi platfom with credential and get an order without cuopon 
    When get "Aceite de Girasol" and "Pan tajado"
    Then Validate information in the view my orders

  Scenario: login into at Wappi platfom with credential and get an order 
    When I clicked in coupon button
    And validate "2" user and generate code
    And get "Aceite de Girasol" and "Jamón Premium"
    Then Validate information in my orders

    