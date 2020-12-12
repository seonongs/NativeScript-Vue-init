const Vue = require('nativescript-vue/dist/index');

new Vue({
    template: `
    <page>
      <stack-layout>
        <label text="Hello Vue!!!" style="background-color:#41b883;color:#ffffff;padding:10;text-align:center"></label>
      </stack-layout>
    </page>
  `,
}).$start();
