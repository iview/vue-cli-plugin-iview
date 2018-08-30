import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import iView from 'iview'
<%_ if (options.lang !== 'zh-CN') { _%>
import locale from 'iview/dist/locale/<%= options.lang %>'

Vue.use(iView, { locale })
<%_ } else { _%>

Vue.use(iView)
<%_ } _%>
<%_ } else { _%>
import { Button } from 'iview'
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'iview/dist/locale/<%= options.lang %>'
import { locale } from 'iview'

locale(lang)
<%_ } _%>

Vue.component('Button', Button)
<%_ } _%>

<%_ if (options.customTheme) { _%>
import '../iview-variables.less'
    <%_ } else { _%>
import 'iview/dist/styles/iview.css'
    <%_ } _%>