import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventList extends Vue {
    private msg = "Welcome to Your Vue.js App";
    public created(): void {
        console.warn('EventList start.')
        this.fetchData();
    }

    public mounted(): void {
        this.renderData();
    }

    public fetchData(): void {
        // Do something.
    }

    public async renderData(): Promise<void> {
        console.warn('This page is EventList.');
    }
}