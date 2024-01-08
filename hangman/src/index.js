import { renderMain, renderGallow } from './utils/generateField.js'
import {
  renderKeyboard,
  renderWrapperKeyboard,
} from './utils/renderKeyboard.js'
import { eventsKeyboard } from './utils/eventsKeyboard.js'

// render field
renderMain()
renderGallow()

// render keyboard
renderWrapperKeyboard()
renderKeyboard()

// listen event keydoard
eventsKeyboard()
