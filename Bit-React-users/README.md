# Bit-React-users
Tasks:
	Task 1
Create documentation (structure/decomposition of the page) about the components 
before starting any development.

	Task 2
For the project use React framework and bootstrap it using CRA

	Task 3
App should have neat and understandable folders and file structure. All our code should live in a directory and contain following subfolders:
/app
Everything related to React components 
/entities
Plain JavaScript constructor functions/ES6 classes, this folder is for objects like User, Post, Car
/services
Services related to our main entities
/shared
Place to store common methods (utils) and constants that are not UI-related

	Task 4
For style use some modern responsive front-end framework or write css using flexbox

	Task 5
I should be able to communicate (consume) the following web API in my application 
https://randomuser.me/api/?results=15

Features:
	Feature 1
As a user I should be able to see email of all my users always displayed as hidden showing only first 3 and last 3 letters of username, dots and domain
Example: oliver.lewis@example.com -> oli...wis@example.com

	Feature 2 
As a user I should be able to see a LIST of users when my App is started
Each list item should have displayed:
avatar in circle
full name
email icon and hidden email address
birth date in DD.MM.YYYY format
	
	Feature 3
As a user I should be able to see GRID of user cards when my App is started
Each card item should have displayed:
photo
name
hidden email address
birth date in DD.MM.YYYY format

	Feature 4
As a user I should be able to to switch users view between LIST and GRID view using list/grid button in the header
When the app starts, default view is the list view
When I click on the grid button, I should be able to switch view type to grid style displaying cards of users
When my view is in the grid mode, I should be able to see the list view icon instead of the grid icon and should be able to switch back to list view by clicking on it

	Feature 5
As a user I should be able to refresh my user list/grid and get new users every time when I click refresh button in the header
This action should update my users with new users

	Feature 6
As a user when I refresh my page with browser refresh button, close tab and/or browser I should be able to keep my previously set view mode (list or grid) when revisiting the page

	Feature 7
As a user I want all cards or list items that are displaying information about female persons to be redish
	
	Feature 8
As a user I want to be able to filter users by name.
Search should be dynamic meaning that user list should be updated while I’m typing in the search bar

	Feature 9
As a user I want to have loading screen while getting people for the first time or refreshing people list
Search bar should also be hidden while loading 
You can find an example of this animation on this website tobiasahlin.com/spinkit/

	Feature 10
As a user I want to have an About page for my site. When I click on about menu item in the menu bar I should be able to visit the About page
As a user I want to be able to go home from my About page by clicking on BIT People text

	Feature 11
As a user I want to be able to search my users by full name (first and last name)
As a  user I want that my search is case insensitive
As a user I want that first and last name of a person starts with a capital letter 

	Feature 12
As a user I want to be able to see proper message if there are no people matching my search input

	Feature 13
As a user when I visit my app for the first time I want my people fetched, every next time when I visit my app I want to see people from the last visit
After the first time I should be able to refresh users only by clicking refresh button in the upper right corner
As a user I want to see in the footer how long has passed since previous refresh
1 minute ago, 20 minutes ago, Over an hour ago,  Two days ago, Over a week ago, One month ago, Over a month ago...

	Feature 14
As a user I would like to have stats about people below search bar
When I’m searching stats should be updated also






















