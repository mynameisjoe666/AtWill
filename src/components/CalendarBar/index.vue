<template>
    <el-calendar>
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
                slot="dateCell"
                slot-scope="{date, data}">
            <div class="date-grid" :class="data.isSelected ? 'is-selected' : ''">
                <div>{{ data.day.split('-').slice(2).join('-') }} </div>
                <div class="text-right tag-box">
                    <p v-if="late.indexOf(data.day) >= 0" class="white block-btn bg-orange font-12 font-bold">迟到</p>
                    <p v-if="leaveEarly.indexOf(data.day) >= 0" class="white block-btn bg-orange font-12 font-bold">早退</p>
                    <p v-if="lackCard.indexOf(data.day) >= 0" class="white block-btn bg-yellow1 font-12 font-bold">缺卡</p>
                    <p v-if="absenteeism.indexOf(data.day) >= 0" class="white block-btn bg-red1 font-12 font-bold">旷工</p>
                </div>
            </div>
        </template>
    </el-calendar>
</template>

<script>
    export default {
        name: "calendarBar",
        data() {
            return {
                late: ['2021-12-01', '2021-12-02', '2021-12-12', '2021-12-24'],
                leaveEarly: ['2021-12-01', '2021-12-09', '2021-12-12'],
                lackCard: ['2021-12-01', '2021-12-04', '2021-12-22', '2021-12-28'],
                absenteeism: ['2021-12-01', '2021-12-04', '2021-12-22', '2021-12-23', '2021-12-14', '2021-12-28']
            }
        }
    }
</script>

<style scoped lang="less">
    .is-selected {
        color: #1989FA;
        /*border: #1989FA solid 1px;*/
        box-sizing: border-box;
    }
    .date-grid {
        width: 100%;
        height: 82px;
        padding: 8px;
        box-sizing: border-box;

    }
    .block-btn {
        padding: 0.5px 3px;
        transform: scale(0.9) translateX(4px);
        border-radius: 3px;
    }
    .tag-box {
        p {
            display: inline-block;
        }
    }
</style>
<style>
    .el-calendar {
        display: flex;
        flex-direction: column;
    }
    .el-calendar-table {
        height: 100%;
    }
    .el-calendar__body {
        flex: 1;
    }
    .el-calendar-table .el-calendar-day {
        height: 100%!important;
        padding: 0!important;
        transition: 0.3s all;
    }
    .el-calendar-table .el-calendar-day:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }

    .el-calendar__body {
        padding: 0!important;
    }
</style>