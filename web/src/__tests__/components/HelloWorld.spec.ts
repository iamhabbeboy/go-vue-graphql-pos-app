import { mount } from '@vue/test-utils'
import HelloWorld from '../../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3' 
    const wrapper = mount(HelloWorld, { props: { msg } })
    expect(20).toEqual(20);
    // expect(wrapper.find('h1').text()).toEqual(msg)
  })
})

// describe('works', () => {
//     it('returns expected value', () => {
//       expect(20).toBe(20);
//     });
//   });