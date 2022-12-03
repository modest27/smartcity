<template>
  <div class="home">
    <Scene :eventList="eventList"></Scene>
    <BigScreen :dataInfo="dataInfo" :eventList="eventList"></BigScreen>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import Scene from '@/components/Scene.vue';
import BigScreen from '@/components/BigScreen.vue';
import { getSmartCityInfo, getSmartCityList } from '@/api/api';
import { onMounted, reactive, ref } from 'vue';
import eventHub from '@/utils/eventHub';


const dataInfo = reactive({
  iot:{number:0},
  event:{number:0},
  power:{number:0},
  test:{number:0},
});

onMounted(async ()=>{
  changeInfo();
  getEventList();
  setInterval(() => {
    changeInfo();
    getEventList();
    eventHub.emit('clearActive',null);
  }, 12000);
})

const changeInfo = async ()=>{
  let res = await getSmartCityInfo();
  // dataInfo.iot = res.data.data.iot;
  // dataInfo.event = res.data.data.event;
  // dataInfo.power = res.data.data.power;
  // dataInfo.test = res.data.data.test;

  for (const key in dataInfo) {
    dataInfo[key].name = res.data.data[key].name;
    dataInfo[key].unit = res.data.data[key].unit;

    // 初始展示数据动画
    gsap.to(dataInfo[key],{
      number:res.data.data[key].number,
      duration:1,
    });
  }
}

const eventList = ref([]);
const getEventList = async ()=>{
  let res = await getSmartCityList();
  eventList.value = res.data.list;
};

</script>
