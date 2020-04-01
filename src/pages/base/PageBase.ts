import Vue from 'vue'
import Common from '@/common/common'

export default class PageBase extends Vue {
    private SystemName = Common.SystemName
    private drawer = Common.drawer
    private drawerRight = Common.drawerRight
    private right = Common.right
    private left = Common.left
}