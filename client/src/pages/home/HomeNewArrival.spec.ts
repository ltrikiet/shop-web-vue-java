import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeNewArrival from './HomeNewArrival.vue';

describe('HomeNewArrival', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeNewArrival, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.findAll('swiper-stub').length).toEqual(1);
  });
});
