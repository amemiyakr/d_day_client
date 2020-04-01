import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventDay extends Vue {
    private msg = "Welcome to Your Vue.js App";
    public created(): void {
        console.warn('EventDay start.')
        this.fetchData();
    }

    public mounted(): void {
        this.renderData();
    }

    public fetchData(): void {
        // Do something.
    }

    public async renderData(): Promise<void> {
        console.warn('This page is EventDay.');
    }
}