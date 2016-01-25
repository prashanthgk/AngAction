'use strict';

describe('Service: StoryboardRepoService', function () {

  // load the service's module
  beforeEach(module('angelloApp'));

  // instantiate service
  var StoryboardRepoService;
  beforeEach(inject(function (_StoryboardRepoService_) {
    StoryboardRepoService = _StoryboardRepoService_;
  }));

  it('should do something', function () {
    expect(!!StoryboardRepoService).toBe(true);
  });

});
