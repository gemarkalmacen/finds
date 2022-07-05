<template id="timeline-item-template">
  <li class="timeline-item">
    <div class="timeline-badge" :class="item.icon_status">
      <i :class="item.icon_class"></i>
    </div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4 class="timeline-title">{{ item.title }}</h4>
        <div class="timeline-panel-controls">
          <div class="controls">
            <a
              v-for="(control, index) in item.controls"
              :key="index"
              :control="control"
            >
            </a>
          </div>
          <div class="timestamp">
            <small class="text-muted">{{ item.created }}</small>
          </div>
        </div>
      </div>
      <div class="timeline-body">{{ item.body }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>
