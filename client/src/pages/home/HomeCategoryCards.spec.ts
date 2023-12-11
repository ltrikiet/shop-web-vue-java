import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeCategoryCards from './HomeCategoryCards.vue';

describe('HomeCategoryCards', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeCategoryCards, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.find('h2').text()).toEqual('CATEGORIES');
    expect(wrapper.findAll('swiper-stub').length).toEqual(1);
  });
});
