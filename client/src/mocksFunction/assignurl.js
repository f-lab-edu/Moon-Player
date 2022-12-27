const oldWindowLocation = window.location;
export const mockAssignUrl = () => {
  beforeAll(() => {
    delete window.location;
    window.location = Object.defineProperties(
      {},
      {
        ...Object.getOwnPropertyDescriptors(oldWindowLocation),
        assign: {
          configurable: true,
          value: jest.fn(),
        },
      }
    );
  });
  beforeEach(() => {
    window.location.assign.mockReset();
  });

  afterAll(() => {
    window.location = oldWindowLocation;
  });
};
