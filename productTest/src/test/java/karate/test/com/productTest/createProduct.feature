Feature: Posting Product Details

   Scenario: Testing the POST call for Product Creation
      Given url 'http://localhost:3000/products'
      When method POST
      And request '{"name": "My cream my300","type": "foot cream","price": "110.00","vendor": "Whatever1888"}'
     Then status 200
    
