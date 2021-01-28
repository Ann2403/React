<template>
	<header>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12 mt-3">
                    <h1>Site</h1>
                    <h5>Hello {{name}}!</h5>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
	computed: {
        name() {
            let thisName = this.$store.getters.name.value;
            return thisName != '' ? thisName : 'friend';
        }
    }
}
</script>