<template>
    <article class="parallax">
        <div class="parallax__sky">
            <h1>Parallax Background</h1>
            <div
                class="parallax__far-mountains"
                :style="{
                    transform: `translate(${xAxis * 50}px, ${yAxis * 50}px)`,
                    scale: 1.2,
                }"
            ></div>
            <div
                class="parallax__mountains"
                :style="{
                    transform: `translate(${xAxis * 30}px, ${yAxis * 30}px)`,
                    scale: 1.2,
                }"
            ></div>
            <div
                class="parallax__trees"
                :style="{
                    transform: `translate(${xAxis * 10}px, ${yAxis * 10}px)`,
                    scale: 1.2,
                }"
            ></div>
        </div>
    </article>
</template>

<script lang="ts" setup>
useHead({
    title: 'Parallax Background',
});

const xAxis = ref<number>(0);
const yAxis = ref<number>(0);

// Center point
const centerPoint = reactive({
    x: 0,
    y: 0,
});

const scroll = (event: MouseEvent) => {
    const mouseXoffset = event.clientX - centerPoint.x;
    const mouseYoffset = event.clientY - centerPoint.y;

    // Get the mouse direction value (-1 to 1)
    const directionResultX = mouseXoffset / centerPoint.x;
    const directionResultY = mouseYoffset / centerPoint.y;

    xAxis.value = directionResultX;
    yAxis.value = directionResultY;
};

onMounted(() => {
    window.addEventListener('mousemove', scroll);

    centerPoint.x = window.innerWidth / 2;
    centerPoint.y = window.innerHeight / 2;
});

onUnmounted(() => {
    window.removeEventListener('mousemove', scroll);
});
</script>

<style lang="scss" scoped>
.parallax {
    min-height: 100vh;
    min-height: 100%;
    position: relative;
}

.parallax__sky {
    background-image: url('~/assets/images/parallax/sky.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

%parallax-item-base {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-position: bottom left;
    background-repeat: repeat no-repeat;
    min-height: 100%;
    transform: scale(1.2);
}

.parallax__trees {
    @extend %parallax-item-base;
    background-size: 50%;
    background-image: url('~/assets/images/parallax/trees.png');
}

.parallax__mountains {
    @extend %parallax-item-base;
    background-size: 79%;
    background-image: url('~/assets/images/parallax/mountains.png');
}

.parallax__far-mountains {
    @extend %parallax-item-base;
    background-size: 35%;
    background-image: url('~/assets/images/parallax/far-mountains.png');
}
</style>
