import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { apiMenu } from '@/api/api'


@Component
export default class HelloWorld extends Vue {
  private msg = "Welcome to Your Vue.js App"
  private menu: any
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
    this.menu = await apiMenu()
    console.warn(this.menu)
    console.warn(this.menu.results)

  }
}