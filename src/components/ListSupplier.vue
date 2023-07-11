<template>
    <div class="title">
        <div>
            <h2 class="text-4xl font-bold text-gray-900">Supplier</h2>
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
        <router-link to="/suppliers/create" class="btn-primary"
            >Add Supplier</router-link
        >
    </div>
    <div class="table-wrapper">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Supplier Name</th>
                    <th>Address</th>
                    <th>Phonenumber</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cariData" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.namaSupplier }}</td>
                    <td>{{ item.alamat }}</td>
                    <td>{{ item.noTelp }}</td>
                    <td class="center">
                        <button
                            type="button"
                            class="btn-delete bg-red-700"
                            @click="deleteSupplier(item.id)"
                        >
                            Delete
                        </button>
                        <router-link
                            :to="`/suppliers/${item.id}/edit`"
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
    name: "Supplier",
    data() {
        return {
            dataSupplier: [],
            cari: "",
        };
    },
    async created() {
        this.loadData();
    },
    computed: {
        cariData() {
            return this.dataSupplier.filter((item) => {
                return item.namaSupplier && item.namaSupplier.match(this.cari);
            });
        },
    },
    methods: {
        async loadData() {
            try {
                const response = await axios.get(
                    "/supplier/find-all?limit=20&offset=1",
                    {
                        headers: {
                            Authorization:
                                "Bearer " + localStorage.getItem("accessToken"),
                        },
                    }
                );
                this.dataSupplier = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteSupplier(id) {
            try {
                const response = await axios.delete(`/supplier/delete/${id}`, {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("accessToken"),
                    },
                });
                if (response.status == 200) {
                    this.dataSupplier = this.dataSupplier.filter(
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

<style>


</style>
