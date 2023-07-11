<template>
    <div class="container mx-auto px-4 py-4 h-[700px]">
        <h1 class="text-2xl font-bold mb-4 text-center">Add Supplier</h1>

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
                    >Supplier Name</label
                >
                <input
                  
                    type="text"
                    v-model="namaSupplier"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                    placeholder="Name"
                />
            </div>

            <div class="mb-4">
                <label for="price" class="block text-gray-700 font-bold mb-2"
                    >Supplier Address</label
                >
                <input
                    type="text"
                    v-model="alamat"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                    placeholder="Address"
                />
            </div>

            <div class="mb-4">
                <label for="stock" class="block text-gray-700 font-bold mb-2"
                    >Phone Number</label
                >
                <input
                    type="tel"
                    pattern="[0-9]{10,13}" 
                    v-model="noTelp"
                    required
                    class="w-full px-4 py-2 border rounded-md"
                    placeholder="Phone number"
                />
                <small class="text-gray-500">Please enter a valid phone number (10-12 digits).</small>
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
    namaSupplier: '',
    alamat: '',
    noTelp: ''
  }),
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push("/auth");
        }
    },
    methods: {
    async handleSubmit() {
      try {
        await axios.post(
          'supplier/create',
          {
            namaSupplier: this.namaSupplier,
            alamat: this.alamat,
            noTelp: this.noTelp
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          }
        )
        this.$router.push('/suppliers')
      } catch (error) {
        console.log(error)
      }
    },
    close(){
            this.$router.push("/suppliers");
        }
  }
};
</script>
