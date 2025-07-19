# @wp
Feature: Open homepage on different websites

  Scenario Outline: 
    Given I open the browser and navigate to "<url>"
    Then I see the homepage

    Examples:
      | url                                                                 |
      | https://my-imperial-gss-outreach2.powerappsportals.com/SignIn?returnUrl=/ |
      | https://opensource-demo.orangehrmlive.com                            |

Scenario: Test 2
  Given I open the browser and navigate to "https://my-imperial-gss-outreach2.powerappsportals.com/SignIn?returnUrl=/"
  Then I see the homepage

Scenario: Test 3
  Given I open the browser and navigate to "https://opensource-demo.orangehrmlive.com"
  Then I see the homepage
