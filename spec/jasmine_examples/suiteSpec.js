describe('A suite', () => {
  it('contains spec with an expectation', () => {
    console.log('A suite');
    expect(true).toBe(true);
  });
});
describe('A suite is just a function', () => {
  let a;

  it('and so is a spec', () => {
    a = true;
    expect(a).toBe(true);
  });
});
describe('The "toBe" macher compares with === ', () => {
  it('and has a positve case', () => {
    expect(true).toBe(true);
  });

  it('and can have a negative case', () => {
    expect(false).not.toBe(true);
  });
});
describe('A suite with some shared setup', () => {
  let foo = 0;
  beforeEach(() => {
    console.log('BeforeEach');
    foo += 1;
  });
  afterEach(() => {
    console.log('AfterEach');
    foo = 0;
  });
  beforeAll(() => {
    console.log('BeforeAll');
    foo = 1;
  });
  afterAll(() => {
    console.log('AfterAll');
    foo = 0;
  });
  it('case 1', () => {
    expect(true).toBe(true);
  });
  it('case 2', () => {
    expect(true).toBe(true);
  });
});
describe('A spec', function () {
  beforeEach(function () {
    this.foo = 0;
  });
  it('can use the `this` to share state', function () {
    expect(this.foo).toEqual(0);
    this.bar = 'test pollution?';
  });
  it('prevents test pollution by having an empty `this` created for the next spec', function () {
    expect(this.foo).toEqual(0);
    expect(this.bar).toBe(undefined);
  });
});
describe('A spec using the fail function', () => {
  const foo = (x, callBack) => {
    if (x) {
      callBack();
    }
  };
  it('should not call the callBack', () => {
    foo(false, () => {
      fail('Callback has been called');
    });
  });
});

describe('A spec', () => {
  let foo;
  beforeEach(() => {
    foo = 0;
    foo += 1;
  });
  afterEach(() => {
    foo = 0;
  });
  it('is just a function, so it can contain any code.', () => {
    expect(foo).toEqual(1);
  });
  it('can have more than one exepactation', () => {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
  describe('nested inside a second describe', () => {
    let bar;
    beforeEach(() => {
      bar = 1;
    });
    it('can reference both scopes as needed', () => {
      expect(foo).toEqual(bar);
    });
  });
});
xdescribe('A spec', () => {
  let foo;
  beforeEach(() => {
    foo = 0;
    foo += 1;
  });
  it('is just a function, so it can contain any code', () => {
    expect(foo).toEqual(1);
  });
});
