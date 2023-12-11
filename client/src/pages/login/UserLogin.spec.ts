import { describe, it, expect, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import UserLogin from './UserLogin.vue';

describe('UserLogin', () => {
  it('renders properly', () => {
    const wrapper = mount(UserLogin, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      }
    });

    expect(wrapper.findAll('v-tabs').length).toEqual(1);
    expect(wrapper.findAll('v-window-item').length).toEqual(2);
    expect(wrapper.findAll('v-window-item').at(0)?.findAll('v-form').length).toEqual(1);
    expect(wrapper.findAll('v-window-item').at(1)?.findAll('v-form').length).toEqual(1);
  });
});
