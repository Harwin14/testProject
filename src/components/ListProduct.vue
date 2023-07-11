<template>
    <div class="title">
        <div>
            <h2 class="text-4xl font-bold text-gray-900">Product</h2>
            <ul class="breadcrumb flex gap-4">
                <li>
                    <a href="#">Product</a>
                </li>
                <li><i class="bx bx-chevron-right"></i></li>
                <li>
                    <a class="text-gold font-bold" href="#">List</a>
                </li>
            </ul>
            <input
                type="text"
                v-model="cari"
                placeholder="Cari Data"
                class="search px-2 py-1"
            />
        </div>
        <router-link to="/products/create" class="btn-primary"
            >Add Product</router-link
        >
    </div>
    <div class="table-wrapper">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Supplier Name</th>
                    <th>Address</th>
                    <th>Phonenumber</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cariData" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.namaBarang }}</td>
                    <td>{{ item.stok }}</td>
                    <td>{{ item.harga }}</td>
                    <td>{{ item.supplier.namaSupplier }}</td>
                    <td>{{ item.supplier.alamat }}</td>
                    <td>{{ item.supplier.noTelp }}</td>
                    <td class="center">
                        <button
                            type="button"
                            class="btn-delete"
                            @click="deleteBarang(item.id)"
                        >
                            Delete
                        </button>
                        <router-link
                            :to="`/products/${item.id}/edit`"
                            class="btn-edit"
                            >Edit</router-link
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Barang",
    data() {
        return {
            products: [],
            cari: "",
           
        };
    },
    async created() {
        this.loadData();
    },
    computed: {
        cariData() {
            return this.products.filter((item) => {
                return item.namaBarang && item.namaBarang.match(this.cari);
            });
        },
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get(
                    "barang/find-all?limit=20&offset=1",
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
                this.products = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBarang(id) {
            try {
                const response = await axios.delete(`/barang/delete/${id}`, {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("accessToken"),
                    },
                });

                if (response.status == 200) {
                    this.products = this.products.filter(
                        (item) => item.id !== id
                    );
                    this.loadData();
                }
            } catch (error) {
                console.log(error);
            }
        },
    
    },
};
</script>
