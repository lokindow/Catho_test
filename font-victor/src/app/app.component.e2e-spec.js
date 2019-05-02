describe('App', function () {
	beforeEach(function () {
		browser.get('/');
	});

	it('Deve existir o <main-app>', function () {
		expect(element(by.css('main-app main')).isPresent()).toEqual(true);
	});
});