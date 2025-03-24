<template>
  <Codemirror
    v-model="localEditorData.SqlCode"
    :style="{ width: width, height: height }"
    placeholder="SQL code goes here..."
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="handleChange"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script setup lang="ts">
  import { ref, computed, watch, defineProps, defineEmits } from 'vue';
  import { Codemirror } from 'vue-codemirror';
  import { sql } from '@codemirror/lang-sql';
  import { autocompletion, CompletionContext } from '@codemirror/autocomplete';
  import { allMySqlKeywords } from './mysql-keywords';
  import { allMongoKeywords } from './mongodb-keywords';
  import { allDuckDbKeywords } from './duckdb-keywords';

  interface SqlEditorModel {
    DbType: string;
    SqlCode: string;
  }

  // 定义组件的 props
  const props = defineProps({
    modelValue: {
      type: Object as () => SqlEditorModel,
      default: () => ({ DbType: 'MySQL', SqlCode: '' }),
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '400px',
    },
  });

  // 定义组件的 emits
  const emits = defineEmits(['update:modelValue']);

  // 初始化本地状态
  const localEditorData = ref<SqlEditorModel>({ ...props.modelValue });

  // 获取当前数据库类型对应的关键字
  const getKeywordsForDbType = (dbType: string): string[] => {
    switch (dbType.toUpperCase()) {
      case 'MYSQL':
        return allMySqlKeywords;
      case 'MONGODB':
        return allMongoKeywords;
      case 'DUCKDB':
        return allDuckDbKeywords;
      default:
        return [];
    }
  };

  // 当前关键字列表
  const currentKeywords = ref<string[]>(
    getKeywordsForDbType(props.modelValue.DbType)
  );

  // 自定义补全源
  const sqlCompletionSource = (context: CompletionContext) => {
    const beforeCursor = context.state.doc
      .sliceString(0, context.pos)
      .trimEnd();
    const lastWord = beforeCursor.split(/[,\s.\s=]+/).pop() || '';

    // 将输入内容转为小写
    const lastWordLower = lastWord.toLowerCase();
    // 匹配关键字（忽略大小写）
    const filteredKeywords = currentKeywords.value.filter((keyword) =>
      keyword.toLowerCase().startsWith(lastWordLower)
    );
    return {
      from: context.pos - lastWord.length,
      options: filteredKeywords.map((keyword) => ({
        label: keyword, // 提示内容保持原始大小写
      })),
    };
  };

  // 编辑器扩展配置
  const extensions = computed(() => {
    return [
      sql(), // 启用 SQL 语言支持
      autocompletion({
        override: [sqlCompletionSource],
        activateOnTyping: true,
      }),
    ];
  });

  // 处理编辑器就绪事件
  const handleReady = (payload: { view: any; state: any; container: any }) => {
    console.log('SQL 编辑器已就绪', payload);
  };

  // 处理代码变化事件
  const handleChange = (newDoc: string) => {
    localEditorData.value.SqlCode = newDoc;
    emits('update:modelValue', { ...localEditorData.value });
  };

  // 监听父组件传递的 modelValue 变化
  watch(
    () => props.modelValue,
    (newValue) => {
      if (JSON.stringify(newValue) !== JSON.stringify(localEditorData.value)) {
        localEditorData.value = { ...newValue };
        currentKeywords.value = getKeywordsForDbType(newValue.DbType); // 更新关键字
        console.log('currentKeywords:', JSON.stringify(currentKeywords.value));
      }
    },
    { deep: true }
  );

  // 日志方法
  const log = (eventName: string, event: any) => {
    console.log(`${eventName} event triggered:`, event);
  };
</script>
