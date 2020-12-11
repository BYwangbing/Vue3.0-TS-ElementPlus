<template>
  <el-divider />
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="refForm"
    :inline="true"
    label-width="100px"
    class="demo-ruleForm"
    style="width: 636px"
  >
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间" required>
      <el-form-item prop="date1">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="ruleForm.date1"
          style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
      -
      <el-form-item prop="date2">
        <el-time-picker
          placeholder="选择时间"
          v-model="ruleForm.date2"
          style="width: 100%;"
        ></el-time-picker>
      </el-form-item>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <br />
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">
        立即创建
      </el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { getCurrentInstance, reactive, ref, toRefs } from 'vue';
import { rules } from './rules';
export default {
  name: 'FormRender',
  setup() {
    // 创建一个DOM引用，名称必须与元素的ref属性名相同
    const refForm = ref();
    const instance = getCurrentInstance();
    console.log(instance);
    const state: Record<string, any> = reactive({
      rules: rules,
      ruleForm: {
        type: []
      }
    });
    const submitForm = () => {
      refForm.value.validate((valid: boolean) => {
        if (valid) {
          console.log(refForm.value);
          console.log(refForm.value.model);
          console.log(state.ruleForm);
        }
      });
    };
    const resetForm = () => {
      refForm.value.resetFields();
    };
    return {
      ...toRefs(state),
      refForm,
      submitForm,
      resetForm
    };
  }
};
</script>
<style lang="scss" scoped></style>
