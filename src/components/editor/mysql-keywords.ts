// mysqlKeywords.ts

export const mysqlQueryKeywords = [
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

export const mysqlTableKeywords = [
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

export const mysqlJoinKeywords = [
  // JOIN 类型
  'INNER JOIN',
  'LEFT JOIN',
  'RIGHT JOIN',
  'FULL JOIN',
  'CROSS JOIN',
  'NATURAL JOIN',
];

export const mysqlComparisonOperators = [
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
  'NOT LIKE',
  'IN',
  'NOT IN',
  'BETWEEN',
  'NOT BETWEEN',
];

export const mysqlLogicalOperators = [
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

export const mysqlAggregateFunctions = [
  // 聚合函数
  'COUNT',
  'SUM',
  'AVG',
  'MIN',
  'MAX',
  'GROUP_CONCAT',
  'STDDEV',
  'VARIANCE',
];

export const mysqlMathFunctions = [
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
  'SIGN',
  'SIN',
  'COS',
  'TAN',
  'ASIN',
  'ACOS',
  'ATAN',
];

export const mysqlStringFunctions = [
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
  'FORMAT',
];

export const mysqlDateFunctions = [
  // 日期和时间函数
  'NOW',
  'CURRENT_DATE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'DATE',
  'TIME',
  'TIMESTAMP',
  'EXTRACT',
  'DATE_ADD',
  'DATE_SUB',
  'DATEDIFF',
  'TIMESTAMPDIFF',
  'DAY',
  'MONTH',
  'YEAR',
  'HOUR',
  'MINUTE',
  'SECOND',
  'WEEK',
  'QUARTER',
  'LAST_DAY',
  'STR_TO_DATE',
  'DATE_FORMAT',
];

export const mysqlWindowFunctions = [
  // 窗口函数（MySQL 8.0+ 支持）
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

export const mysqlTypeCasting = [
  // 类型转换
  'CAST',
  'CONVERT',
];

export const mysqlOtherFunctions = [
  // 其他函数
  'COALESCE',
  'IFNULL',
  'NULLIF',
  'JSON_ARRAY',
  'JSON_OBJECT',
  'JSON_EXTRACT',
  'JSON_UNQUOTE',
  'UUID',
  'INET_ATON',
  'INET_NTOA',
  'MD5',
  'SHA1',
  'SHA2',
];

export const mysqlTransactionKeywords = [
  // 事务相关关键字
  'START TRANSACTION',
  'COMMIT',
  'ROLLBACK',
  'SAVEPOINT',
  'RELEASE SAVEPOINT',
];

export const mysqlIndexKeywords = [
  // 索引相关关键字
  'CREATE INDEX',
  'DROP INDEX',
  'PRIMARY KEY',
  'FOREIGN KEY',
  'UNIQUE',
  'INDEX',
];

export const mysqlStorageEngines = [
  // 存储引擎
  'InnoDB',
  'MyISAM',
  'MEMORY',
  'ARCHIVE',
  'CSV',
];

export const allMySqlKeywords = [
  ...mysqlQueryKeywords,
  ...mysqlTableKeywords,
  ...mysqlJoinKeywords,
  ...mysqlComparisonOperators,
  ...mysqlLogicalOperators,
  ...mysqlAggregateFunctions,
  ...mysqlMathFunctions,
  ...mysqlStringFunctions,
  ...mysqlDateFunctions,
  ...mysqlWindowFunctions,
  ...mysqlTypeCasting,
  ...mysqlOtherFunctions,
  ...mysqlTransactionKeywords,
  ...mysqlIndexKeywords,
  ...mysqlStorageEngines,
];
