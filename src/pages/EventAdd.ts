import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventAdd extends Vue {
    private text: any = null

    public created(): void {
        console.warn('EventAdd start.')
        this.fetchData();
    }

    public mounted(): void {
        this.renderData();
    }

    public fetchData(): void {
        // Do something.
    }

    public async renderData(): Promise<void> {
        console.warn('This page is EventAdd.');
    }
}