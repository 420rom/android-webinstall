import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import Config from "../config";

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
  theme: { dark: true,
    themes: {
      light: {
        primary: Config.ACCENT_COLOR,
		secondary: Config.ACCENT_COLOR,
		info: Config.ACCENT_COLOR,
		success: colors.green.base,
        error: colors.red.base,
		warning: colors.yellow.base,
		accent: colors.shades.black,
		background: Config.BACKGROUND_COLOR
      },
      dark: {
        primary: Config.ACCENT_COLOR,
		secondary: Config.ACCENT_COLOR,
		info: Config.ACCENT_COLOR,
		success: colors.green.base,
        error: colors.red.base,
		warning: colors.yellow.base,
		accent: colors.shades.black,
		background: Config.BACKGROUND_COLOR
      },
    },
  },
})

