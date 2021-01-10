Feature: Pedir una orden sin el cupon de bienvenida
As
User Wappi
I want 
    get an order without coupon  

@Test
Scenario: login into at Wappi platfom with credential and get an order without cuopon 
    Given I open to page with user and password 
    When get "Aceite de Girasol" and "Pan tajado"
    Then Validate information in the view my orders 
