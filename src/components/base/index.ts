import Vue from 'vue'
import MEHeader from './MEHeader.vue'
import MEContent from './MEContent.vue'
import MEFooter from './MEFooter.vue'
import MEMenu from './MEMenu.vue'


export function initialize(): void {
    Vue.component('ME-Header', MEHeader)
    Vue.component('ME-Menu', MEMenu)
    Vue.component('ME-Content', MEContent)
    Vue.component('ME-Footer', MEFooter)
}