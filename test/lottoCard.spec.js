import { mount } from '@vue/test-utils'
import lottoCard from '@/components/lottoCard.vue'

describe('lottoCard', () => {
  test('is a Vue instance', () => {
    //render component
    const wrapper = mount(lottoCard)

    //checks if component an be rendered
    expect(wrapper.vm).toBe(true)
  })
})
