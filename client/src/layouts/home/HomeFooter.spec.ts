import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeFooter from './HomeFooter.vue';

describe('HomeNavbar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeFooter, {
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
