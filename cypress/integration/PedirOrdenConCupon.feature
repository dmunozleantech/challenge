Feature: Pedir una orden con el cupon de bienvenida
As
User Wappi
I want 
    get an order with coupon  

@Test
Scenario: login into at Wappi platfom with credential and get an order 
    Given I open to page with user and password 
    When I clicked in coupon button
    And validate "2" user and generate code
    And get "Aceite de Girasol" and "Jamón Premium"
    Then Validate information in my orders 
