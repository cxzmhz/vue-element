
<script>
export default {
  name: "SelfInput",
  functional: true,
  props: {
    myData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  render: (h, c) => {
    const test = (h, c) => {
      let events = {};
      c.props.myData.events.forEach(item => {
        events[item.name] = item.handler;
      });
      let attObj = {
        props: {
          value: c.props.myData.value,
          clearable: true
        },
        attrs: {
          maxlength: 10
        },
        on: events
      };
      return h(c.props.myData.name, attObj);
    };
    return test(h, c);
  }
};
</script>

<style scoped lang="less">

</style>
