import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeCart from './HomeCart.vue';

describe('HomeCart', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeCart, {
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
