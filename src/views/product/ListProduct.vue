<template>
    <list-product />
</template>

<script>
import ListProduct from "../../components/ListProduct.vue";
export default {
    components: { ListProduct },
    data() {
        return {
            isEdit: false,
        };
    },
    methods: {
        handleEdit() {
            this.isEdit = true;
        },
        handleCancel() {
            this.isEdit = false;
        },
    },
};
</script>

<style></style>
