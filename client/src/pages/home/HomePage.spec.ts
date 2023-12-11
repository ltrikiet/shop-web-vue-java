import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import HomePage from './HomePage.vue';

describe('HomePage', () => {
  it('renders properly', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ]
      }
    });

    expect(wrapper.html()).toBeTruthy();
  });
});
