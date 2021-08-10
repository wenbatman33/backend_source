<template>
  <PageWrapper title="金流">
    <template #headerContent>
      <div class="flex items-center justify-between">
        <h1>payment {{ time }}</h1>
      </div>
    </template>
    <!-- <Description @register="infoRegister" class="enter-y" />
    <Description @register="register" class="my-4 enter-y" />
    <Description @register="registerDev" class="enter-y" /> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import moment from 'moment';

  export default defineComponent({
    name: 'PaymentPage',
    components: {
      PageWrapper,
    },
    setup() {
      const time = ref(moment().format('YYYY/MM/DD') as string);
      return {
        time,
      };
    },
  });
</script>
