Feature: Service for Movie tickets order
    
        Scenario: Mickey Mouse positive
        Given User is on page2 "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day2
        Then The user selects the desired movie2
        Then The user chooses a location2
        Then The user is booking tickets2
        Then The user confirms the booking2 "Получить код бронирования"
    
        Scenario: Gone with the Wind positive
        Given User is on page3 "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day3
        Then The user selects the desired movie3
        Then The user chooses a location3
        Then The user is booking tickets3
        Then The user confirms the booking3 "Получить код бронирования"
    
        Scenario: Mickey Mouse negative
        Given user is on page2 "http://qamid.tmweb.ru/client/index.php"
        When user selects the desired day2
        Then user selects the desired movie2
        Then user selects the occupied place
        Then user has booked tickets
        Then user has confirmed the booking of tickets
        Then Get Error "Забронировать"


# Feature: Search a course
#     Scenario: Should search by text
#         Given user is on "/navigation" page
#         When user search by "тестировщик"
#         Then user sees the course suggested "Тестировщик ПО"