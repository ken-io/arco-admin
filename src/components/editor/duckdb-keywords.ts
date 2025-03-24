// duckdbKeywords.ts

export const duckdbQueryKeywords = [
  // 查询关键字
  'SELECT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'ORDER BY',
  'LIMIT',
  'OFFSET',
  'DISTINCT',
  'AS',
  'JOIN',
  'ON',
  'USING',
  'UNION',
  'UNION ALL',
  'INTERSECT',
  'EXCEPT',
];

export const duckdbTableKeywords = [
  // 表相关关键字
  'CREATE TABLE',
  'DROP TABLE',
  'ALTER TABLE',
  'TRUNCATE TABLE',
  'INSERT INTO',
  'UPDATE',
  'DELETE FROM',
  'WITH',
  'VIEW',
  'TEMPORARY',
];

export const duckdbJoinKeywords = [
  // JOIN 类型
  'INNER JOIN',
  'LEFT JOIN',
  'RIGHT JOIN',
  'FULL JOIN',
  'CROSS JOIN',
  'NATURAL JOIN',
  'ANTI JOIN',
  'SEMI JOIN',
];

export const duckdbComparisonOperators = [
  // 比较操作符
  '=',
  '<>',
  '!=',
  '<',
  '<=',
  '>',
  '>=',
  'IS NULL',
  'IS NOT NULL',
  'LIKE',
  'ILIKE',
  'SIMILAR TO',
  'BETWEEN',
  'IN',
  'NOT IN',
];

export const duckdbLogicalOperators = [
  // 逻辑操作符
  'AND',
  'OR',
  'NOT',
  'CASE',
  'WHEN',
  'THEN',
  'ELSE',
  'END',
];

export const duckdbAggregateFunctions = [
  // 聚合函数
  'COUNT',
  'SUM',
  'AVG',
  'MIN',
  'MAX',
  'GROUP_CONCAT',
  'LIST',
  'ARRAY_AGG',
  'STRING_AGG',
];

export const duckdbMathFunctions = [
  // 数学函数
  'ABS',
  'CEIL',
  'FLOOR',
  'ROUND',
  'SQRT',
  'POWER',
  'EXP',
  'LOG',
  'LOG10',
  'MOD',
  'RAND',
  'RANDOM',
  'SIGN',
];

export const duckdbStringFunctions = [
  // 字符串函数
  'UPPER',
  'LOWER',
  'LENGTH',
  'CHAR_LENGTH',
  'SUBSTRING',
  'REPLACE',
  'TRIM',
  'LTRIM',
  'RTRIM',
  'CONCAT',
  'CONCAT_WS',
  'REPEAT',
  'REVERSE',
  'SPLIT_PART',
];

export const duckdbDateFunctions = [
  // 日期和时间函数
  'NOW',
  'CURRENT_DATE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'DATE',
  'TIME',
  'TIMESTAMP',
  'EXTRACT',
  'AGE',
  'DATE_TRUNC',
  'DATE_PART',
  'TO_DATE',
  'TO_TIMESTAMP',
  'STRFTIME',
  'UNIX_EPOCH',
];

export const duckdbWindowFunctions = [
  // 窗口函数
  'ROW_NUMBER',
  'RANK',
  'DENSE_RANK',
  'PERCENT_RANK',
  'CUME_DIST',
  'NTILE',
  'LAG',
  'LEAD',
  'FIRST_VALUE',
  'LAST_VALUE',
];

export const duckdbTypeCasting = [
  // 类型转换
  'CAST',
  'TRY_CAST',
  '::', // 鸭子类型转换语法
];

export const duckdbOtherFunctions = [
  // 其他函数
  'COALESCE',
  'IFNULL',
  'NULLIF',
  'ARRAY',
  'MAP',
  'LIST',
  'STRUCT',
  'HASH',
  'JSON',
  'UNNEST',
  'PIVOT',
  'UNPIVOT',
];

export const duckdbExtensions = [
  // DuckDB 扩展相关的关键词
  'INSTALL',
  'LOAD',
  'ATTACH',
  'DETACH',
  'EXPORT DATABASE',
  'IMPORT DATABASE',
];

export const allDuckDbKeywords = [
  ...duckdbQueryKeywords,
  ...duckdbTableKeywords,
  ...duckdbJoinKeywords,
  ...duckdbComparisonOperators,
  ...duckdbLogicalOperators,
  ...duckdbAggregateFunctions,
  ...duckdbMathFunctions,
  ...duckdbStringFunctions,
  ...duckdbDateFunctions,
  ...duckdbWindowFunctions,
  ...duckdbTypeCasting,
  ...duckdbOtherFunctions,
  ...duckdbExtensions,
];
