import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeBestSellers from './HomeBestSellers.vue';

describe('HomeBestSellers', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeBestSellers, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.findAll('v-tabs').length).toEqual(1);
    expect(wrapper.findAll('v-window-item').length).toEqual(3);
  });
});
