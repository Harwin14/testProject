<template>
    <div class="bg-gray-100 min-h-screen py-8">
        <div class="container mx-auto">
            <div class="bg-white shadow-lg rounded-lg">
                <div class="bg-blue-500 text-white py-4 px-6 rounded-t-lg">
                    <h2 class="text-2xl font-bold">Update Product</h2>
                </div>
                <div class="p-6">
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2"
                                >Product Name</label
                            >
                            <input
                                type="text"
                                class="w-full px-4 py-2 border rounded-md"
                                v-model="barang.namaBarang"
                                placeholder="Product Name"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2"
                                >Price</label
                            >
                            <input
                                type="text"
                                class="w-full px-4 py-2 border rounded-md"
                                v-model="barang.harga"
                                placeholder="Price"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2"
                                >Stock</label
                            >
                            <input
                                type="text"
                                class="w-full px-4 py-2 border rounded-md"
                                v-model="barang.stok"
                                placeholder="Stock"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2"
                                >Supplier</label
                            >
                            <select
                                class="w-full px-4 py-2 border rounded-md"
                                v-model="barang.supplier"
                            >
                                <option disabled value="">
                                    Select Supplier...
                                </option>
                                <option
                                    v-for="item in suppliers"
                                    :key="item.id"
                                    :value="item.id"
                                   
                                >
                                    {{ item.namaSupplier }}
                                </option>
                            </select>
                        </div>
                        <div class="flex justify-between">
                            <router-link
                                to="/products"
                                class="bg-gray-800 text-white py-2 px-4 rounded"
                            >
                                Kembali
                            </router-link>
                            <button
                                type="button"
                                class="bg-blue-500 text-white py-2 px-4 rounded"
                                @click="updateBarang"
                                v-bind:disabled="barang.supplier === null"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            barang: {
                namaBarang: "",
                harga: "",
                stok: "",
                supplier: "",
            },
            suppliers: [],
            onChange(e) {
                this.val = e.target.value;
            },
        };
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push("/auth");
        }
        const response = await axios.get(
            `barang/find-by-id/${this.$route.params.id}`,
            {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
            }
        );
        const result = await axios.get("supplier/find-all?limit=20&offset=1", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
        });
        this.suppliers = result.data.data;
        this.barang = response.data.data;
    },
    methods: {
        async updateBarang() {
             try {
        let dataBarang = {};
        const selectedSupplier = this.barang.supplier;
        if (selectedSupplier) {
            const supplier = this.suppliers.find(
                (item) => item.id === selectedSupplier.id
            );
            dataBarang = {
                namaBarang: this.barang.namaBarang,
                harga: this.barang.harga,
                stok: this.barang.stok,
                supplier: {
                    id: supplier.id,
                    namaSupplier: supplier.namaSupplier,
                    noTelp: supplier.noTelp,
                    alamat: supplier.alamat,
                },
            };
        }

                const cekData = await axios.put(
                    `barang/update/${this.$route.params.id}`,
                    dataBarang,
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
                console.log("isi data barang", dataBarang);

                console.log("response", cekData);
                this.$router.push("/products");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
