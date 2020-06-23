import {
  initJSONSchemaData,
  initInputData,
  initArrayData,
  initBooleanData,
  initColorData,
  initDataSourceData,
  initDateData,
  initDateTimeData,
  initEventData,
  initJsonData,
  initNumberData,
  initObjectData,
  initQuantityData,
  initRadioData,
  initSelectData,
  initTextareaData,
  initTimeData,
  initURLData,
} from '$data/index';

// 类型数据清单
export const TypeDataList = {
  jsonschema: initJSONSchemaData,
  input: initInputData,
  array: initArrayData,
  boolean: initBooleanData,
  color: initColorData,
  datasource: initDataSourceData,
  date: initDateData,
  'date-time': initDateTimeData,
  event: initEventData,
  json: initJsonData,
  number: initNumberData,
  object: initObjectData,
  quantity: initQuantityData,
  radio: initRadioData,
  select: initSelectData,
  textarea: initTextareaData,
  time: initTimeData,
  url: initURLData,
};
