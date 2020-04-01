import { Component, Vue } from 'vue-property-decorator'
import Common from '@/common/common'

@Component
export default class MEHeader extends Vue {
    private SystemName = Common.SystemName
    private drawer = Common.drawer
    private drawerRight = Common.drawerRight
    private right = Common.right
    private left = Common.left

    public created(): void {
        console.warn('Home start.')
        this.fetchData()
    }

    public mounted(): void {
        this.renderData()
    }

    public fetchData(): void {
        // Do something.
    }

    public async renderData(): Promise<void> {
        // Do something.
    }
}