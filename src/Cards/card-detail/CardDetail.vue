<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useCardStore } from '@/Cards/cardState'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

import IconStatus from '@/shared/components/icons/IconStatus.vue'
import IconGender from '@/shared/components/icons/IconGender.vue'
import IconSpeices from '@/shared/components/icons/IconSpeices.vue'
import IconLocation from '@/shared/components/icons/IconLocation.vue'
import ButtonMain from '@/shared/components/buttons/ButtonMain.vue'

import type { IDetailCardData } from '@/shared/models/CardsModel'

const route = useRoute()
const store = useCardStore()

const detailCard: ComputedRef<IDetailCardData<string>> = computed<any>(() => {
  //find overlaps in data.name
  let result = {}
  store.getCards.find(function (item: IDetailCardData<string>) {
    if (item.name === route.query.card) {
      result = item
    }
  })
  return result
})
</script>

<template>
  <div class="mt-16">
    <div class="py-8 z-20 flex flex-row justify-center text-center">
      <div class="w-auto flex flex-col text-center pr-1">
        <div class="flex pb-2">
          <IconStatus />
          <p class="font-bold">&nbsp status:</p>
        </div>
        <div class="flex pb-2">
          <IconGender />
          <p class="font-bold">&nbsp gender:</p>
        </div>
        <div class="flex pb-2">
          <IconSpeices />
          <p class="font-bold">&nbsp species:</p>
        </div>
        <div class="flex pb-2">
          <IconLocation />
          <p class="font-bold">&nbsp location:</p>
        </div>
      </div>

      <div class="w-auto flex flex-col text-left">
        <p class="font-normal pb-2">&nbsp{{ detailCard.status }}</p>
        <p class="font-normal pb-2">&nbsp{{ detailCard.gender }}</p>
        <p class="font-normal pb-2">&nbsp{{ detailCard.species }}</p>
        <p class="font-normal pb-2">&nbsp{{ detailCard.location.name }}</p>
      </div>
    </div>
    <section class="bg-gray-300">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <p
            class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
          >
            Back to catalog
          </p>
          <router-link to="/cards">
            <ButtonMain
              class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              To Catalog</ButtonMain
            >
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
