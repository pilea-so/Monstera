import type { App } from "vue";

import { registerComponent } from "../../utils/plugins";

import AnimatedTextField from "./AnimatedTextField.vue";
import Checkbox from "./Checkbox.vue";
import Chips from "./Chips.vue";
import Dropdown from "./Dropdown.vue";
import DropdownListItem from "./DropdownListItem.vue";
import StaticTextField from "./StaticTextField.vue";
import Switch from "./Switch.vue";

const Plugin = {
  install(app: App) {
    registerComponent(app, AnimatedTextField);
    registerComponent(app, Checkbox);
    registerComponent(app, Chips);
    registerComponent(app, Dropdown);
    registerComponent(app, DropdownListItem);
    registerComponent(app, StaticTextField);
    registerComponent(app, Switch);
  }
}

export default Plugin;

export { AnimatedTextField, Checkbox, Chips, Dropdown, DropdownListItem, StaticTextField, Switch };