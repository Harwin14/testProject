import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Auth from "../views/Auth.vue";

import Product from "../views/product/Product.vue";
import AddProduct from "../views/product/AddProduct.vue";
import ListProduct from "../views/product/ListProduct.vue";
import EditProduct from "../views/product/EditProduct.vue";

import Supplier from "../views/supplier/Supplier.vue";
import AddSupplier from "../views/supplier/AddSupplier.vue";
import ListSupplier from "../views/supplier/ListSupplier.vue";
import EditSupplier from "../views/supplier/EditSupplier.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/auth",
        name: "Auth",
        component: Auth,
    },
    {
        path: "/products",
        component: Product,
        children: [
            { path: "", component: ListProduct },
            { path: "create", component: AddProduct },
            { path: ":id/edit", component: EditProduct },
        ],
    },
    {
        path: "/suppliers",
        component: Supplier,
        children: [
            { path: "", component: ListSupplier },
            { path: "create", component: AddSupplier },
            { path: ":id/edit", component: EditSupplier },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
