# Feature: Outreach application
@wp
Feature: Applicant - Submission of Outreach Application with existing login details
  This feature verifies the complete end-to-end journey of an existing Outreach applicant submitting a new application via the My Imperial portal.

  The scenario covers:
  1. Logging into the application portal with valid credentials
  2. Navigating to the Outreach application dashboard
  3. Initiating and completing a new Outreach application
  4. Providing personal, address, education, and teacher details
  5. (Optionally) entering guardian information, personal statement, and background context
  6. Accepting terms and submitting the application
  7. Validating submission success and calculating the correct WP (Widening Participation) score

  The use of Scenario Outline with example data allows automated validation across multiple applicant types, applcation details and WP score outcomes. 
  This ensures reliable scoring logic, data handling, and form flows for a variety of Outreach cases.

  Tagged with @wp for test grouping and CI filtering.

  # Start scenario
  Scenario Outline: "<TestcaseNo>" - Validate WP Score for "<applicationType>" with "<expectedScore>"
  # Access portal
    Given The "<applicationType>" applicant accesses the "<applicationType>" application portal
  # Login step
    When the applicant provides login credentials with email "<email>" and password "********"
    And successfully signs into the "<applicationType>" application portal
  # Home page
    Then application portal should display the page title as "<MyImperialTitle>"
    And the user should be greeted with the welcome message "<WelcomeTitle>"
  # Start application
    When the applicant navigates to the Home dashboard
    And initiates the Outreach Application process
    Then the page title for Outreach Application should be "<MyOutreachTitle>"
    And the applicant starts a new application
  # Programme selection
    When selects an Unregulated Programme and its availability
    And submits the Programme Selection
    And extracts and stores the generated Application ID
  # Personal details
    Then the page title should be "<PersonalDetailsPageTitle>"
    And the form title should be "<PersonalDetailsFormTitle>"
    And the applicant provides personal details
  # Address details
    Then the page title should be "<AddressPageTitle>"
    And the form title should be "<AddressFormTitle>"
    And the applicant provides address information
      | AddressLine1 | <AddressLine1> |
      | AddressLine2 | <AddressLine2> |
      | AddressLine3 | <AddressLine3> |
      | City         | <City>         |
      | Country      | <Country>      |
      | Postcode     | <Postcode>     |
  # Education details
    Then the page title should be "<EducationPageTitle>"
    And the form title should be "<EducationFormTitle>"
    And the applicant enters education qualification "<Qualification>"
  # Teacher details  
    Then the page title should be "<TeacherPageTitle>"
    And the form title should be "<TeacherFormTitle>"
    And the applicant provides teacher details
      | Title     | <TeacherTitle>     |
      | FirstName | <TeacherFirstName> |
      | LastName  | <TeacherLastName>  |
      | Email     | <TeacherEmail>     |
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
      | TestcaseNo   | applicationType | applicantType | expectedScore | email                          | password   | MyImperialTitle         | WelcomeTitle                 | MyOutreachTitle         | PersonalDetailsPageTitle | PersonalDetailsFormTitle | Title | FirstName          | LastName           | DateOfBirth | AddressPageTitle | AddressFormTitle | AddressLine1    | AddressLine2 | AddressLine3 | City   | Country        | Postcode | EducationPageTitle | EducationFormTitle | Qualification | TeacherPageTitle | TeacherFormTitle | TeacherTitle | TeacherFirstName | TeacherLastName | TeacherEmail                   | GuardianPageTitle | GuardianFormTitle | GuardianTitle | GuardianFirstName | GuardianLastName | GuardianEmail         | FreeSchoolMeals | HouseHoldIncome | PupilPremium | CareFromAge | CareToAge | DurationInCare | YoungCarer | MoreDetails           | FirstGeneration | FirstGenRelationship | FirstGenOccupation | FirstGenGuardian | FirstGenUniversity  | FirstGenLevel | FirstGenSubject | Estranged | GTRSB           | RefugeeOrAsylumSeeker | MilitaryFamily | Veteran | PersonalStatement                         | PersonalStatementPageTitle | PersonalStatementFormTitle | DisabilityPageTitle | DisabilityFormTitle | Disability | MarketingPageTitle | MarketingFormTitle | Marketing | ReviewPageTitle   | ReviewFormTitle | TermsAccepted | ExpectedWPScore |
      | TestCase_001 | Outreach        | Applicant     |           320 | gssapplicationuser+4@gmail.com | Imperial1$ | My Imperial My Imperial | Welcome, GSSApplicationUser! | My Outreach Application | Outreach                 | Personal Details         | Mr    | GSSApplicationUser | GSSApplicationUser |  01/01/2005 | Outreach         | Address          | 123 High Street | Apt 1B       | Block C      | London | United Kingdom | W1A 1AA  | Outreach           | Qualification      | A Level       | Outreach         | Teacher Details  | Mr           | Alan             | Smith           | s.sundareswaran@imperial.ac.uk | Guardian Details  | Guardian Form     | Mrs           | Emma              | Johnson          | emma.johnson@mail.com | Yes             | £16,000–£25,000 | Yes          |           7 |        10 |      1–3 years | Yes        | I care for my sibling | Yes             | Mother               | Nurse              | Yes              | University of Leeds | Bachelor's    | Biology         | Yes       | Irish Traveller | No                    | Yes            | Yes     | I am passionate about healthcare careers. | Personal Statement         | Personal Statement Form    | Disability Details  | Disability Form     | No         | Marketing Details  | Marketing Form     | Email     | Review and Submit | Review Form     | Yes           | High            |
      # | TestCase_001 | Outreach        | Applicant     |           110 | gssapplicationuser+4@gmail.com | Imperial1$ | My Imperial My Imperial | Welcome, GSSApplicationUser! | My Outreach Application | Outreach                 | Personal Details         | Mr    | GSSApplicationUser | GSSApplicationUser |  01/01/2005 | Outreach         | Address          | 243 High Street | Apt 2B       | Block C      | London | United Kingdom | TW20 8EF | Outreach           | Qualification      | A Level       | Outreach         | Teacher Details  | Mr           | Alan             | Smith           | s.sundareswaran@imperial.ac.uk | Guardian Details  | Guardian Form     | Mrs           | Emma              | Johnson          | emma.johnson@mail.com | Yes             | £16,000–£25,000 | Yes          |           7 |        10 |      1–3 years | Yes        | I care for my sibling | Yes             | Mother               | Nurse              | Yes              | University of Leeds | Bachelor's    | Biology         | Yes       | Irish Traveller | No                    | Yes            | Yes     | I am passionate about healthcare careers. | Personal Statement         | Personal Statement Form    | Disability Details  | Disability Form     | No         | Marketing Details  | Marketing Form     | Email     | Review and Submit | Review Form     | Yes           | High            |
