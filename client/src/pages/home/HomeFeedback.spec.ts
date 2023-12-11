import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeFeedback from './HomeFeedback.vue';

describe('HomeFeedback', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeFeedback, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.findAll('swiper-stub').length).toEqual(1);
  });
});
