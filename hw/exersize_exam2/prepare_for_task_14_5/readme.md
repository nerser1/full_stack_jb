# Exercise 
1. present in list items the pokemon names from the following api's: `https://pokeapi.co/api/v2/ability/?limit=20&offset=20`
2. clicking the relevant pokemon name - will make the relevant call 
for example, name: wonder-guard, will execute request to the relevant url from the response payload of the first request, for example: `https://pokeapi.co/api/v2/ability/25/`
3. in the response of the second request - there is key `flavor_text_entries`
4. show the unique texts for each pokemon name.

Flow: 
- first request will response with array of names+url
- click on name
- make another fetch api to the relevant url
- gather the unique texts from `flavor_text_entries`