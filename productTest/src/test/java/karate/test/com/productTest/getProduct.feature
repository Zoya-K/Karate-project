

Feature: Retrieve product data


  Scenario: fetching all product details
    Given url 'http://localhost:3000/products'
    When method GET
    Then status 200
		* match response.data[1].id == 3
		* match response.data[1].name == "Nutrogina face cream"
		* match response.data[*].id contains [2,3,4,5,6]
		
		
		 Scenario: fetching one product details
    Given url 'http://localhost:3000/products/3'
    When method GET
    Then status 200
		* match response.data[0].id == 3
		* match response.data[0].name == "Nutrogina face cream"
	
    



