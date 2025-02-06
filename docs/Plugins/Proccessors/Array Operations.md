
# Introduction
Arrays are fundamental data structures used to store collections of data. You can perform various operations on arrays to manipulate and transform data. This documentation covers three primary array operations: Filter, Group, and Convert to Object, along with their respective configurations.

# 1. Filter
The Filter action allows you to filter an array based on specific field values.

## Configuration
When selecting the "Filter" action, users need to provide the following configuration:

![Filter.png](../../../static/img/Array%20Operations-1.png)


| Inputs | Description |
|--|--|
| Label | Input a label for this plugin |
| Path | Input the path to the field you want to filter by |
| Value | Input the value to filter against |
| Rule | Select the rule for comparison (e.g., `RULE_EQUAL`, `RULE_NOT_EQUAL`) |
| Schema | Select or create a schema |

## Example Configuration

```
- **Label**: "Filter Adults"
- **Path**: "age"
- **Value**: "18"
- **Rule**: "RULE_GREATER_THAN"
- **Schema**: "UserSchema"
```
## Example Usage

```
let array = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 17 }
];

let config = {
  label: 'Filter Adults',
  path: 'age',
  value: 18,
  rule: 'RULE_GREATER_THAN',
  schema: 'UserSchema'
};

function filterArray(array, config) {
  const { path, value, rule } = config;
  return array.filter(item => {
    switch (rule) {
      case 'RULE_EQUAL':
        return item[path] === value;
      case 'RULE_NOT_EQUAL':
        return item[path] !== value;
      case 'RULE_GREATER_THAN':
        return item[path] > value;
      case 'RULE_LESS_THAN':
        return item[path] < value;
      default:
        return false;
    }
  });
}

let filteredArray = filterArray(array, config);
console.log(filteredArray); // Output: [{ id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob', age: 25 }]
```
# 2. Group
The Group action allows you to group records in an array by specific fields.

## Configuration
When selecting the "Group" action, users need to provide the following configuration:

![Group.png](../../../static/img/Array%20Operations-2.png)

| Inputs | Description |
|--|--|
| Label | Input a label for this plugin |
| Path | Input the path to the field you want to filter by |
| Schema | Select or create a schema |

## Example Configuration

```
- **Label**: "Group by Category"
- **Path**: "category"
- **Schema**: "ProductSchema"
```

## Example Usage

```
let array = [
  { id: 1, category: 'Fruit', name: 'Apple' },
  { id: 2, category: 'Vegetable', name: 'Carrot' },
  { id: 3, category: 'Fruit', name: 'Banana' }
];

let config = {
  label: 'Group by Category',
  path: 'category',
  schema: 'ProductSchema'
};

function groupArray(array, config) {
  const { path } = config;
  return array.reduce((groups, item) => {
    const group = item[path];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {});
}

let groupedArray = groupArray(array, config);
console.log(groupedArray);
// Output:
// {
//   Fruit: [{ id: 1, category: 'Fruit', name: 'Apple' }, { id: 3, category: 'Fruit', name: 'Banana' }],
//   Vegetable: [{ id: 2, category: 'Vegetable', name: 'Carrot' }]
// }
```

# 3. Convert to Object
The Convert to Object action allows you to transform an array into an object, typically using a field value as the key.

## Configuration
When selecting the "Convert to Object" action, users need to provide the following configuration:

![Screenshot 2024-05-21 at 16.28.25.png](../../../static/img/Array%20Operations-3.png)

| Inputs | Description |
|--|--|
| Label | Input a label for this plugin |

## Example Configuration
`- **Label**: "Convert to Object by ID"`

## Example Usage

```
let array = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

let config = {
  label: 'Convert to Object by ID'
};

function convertArrayToObject(array, config) {
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let object = convertArrayToObject(array, config);
console.log(object);
// Output:
// {
//   1: { id: 1, name: 'Alice', age: 30 },
//   2: { id: 2, name: 'Bob', age: 25 },
//   3: { id: 3, name: 'Charlie', age: 35 }
// }
```

# Conclusion
These array operations—Filter, Group, and Convert to Object—provide powerful ways to manipulate and transform data within arrays on the mywehub.io platform. Ensure to configure each operation appropriately to achieve the desired results. Regularly update this documentation to reflect any changes or enhancements to the operations.




