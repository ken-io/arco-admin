<template>
  <Codemirror
    v-model="localSqlCode"
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
  import { allSqlKeywords } from './sql-keywords';

  // 定义组件的 props
  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
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

  // 定义本地的 sqlCode 变量
  const localSqlCode = ref(props.modelValue);

  // 创建自定义补全源
  const sqlCompletionSource = (context: CompletionContext) => {
    console.log('尝试触发代码提示，当前光标位置:', context.pos);
    const beforeCursor = context.state.doc
      .sliceString(0, context.pos)
      .trimEnd();
    const lastWord = beforeCursor.split(/[,\s=]+/).pop() || '';
    const filteredKeywords = allSqlKeywords.filter((keyword) =>
      keyword.startsWith(lastWord.toUpperCase())
    );
    console.log('代码提示结果:', filteredKeywords);
    return {
      from: context.pos - lastWord.length,
      options: filteredKeywords.map((keyword) => ({ label: keyword })),
    };
  };

  // 定义扩展配置
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
    if (newDoc !== props.modelValue) {
      emits('update:modelValue', newDoc);
    }
  };

  // 监听父组件传递的 modelValue 变化
  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue !== localSqlCode.value) {
        localSqlCode.value = newValue;
      }
    }
  );

  const log = (eventName: string, event: any) => {
    console.log(`${eventName} event triggered:`, event);
  };
</script>
