// sqlKeywords.ts
export const sqlKeywords = [
  'SELECT',
  'FROM',
  'WHERE',
  'INSERT',
  'INTO',
  'VALUES',
  'UPDATE',
  'SET',
  'DELETE',
  'JOIN',
  'ON',
  'GROUP BY',
  'ORDER BY',
  'HAVING',
  'LIMIT',
  'OFFSET',
  'CREATE',
  'TABLE',
  'DROP',
  'ALTER',
  'INDEX',
  'VIEW',
  'TRIGGER',
  'UNION',
  'UNION ALL',
  'INTERSECT',
  'EXCEPT',
  'DISTINCT',
  'AS',
  'LEFT JOIN',
  'RIGHT JOIN',
  'FULL JOIN',
  'INNER JOIN',
  'OUTER JOIN',
  'IS NULL',
  'IS NOT NULL',
  'LIKE',
  'BETWEEN',
  'IN',
  'NOT IN',
  'AND',
  'OR',
  'NOT',
  'CASE',
  'WHEN',
  'THEN',
  'ELSE',
  'END',
];

export const sqlFunctions = [
  // 聚合函数
  'AVG',
  'COUNT',
  'MAX',
  'MIN',
  'SUM',
  'GROUP_CONCAT',
  'STDDEV',
  'VARIANCE',

  // 数学函数
  'ABS',
  'CEILING',
  'FLOOR',
  'MOD',
  'POWER',
  'SQRT',
  'SIN',
  'COS',
  'TAN',
  'ASIN',
  'ACOS',
  'ATAN',
  'RAND',

  // 字符串函数
  'UPPER',
  'LOWER',
  'LENGTH',
  'SUBSTRING',
  'CONCAT',
  'REPLACE',
  'TRIM',
  'LTRIM',
  'RTRIM',
  'LPAD',
  'RPAD',
  'INSTR',
  'STRCMP',

  // 日期和时间函数
  'NOW',
  'CURDATE',
  'CURTIME',
  'DATE_FORMAT',
  'DATEDIFF',
  'TIMESTAMPDIFF',
  'DATE_ADD',
  'DATE_SUB',
  'YEAR',
  'MONTH',
  'DAY',
  'HOUR',
  'MINUTE',
  'SECOND',

  // 条件函数
  'IF',
  'IFNULL',
  'NULLIF',
  'COALESCE',

  // 其他函数
  'MD5',
  'SHA1',
  'SHA2',
  'ENCRYPT',
  'DECRYPT',
  'CAST',
  'CONVERT',
];

export const allSqlKeywords = [...sqlKeywords, ...sqlFunctions];
