<template>
    <FontAwesomeIcon
        class="block transition-transform hover:scale-110 hover:cursor-pointer"
        :style="{ color: 'rgb(84, 23, 215)' }"
        :icon="['fa-solid', iconName].join(' ')"
        size="lg"
    />
</template>

<script>
export default {
    props: ['iconName']
}
</script>