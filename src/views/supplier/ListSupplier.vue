<template>
    <list-supplier />
</template>

<script>
import ListSupplier from "../../components/ListSupplier.vue";
export default {
    components: { ListSupplier },
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
