@signup
Feature: Outreach Registration and Account Setup for all 3 Applicant Types
This feature facilitates the end-to-end registration and account setup process for prospective Outreach applicants — including Applicants, Teachers, and Guardians — via the My Imperial portal. 
It ensures a secure, user-friendly onboarding experience through robust email verification, meticulous personal information capture, and dynamic user-specific messaging, thereby empowering users to seamlessly access the Imperial application system.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Holistic Registration and Account Setup Workflow                                                                                                                                                   |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1. Applicant Type Selection
    Prospective users explicitly identify their applicant category (Applicant, Teacher, Guardian) to tailor the registration process accordingly.                      |
2. Secure Email Verification
    Users enter a valid email address, request a one-time verification code, and submit the received code to confirm their identity.                                   |
3. Password Establishment
    Following successful email verification, users create a secure password that complies with portal security standards, ensuring account integrity.                  |
4. Detailed Personal Information Entry
    Users provide all mandatory personal details pertinent to their applicant type, including display name, given name, and surname.                                   |
5. Formal Account Creation
    Users submit the completed registration form, triggering backend validation and account provisioning workflows.                                                    |
6. Personalized Welcome Messaging
    Upon successful registration, users are greeted with a customized welcome message featuring their registered given name, enhancing engagement and user experience. |

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Validation and Quality Assurance Criteria
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
1. Data Completeness
    Mandatory fields must be rigorously validated prior to form submission to guarantee data completeness and accuracy.                                                                                                       |
2. Password Security
    Password input fields remain disabled until the applicant successfully verifies their email to uphold security protocols.                                                                                                 |
3. Verification Code Flow 
    Verification codes must be dispatched promptly and accepted seamlessly to avoid friction in the verification process.                                                                                                     |
4. Personalized Messaging
    The system dynamically personalizes the welcome message, incorporating the applicant’s given name to foster a sense of individual recognition.                                                                            |
5. Test Artifacts
    Captured screenshots of each critical registration phase and the welcome confirmation are systematically archived and linked to test reports to ensure traceability, audit readiness, and continuous quality improvement. |
# Start scenario

  @valid
  Scenario Outline: "<OutreachApplicantType>" - Successful registration of a new "<OutreachApplicantType>" via the Outreach portal
    Given selects the "<applicationType>" option
    Then the page title should be "<UserDetailsPageTitle>"
    When the user enters a valid email address
    And the user requests an email verification code
    Then a verification code should be sent to the generated email
    Then the password fields should be disabled before verification
    When the user enters the correct verification code
    Then user requests to validate the verification code
    Then the password fields should be enabled after verification
    And the user should be prompted to create a secure password "*********"
    And provides the following personal details
      | DisplayName           | <DisplayName>           |
      | GivenName             | <GivenName>             |
      | Surname               | <Surname>               |
      | OutreachApplicantType | <OutreachApplicantType> |
    And submits the registration form by clicking Create
    Then application portal should display the page title as "<MyImperialTitle>"
    And the user should be greeted with the welcome message "<WelcomeTitle>"

    Examples:
      | applicationType | UserDetailsPageTitle | DisplayName                          | GivenName                          | Surname                         | OutreachApplicantType | MyImperialTitle         | WelcomeTitle                                 |
      | Outreach        | User details         | Outreach Applicant Display Name      | Outreach Applicant Given Name      | Outreach Applicant SurName      | Applicant             | My Imperial My Imperial | Welcome, Outreach Applicant Given Name!      |
      | Outreach        | User details         | Outreach ParentGuardian Display Name | Outreach ParentGuardian Given Name | Outreach ParentGuardian SurName | Parent/Guardian       | My Imperial My Imperial | Welcome, Outreach ParentGuardian Given Name! |
      | Outreach        | User details         | Outreach Teacher Display Name        | Outreach Teacher Given Name        | Outreach Teacher SurName        | Teacher               | My Imperial My Imperial | Welcome, Outreach Teacher Given Name!        |

  @invalid
  Scenario Outline: Registration attempt with invalid email format should return expected error message
    Given selects the "<applicationType>" option
    Then the page title should be "<UserDetailsPageTitle>"
    When the user enters an invalid email address
    Then the system should show an error message
    Then the password fields should be disabled before verification

    Examples:
      | applicationType | UserDetailsPageTitle |
      | Outreach        | User details         |
