import {describe, it, expect } from 'vitest'
import {mount} from '@vue/test-utils'
import CardItem from '../card-item/CardItem.vue'
import ButtonMain from '@/shared/components/buttons/ButtonMain.vue'



describe('CardItem', () => {
    it('CardItem', () => {
        expect(CardItem).toBeTruthy()

    })

    it('CardItem', async () => {
        expect(CardItem).toBeTruthy()
        const wrapper = mount(CardItem, {props:
                {
                    card__data:{"id": 1,}
            }
        })
        await wrapper.find('button').trigger('click')
        expect(wrapper.text()).toBeTruthy()

    })

})

