import { Component, Vue } from 'vue-property-decorator'
import Common from '@/common/common'
import { apiMenu } from '@/api/api'

@Component
export default class MEMenu extends Vue {
    private drawer = Common.drawer
    private drawerRight = Common.drawerRight
    private right = Common.right
    // private left = Common.left

    private menuList: any = null
    public created(): void {
        console.warn('Menu start.')
        this.fetchData()
    }

    public mounted(): void {
        this.renderData()
    }

    public fetchData(): void {
        // Do something.
    }

    public async renderData(): Promise<void> {
        const list: any = await apiMenu()
        this.menuList = list.results
        console.warn(this.menuList)
    }
}