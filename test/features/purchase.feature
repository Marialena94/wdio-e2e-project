@positive @purchase
Feature: Products and checkout

    Background:
        Given the user succeeds in login to the website

    @standard-user
    Scenario: Login and sort products by price, add cheapest products to cart, and proceed to checkout
        Then exactly "6" products are displayed on the product page
        When the user attempts to sort the products by "Price low to high" on the product page
        Then the first product displayed is the cheapest on the product page
        When the user attempts to add the 2 cheapest products to the cart on the product page
        Then the cart badge with 2 is displayed on the product page
        Given the user is successfully navigated to the cart page
        Then all selected products are displayed with correct names and prices on the cart page
        Given the user succeeds in proceeding to checkout page
        When the user attempts to proceed to checkout by filling in the required information on checkout page
            | firstName  | user  |
            | lastName   | Test  |
            | postalCode | 15125 |
        Then the checkout overview page should be displayed
        When the user attempts to click finish button on checkout page
        Then the order confirmation message should be displayed on checkout page
