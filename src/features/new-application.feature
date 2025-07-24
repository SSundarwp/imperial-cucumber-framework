# Feature describes submitting GSS applications and validating the calculated WP score
@wp
Feature: Submission of Outreach Application
# Scenario Outline allows running the same flow for multiple data sets from Examples

  Scenario Outline: "<TestcaseNo>" - Validate WP Score calculation for "<applicationType>" application with expected score "<expectedScore>"
    # User accesses the specified application portal
    Given The "<applicationType>" applicant accesses the "<applicationType>" application portal
    # User logs in with email and password
    When the applicant provides login credentials with email "<email>" and password "********"
    And successfully signs into the "<applicationType>" application portal
    # Validate successful login by checking page title and welcome message
    Then application portal should display the page title as "<MyImperialTitle>"
    And the user should be greeted with the welcome message "<WelcomeTitle>"
    # User navigates to dashboard and starts Outreach Application
    When the applicant navigates to the Home dashboard
    And initiates the Outreach Application process
    # Verify Outreach Application page title and start a new application
    Then the page title for Outreach Application should be "<MyOutreachTitle>"
    And the applicant starts a new application
    When selects an Unregulated Programme and its availability
    And submits the Programme Selection
    # Capture and store the generated Application ID for later reference
    And extracts and stores the generated Application ID
    # Fill Personal Details section with provided data
    Then the page title should be "<PersonalDetailsPageTitle>"
    And the form title should be "<PersonalDetailsFormTitle>"
    And the applicant provides personal details
      # | Title       | <Title>       |
      # | FirstName   | <FirstName>   |
      # | LastName    | <LastName>    |
      # | DateOfBirth | <DateOfBirth> |
    # Fill Address section with applicant's address data 
    Then the page title should be "<AddressPageTitle>"
    And the form title should be "<AddressFormTitle>"
    And the applicant enters address information
      | AddressLine1 | <AddressLine1> |
      | AddressLine2 | <AddressLine2> |
      | AddressLine3 | <AddressLine3> |
      | City         | <City>         |
      | Country      | <Country>      |
      | Postcode     | <Postcode>     |
    # # Fill Education section with qualification info
    # Then the page title should be "<EducationPageTitle>"
    # And the form title should be "<EducationFormTitle>"
    # And the applicant enters education qualification "<Qualification>"
    # # Fill Teacher Details section
    # Then the page title should be "<TeacherPageTitle>"
    # And the form title should be "<TeacherFormTitle>"
    # And the applicant provides teacher details:
    #   | Title     | <TeacherTitle>     |
    #   | FirstName | <TeacherFirstName> |
    #   | LastName  | <TeacherLastName>  |
    #   | Email     | <TeacherEmail>     |
    # # Fill Guardian Details section
    # Then the page title should be "<GuardianPageTitle>"
    # And the form title should be "<GuardianFormTitle>"
    # And the applicant provides guardian details:
    #   | Title     | <GuardianTitle>     |
    #   | FirstName | <GuardianFirstName> |
    #   | LastName  | <GuardianLastName>  |
    #   | Email     | <GuardianEmail>     |
    # # Fill "More About You" section with detailed background info
    # And the applicant provides additional background information:
    #   | FreeSchoolMeals       | <FreeSchoolMeals>       |
    #   | HouseHoldIncome       | <HouseHoldIncome>       |
    #   | PupilPremium          | <PupilPremium>          |
    #   | CareFromAge           | <CareFromAge>           |
    #   | CareToAge             | <CareToAge>             |
    #   | DurationInCare        | <DurationInCare>        |
    #   | YoungCarer            | <YoungCarer>            |
    #   | MoreDetails           | <MoreDetails>           |
    #   | FirstGeneration       | <FirstGeneration>       |
    #   | FirstGenRelationship  | <FirstGenRelationship>  |
    #   | FirstGenOccupation    | <FirstGenOccupation>    |
    #   | FirstGenGuardian      | <FirstGenGuardian>      |
    #   | FirstGenUniversity    | <FirstGenUniversity>    |
    #   | FirstGenLevel         | <FirstGenLevel>         |
    #   | FirstGenSubject       | <FirstGenSubject>       |
    #   | Estranged             | <Estranged>             |
    #   | GTRSB                 | <GTRSB>                 |
    #   | RefugeeOrAsylumSeeker | <RefugeeOrAsylumSeeker> |
    #   | MilitaryFamily        | <MilitaryFamily>        |
    #   | Veteran               | <Veteran>               |
    # # Fill Personal Statement section
    # Then the page title should be "<PersonalStatementPageTitle>"
    # And the form title should be "<PersonalStatementFormTitle>"
    # And the applicant enters a personal statement "<PersonalStatement>"
    # # Fill Disability section
    # Then the page title should be "<DisabilityPageTitle>"
    # And the form title should be "<DisabilityFormTitle>"
    # And the applicant provides disability details "<Disability>"
    # # Fill Marketing Preferences section
    # Then the page title should be "<MarketingPageTitle>"
    # And the form title should be "<MarketingFormTitle>"
    # And the applicant provides marketing preference "<Marketing>"
    # # Review & Submit section: accept terms and submit application
    # Then the page title should be "<ReviewPageTitle>"
    # And the form title should be "<ReviewFormTitle>"
    # And the applicant accepts the terms and conditions "<TermsAccepted>"
    # And submits the completed application
    # # Validate successful submission confirmation and check WP Score
    # Then the system should confirm successful submission
    # And the calculated WP Score should be "<ExpectedWPScore>"

    Examples:
      | TestcaseNo   | applicationType | applicantType | expectedScore | email                          | password   | MyImperialTitle         | WelcomeTitle                 | MyOutreachTitle         | PersonalDetailsPageTitle | PersonalDetailsFormTitle | Title | FirstName          | LastName           | DateOfBirth | AddressPageTitle | AddressFormTitle | AddressLine1    | AddressLine2 | AddressLine3 | City   | Country | Postcode | EducationPageTitle | EducationFormTitle | Qualification | TeacherPageTitle | TeacherFormTitle | TeacherTitle | TeacherFirstName | TeacherLastName | TeacherEmail          | GuardianPageTitle | GuardianFormTitle | GuardianTitle | GuardianFirstName | GuardianLastName | GuardianEmail         | FreeSchoolMeals | HouseHoldIncome | PupilPremium | CareFromAge | CareToAge | DurationInCare | YoungCarer | MoreDetails           | FirstGeneration | FirstGenRelationship | FirstGenOccupation | FirstGenGuardian | FirstGenUniversity  | FirstGenLevel | FirstGenSubject | Estranged | GTRSB           | RefugeeOrAsylumSeeker | MilitaryFamily | Veteran | PersonalStatement                         | PersonalStatementPageTitle | PersonalStatementFormTitle | DisabilityPageTitle | DisabilityFormTitle | Disability | MarketingPageTitle | MarketingFormTitle | Marketing | ReviewPageTitle   | ReviewFormTitle | TermsAccepted | ExpectedWPScore |
      | TestCase_001 | Outreach        | Applicant     |           320 | gssapplicationuser+4@gmail.com | Imperial1$ | My Imperial My Imperial | Welcome, GSSApplicationUser! | My Outreach Application | Outreach                 | Personal Details         | Mr    | GSSApplicationUser | GSSApplicationUser |  01/01/2005 | Outreach         | Address          | 123 High Street | Apt 4B       | Block C      | London | UK      | W1A 1AA  | Education Details  | Qualification Form | A Levels      | Teacher Details  | Teacher Form     | Mr           | Alan             | Smith           | alan.smith@school.com | Guardian Details  | Guardian Form     | Mrs           | Emma              | Johnson          | emma.johnson@mail.com | Yes             | £16,000–£25,000 | Yes          |           7 |        10 |      1–3 years | Yes        | I care for my sibling | Yes             | Mother               | Nurse              | Yes              | University of Leeds | Bachelor's    | Biology         | Yes       | Irish Traveller | No                    | Yes            | Yes     | I am passionate about healthcare careers. | Personal Statement         | Personal Statement Form    | Disability Details  | Disability Form     | No         | Marketing Details  | Marketing Form     | Email     | Review and Submit | Review Form     | Yes           | High            |
