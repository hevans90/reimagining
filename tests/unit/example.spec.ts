import HelloWorld from '@/components/app-header.vue';
import { shallowMount } from '@vue/test-utils';

describe('app-header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
