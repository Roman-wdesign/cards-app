import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import CardItem from '@/Cards/card-item/CardItem.vue'


describe('CardItem', () => {
    it('CardItem', () => {
        expect(CardItem).toBeTruthy()

    })

    it('CardItem props', async () => {
        expect(CardItem).toBeTruthy()
        const wrapper = mount(CardItem, {
            props:
                {
                    card__data: {"id": 1,}
                }
        })
        await wrapper.find('button').trigger('click')
        expect(wrapper.text()).toBeTruthy()

    })
})

