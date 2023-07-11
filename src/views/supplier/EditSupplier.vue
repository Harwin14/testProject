<template>
    <div class="bg-gray-100 min-h-screen py-8">
      <div class="container mx-auto">
        <div class="bg-white shadow-lg rounded-lg">
          <div class="bg-blue-500 text-white py-4 px-6 rounded-t-lg">
            <h2 class="text-2xl font-bold">Update Supplier</h2>
          </div>
          <div class="p-6">
            <form>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Supplier Name</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border rounded-md"
                  v-model="supplier.namaSupplier"
                  placeholder="Product Name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Address</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border rounded-md"
                  v-model="supplier.alamat"
                  placeholder="Price"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  class="w-full px-4 py-2 border rounded-md"
                  v-model="supplier.noTelp"
                  placeholder="Stock"
                />
              </div>
           
              <div class="flex justify-between">
                <router-link to="/suppliers" class="bg-gray-800 text-white py-2 px-4 rounded">
                  Kembali
                </router-link>
                <button type="button" class="bg-blue-500 text-white py-2 px-4 rounded" @click="updateSupplier">
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
  import axios from 'axios'
  
export default {
  data() {
    return {
      supplier: {
        namaSupplier: '',
        alamat: '',
        noTelp: ''
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push('/auth')
    }
    const response = await axios.get(`supplier/find-by-id/${this.$route.params.id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
    this.supplier = response.data.data
  },
  methods: {
    async updateSupplier() {
      try {
        await axios.put(
          `supplier/update/${this.$route.params.id}`,
          {
            namaSupplier: this.supplier.namaSupplier,
            alamat: this.supplier.alamat,
            noTelp: this.supplier.noTelp
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
    }
  }
}
</script>