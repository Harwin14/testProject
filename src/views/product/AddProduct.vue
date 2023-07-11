<template>
    <div class="container mx-auto px-4 py-4 h-[700px]">
        <h1 class="text-2xl font-bold mb-4 text-center">Add Product</h1>

        <form
            @submit.prevent="handleSubmit"
            class="max-w-md mx-auto bg-white p-6 rounded shadow relative"
        >
        <div class="text-3xl absolute top-0 right-0 rounded-full bg-red-200 w-[35px] h-[35px] flex justify-center">

            <i class="ri-close-line" @click="close"></i>
        </div>
            <div class="mb-4">
                <label
              
                    class="block text-gray-700 font-bold mb-2"
                    >Product Name</label
                >
                <input
                   
                    type="text"
                    v-model="namaBarang"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700 font-bold mb-2"
                    >Price</label
                >
                <input
                    id="price"
                    type="number"
                    v-model="harga"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div class="mb-4">
                <label for="stock" class="block text-gray-700 font-bold mb-2"
                    >Stock</label
                >
                <input
                    id="stock"
                    type="number"
                    v-model="stok"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                />
            </div>

            <div class="mb-4">
                <label for="supplier" class="block text-gray-700 font-bold mb-2"
                    >Supplier</label
                >
                <select
                    id="supplier"
                    v-model="supplier"
                    class="w-full px-4 py-2 border rounded-md"
                >
                    <option value="">Select Supplier</option>
                    <option
                        v-for="item in suppliers"
                        :key="item.id"
                        :value="item.id"
                    >
                        {{ item.namaSupplier }}
                    </option>
                </select>
            </div>

            <button
                type="submit"
                class="w-full bg-gold font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        namaBarang: "",
        harga: "",
        stok: "",
        // supplier: "",
        suppliers: {},
    }),
    async created() {
        this.loadData();
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push("/auth");
        }
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get(
                    "supplier/find-all?limit=20&offset=1",
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
                this.suppliers = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async handleSubmit() {
            try {
                const supplierData = this.suppliers.find(supplier => supplier.id === this.supplier);
               await axios.post(
                    "barang/create",
                    {
                        namaBarang: this.namaBarang,
                        harga: this.harga,
                        stok: this.stok,
                        supplier: supplierData,
                    },
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
              
                this.$router.push("/products");
            } catch (error) {
                console.log(error);
            }
        },
        close(){
            this.$router.push("/products");
        }
    },
};
</script>
