<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
const currentModalController = ref(null)
const modalController = ref(null)
</script>



<template>
    <div v-if="isOpen" class="modal-backdrop" @click="close">
        <div class="modal" @click.stop>

            <slot></slot>

            <div class="modal-header">
                <slot name="actions" :close="close" :confirm="confirm">
                    <button @click="confirm">Ok</button>
                </slot>

                <slot name="reject" :close="close">
                    <button type="button" @click="close">Отмена</button>
                </slot>
            </div>
        </div>
    </div>
</template>    