import { Component, Vue } from 'vue-property-decorator'
import Common from '@/common/common'

@Component
export default class MEHeader extends Vue {
    private SystemName = Common.SystemName
}