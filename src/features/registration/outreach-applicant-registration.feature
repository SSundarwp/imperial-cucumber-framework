Feature: OutReach User Registration – Imperial Portal

  As a user of the Imperial Portal
  I want to register using email verification and personal details
  So that I can create an account and access relevant features

  Scenario Outline: Successful <UserType> registration
    Given I am on the My Imperial page
    And I select OutReach Register
    When I enter a valid email address
    And I request a verification code
    Then I should receive a verification code via email

    When I enter the correct verification code
    Then I should proceed to set a password

    When I enter a valid password
    And I provide the following personal details:
      | DisplayName           | <DisplayName>           |
      | GivenName             | <GivenName>             |
      | Surname               | <Surname>               |
      | OutreachApplicantType | <OutreachApplicantType> |
    And I select "<UserType>" as the OutReach Applicant Type
    And I click "Create Account"
    Then my <UserType> account should be created
    And I should be redirected to the <UserType> dashboard

  Examples:
    | UserType       | DisplayName | GivenName | Surname | OutreachApplicantType |
    | Applicant      | JohnDoe     | John      | Doe     | International         |
    | Parent/Guardian| JaneDoe     | Jane      | Doe     | Parent/Guardian       |
    | Teacher        | MrSmith     | John      | Smith   | Teacher               |
