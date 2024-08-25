<template>
    <div>
        <img class="w-full h-96 min-w-48 object-contain object-center" :src="item.image" :alt="item.title">
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>