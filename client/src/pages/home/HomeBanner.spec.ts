import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeBanner from './HomeBanner.vue';

describe('HomeBanner', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeBanner, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.findAll('v-row').length).toEqual(1);
    expect(wrapper.findAll('v-col').length).toEqual(2);
    expect(wrapper.findAll('v-col').at(1)?.findAll('swiper-stub').length).toEqual(1);
  });
});
