import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import List from './2_List';

describe('A List', () => {
  let container = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  // When writing UI tests, tasks like rendering, user events, or data fetching
  // can be considered as “units” of interaction with a user interface.

  // react-dom/test-utils provides a helper called act() that makes sure all
  // updates related to these “units” have been processed and applied to the
  // DOM before you make any assertions:

  // act(() => {
  //   // render components
  // });
  // // make assertions

  // // Arrange Act Assert: pattern for arranging and formatting tests
  // // 1. Arrange all necessary preconditions and inputs.
  // // 2. Act on the object or method under test.
  // // 3. Assert that the expected results have occurred.

  // If this is too boilplate you can try react testing library

  it('should render custom title', () => {
    act(() => {
      render(<List title="My custom list" />, container);
    });

    expect(container.querySelector('h3').textContent).toBe('My custom list');
  });

  it('should render list items', () => {
    act(() => {
      render(<List items={['item 1', 'item 2', 'item 3']} />, container);
    });

    const items = container.querySelector('ul');
    // check all 3 items are there
    expect(items.children[0].textContent).toBe('item 1');
    expect(items.children[1].textContent).toBe('item 2');
    expect(items.children[2].textContent).toBe('item 3');

    // Should only add 3 items and not a forth
    expect(items.children[3]).toBeUndefined();
  });
});
