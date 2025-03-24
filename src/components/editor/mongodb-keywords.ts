// mongoKeywords.ts

export const mongoQueryOperators = [
  // 查询操作符
  'find',
  'findOne',
  'count',
  'distinct',
  'aggregate',
  'mapReduce',
  'group',
  '_id',
  'ObjectId',
];

export const mongoUpdateOperators = [
  // 更新操作符
  'updateOne',
  'updateMany',
  'replaceOne',
  'insertOne',
  'insertMany',
  'deleteOne',
  'deleteMany',
];

export const mongoIndexOperators = [
  // 索引相关
  'createIndex',
  'dropIndex',
  'listIndexes',
  'reIndex',
];

export const mongoAggregationStages = [
  // 聚合管道阶段
  '$match',
  '$group',
  '$sort',
  '$limit',
  '$skip',
  '$project',
  '$lookup',
  '$unwind',
  '$addFields',
  '$set',
  '$unset',
  '$out',
  '$merge',
  '$bucket',
  '$facet',
  '$geoNear',
  '$graphLookup',
  '$redact',
  '$replaceRoot',
  '$sample',
];

export const mongoComparisonOperators = [
  // 条件表达式 - 比较操作符
  '$eq',
  '$ne',
  '$gt',
  '$gte',
  '$lt',
  '$lte',
  '$in',
  '$nin',
];

export const mongoLogicalOperators = [
  // 条件表达式 - 逻辑操作符
  '$and',
  '$or',
  '$not',
  '$nor',
  '$expr',
  '$cond',
  '$switch',
  '$ifNull',
  '$coalesce',
];

export const mongoArrayOperators = [
  // 数组操作符
  '$push',
  '$pop',
  '$pull',
  '$pullAll',
  '$addToSet',
  '$each',
  '$slice',
  '$position',
  '$all',
  '$size',
  '$elemMatch',
];

export const mongoStringOperators = [
  // 字符串操作符
  '$concat',
  '$substr',
  '$toLower',
  '$toUpper',
  '$trim',
  '$ltrim',
  '$rtrim',
  '$split',
  '$indexOfBytes',
  '$indexOfCP',
  '$strcasecmp',
  '$regexMatch',
  '$replaceOne',
  '$replaceAll',
];

export const mongoMathOperators = [
  // 数学操作符
  '$abs',
  '$ceil',
  '$floor',
  '$round',
  '$sqrt',
  '$pow',
  '$log',
  '$log10',
  '$mod',
  '$divide',
  '$multiply',
  '$add',
  '$subtract',
  '$trunc',
  '$exp',
];

export const mongoDateOperators = [
  // 日期操作符
  '$dateToString',
  '$dateFromString',
  '$dayOfYear',
  '$dayOfMonth',
  '$dayOfWeek',
  '$year',
  '$month',
  '$week',
  '$hour',
  '$minute',
  '$second',
  '$millisecond',
  '$isoDayOfWeek',
  '$isoWeek',
  '$isoWeekYear',
  '$toDate',
];

export const mongoAggregationOperators = [
  // 聚合操作符
  '$avg',
  '$sum',
  '$min',
  '$max',
  '$first',
  '$last',
  '$stdDevPop',
  '$stdDevSamp',
];

export const mongoOtherOperators = [
  // 其他操作符
  '$literal',
  '$mergeObjects',
  '$objectToArray',
  '$arrayToObject',
  '$zip',
  '$range',
  '$reverseArray',
  '$reduce',
  '$filter',
  '$map',
  '$sortByCount',
  '$sampleRate',
  '$rand',
];

// 合并所有关键词为一个总的列表
export const allMongoKeywords = [
  ...mongoQueryOperators,
  ...mongoUpdateOperators,
  ...mongoIndexOperators,
  ...mongoAggregationStages,
  ...mongoComparisonOperators,
  ...mongoLogicalOperators,
  ...mongoArrayOperators,
  ...mongoStringOperators,
  ...mongoMathOperators,
  ...mongoDateOperators,
  ...mongoAggregationOperators,
  ...mongoOtherOperators,
];
