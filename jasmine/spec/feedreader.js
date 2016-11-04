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
    /**
     * Test1---> Test suite for RSS Feeds
     */
    describe('RSS Feeds', function() {
        //Test to verify if feeds are defined.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //Test to verify if feed URL is defined and not empty.
        it('Url defined', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        //Test to check feed name is defined and not empty.
        it('Name defined', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * Test2---> Test suite for Menu.
     */
    describe('Menu', function() {
        //Test to check menu is hidden by default.
        it('Menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //Test to check menu visibility and verifying it changes on click.
        it('Menu visibility changes on click', function() {
            var menu = $('.menu-icon-link');
            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });
    /**
     * Test3----> Test suite for initial entries.
     */
    describe("Initial Entries", function() {
        //setup
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //Test to check feed gets loaded from API and has minimum of one entry.
        it('gets loaded from API and has minimum of one entry', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });
    //Test4---> Test suite for New Feed Selection
    describe("New Feed Selection", function() {

        var load1,
            load2;

        beforeEach(function(done) {
          loadFeed(0, function() {
            load1 = $('.feed').html();
            loadFeed(1, function() {
              load2 = $('.feed').html();
              done();
            });
          });
        });

        //Test to check new feed gets added each time loadfeed is called.
        it("changes its content on new Loadfeed", function(done) {
            expect(load1).not.toBe(load2);
            done();
        });

    });
}());
