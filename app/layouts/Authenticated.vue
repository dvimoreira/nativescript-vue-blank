<template lang="html">
    <router-view></router-view>

    <Tabs selectedIndex="1" position="bottom">
        <TabStrip>
            <TabStripItem @tap="$navigateTo('/page/home')">
                <Label text="Home"></Label>
            </TabStripItem>
            <TabStripItem @tap="$navigateTo('/page/home')">
                <Label text="Account"></Label>
            </TabStripItem>
            <TabStripItem @tap="$navigateTo('/page/home')">
                <Label text="Search"></Label>
            </TabStripItem>
        </TabStrip>
    </Tabs>
</template>

<script>
  export default {}
</script>

<style lang="scss">
    // Start custom common variables
    @import "@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
