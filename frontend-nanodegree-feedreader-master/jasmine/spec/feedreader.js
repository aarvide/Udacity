/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
	
	//First Test Suite is called RSS Feeds and has 2 tests.
    describe('RSS Feeds', function() {
       
		/* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
		
		//This is the first test, which is basically just checking if the allFeeds array is defined
        it('RSS Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		
		//This is the second test in this suite, it just makes sure that the feed are not empty.
		it('RSS Feeds URL is defined and not empty', function () {
			allFeeds.forEach(feed => {
				var URL = feed.url;
				expect(URL).toBeDefined();
				expect(URL.length).not.toBe(0);
			})
		});


        /* This a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		
		//The third test makes sure that the feed name is defined and not empty.
		it('RSS Feeds Name is defined and not empty', function () {
			allFeeds.forEach(feed => {
				var NAME = feed.name;
				expect(NAME).toBeDefined();
				expect(NAME.length).not.toBe(0);
			})
		});
    });


    /* This is a new test suite named "The menu" */	
	describe('The Menu', function () {
		let menu = document.querySelector(".menu-icon-link");

        /* This is a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		
		//First test is to check if the HTML body has a menu-hidden class
		it('The Menu is hidden by default', function () {
			//expect(document.body.className).toEqual("menu-hidden");	//This was my original solution, per review, needed to use toHaveClass to pass all use cases
			expect(document.body).toHaveClass('menu-hidden');
		})
		
         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		
		//Second tests visibility of menu with multiple clicks
		it('The Menu is visible when clicked once and hidden when clicked again', function () {
			
			menu.click(); //simulate a click
			//expect(document.body.className).not.toEqual("menu-hidden");	//This was my original solution, per review, needed to use toHaveClass to pass all use cases
			expect(document.body).not.toHaveClass('menu-hidden');
			
			menu.click(); //simulate a second click
			//expect(document.body.className).toEqual("menu-hidden");	//This was my original solution, per review, needed to use toHaveClass to pass all use cases
			expect(document.body).toHaveClass('menu-hidden');
		})
	});
		

    /* This is a new test suite named "Initial Entries" */
	describe('Initial Entries', function () {

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		
		//Run the tests asynchronously
		beforeEach(function (done) {
			loadFeed(0, done);
		});
		
		//This test checks if there is a entry element in the feed container
		it("Initial Entries contains element after loadFeed() is called", function () {
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});
	});

	
    /* This is a new test suite named "New Feed Selection" */
	describe('New Feed Selection', function () {

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		
		let CurrentFeed = 0;
		let NewerFeed = 0;
		
		//Here we load up the old or current feed and do it asynchronously
		beforeEach(function (done) {
			loadFeed(0, function () {
				CurrentFeed = $('.feed').html();
				done();
			});
		});
		
		//This test checks whether the new feed selected is indeed loaded and different from the old
		it('New Feed Selected and content changes on load', function (done) {
			loadFeed(1, function () {
				NewerFeed = $('.feed').html();
				expect(CurrentFeed).toBeDefined();
				expect(NewerFeed).toBeDefined();
				expect(NewerFeed).not.toEqual(CurrentFeed);
				done();
			});
		});
	});
}());