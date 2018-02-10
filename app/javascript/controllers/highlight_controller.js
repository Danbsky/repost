import { Controller } from 'stimulus'
import highlight from '../utils/highlight'

export default class extends Controller {
  connect() {
    highlight(this.element)
  }
}
