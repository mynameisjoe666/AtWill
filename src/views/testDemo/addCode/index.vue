<template>
  <div>
    <textarea v-model="params.content"></textarea>
    <div>{{params.content}}</div>
    <button @click="addCode">提交</button>
    <div style="background-color:red; width: 500px;height: 500px;">
      <component :is="dynamicComponent"></component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      dynamicComponent: null,
      params: {
        content: ''
      }
    };
  },
  methods: {
    addCode() {
      this.dynamicComponent = this.parseAndRegisterComponent(this.params.content);
    },
    parseAndRegisterComponent(componentCode) {

      try {
        const componentOptions = {
          template: componentCode,
          mounted() {
            console.log('Dynamic Component is mounted');
          }
        };
        console.log(componentOptions)
        const componentName = 'dynamic-component';
        Vue.component(componentName, componentOptions);
        return componentName;
      } catch (error) {
        console.error('Error parsing and registering component:', error);
        return null;
      }
    }
  }
};
</script>
