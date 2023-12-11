import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import HomeTemplate from './HomeTemplate.vue';

describe('HomeTemplate', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeTemplate, {
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
