<template>
    <article>
        <ul>
            <li v-for="(item, index) in links">
                <NuxtLink :to="`/poc/${item.link}`" :key="index">
                    {{ item.title }}
                </NuxtLink>
            </li>
        </ul>
    </article>
</template>

<script lang="ts" setup>
useHead({
    title: 'Home',
});

const links = [
    {
        title: 'Audio Recording Analyser',
        link: 'audio-recording-analyser',
    },
    {
        title: 'Parallax Background',
        link: 'parallax-background',
    },
];
</script>
