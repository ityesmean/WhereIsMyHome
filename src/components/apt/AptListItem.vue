<template>
  <tr>
    <td>{{ apt.name }}</td>
    <td>{{ apt.floor }}층</td>
    <td>{{ apt.area }}</td>
    <td>{{ apt.dong }}</td>
    <td>{{ apt.dealAmount }}만원</td>
    <td>{{ apt.year }}</td>
    <td>{{ apt.month }}</td>
  </tr>
</template>

<script>
export default {
  name: "AptListItem",
  props: {
    apt: Object,
  }
}
</script>

<style>

</style>