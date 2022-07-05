import Vue from "vue";
import BreadCrumbs from "../components/template/BreadCrumbs.vue";
import Pxcard from "../components/template/Pxcard.vue";

const components = { BreadCrumbs, Pxcard };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);


});

Vue.component('timeline-control', {
  template: '#timeline-control-template',
  
  props: ['control'],
  
  methods: {
      handleClick: function() {
          if(this.control.method == 'delete') {
              this.$dispatch('timeline-delete');
          } else if(this.control.method == 'edit') {
              this.$dispatch('timeline-edit');
          } else {
              console.log("Unknown method "+this.control.method)
          }
      }
  },
});

Vue.component('timeline', {
  template: '#timeline-template',
  
  props: ['items'],
  
  events: {
      'delete-item': function() {
          return true; // forward to parent
      }
  }
});

Vue.component('timeline-item', {
  template: '#timeline-item-template',
  
  props: ['item'],
  
  methods: {
      delete: function() {
          this.$dispatch('timeline-delete-item', this.item.id)
      },
      
      edit: function() {
          
      }
  },
  
  events: {
      'timeline-delete': function() {
          this.delete();
      },
      
      'timeline-edit': function() {
          this.edit();
      }
  }
});



