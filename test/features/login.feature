@authentication
Feature: User Authentication

    @locked-out-user
    Scenario: Login fails when a locked-out user attempts to log in
        Given the user is on the login page
        When the user attempts to login with a locked user to the website
        Then the login error message should be displayed