import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { ProductResponse } from '@/services/product/types';
import { watch } from 'vue';

interface CartProduct {
  productId: number;
  fullName: string;
  picture: string;
  price: number;
  quantity: number;
  stocks: number;
}

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref<CartProduct[]>(JSON.parse(sessionStorage.getItem('cart') as string) ?? []);
  const isOpenCartSidebar = ref<boolean>(false);

  watch(cart, (val) => sessionStorage.setItem('cart', JSON.stringify(val)), { deep: true });

  const handleClickOpenCartSidebar = () => {
    isOpenCartSidebar.value = !isOpenCartSidebar.value;
  };

  const cartCount = computed(() =>
    cart.value.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0)
  );

  const cartTotal = computed(() =>
    cart.value.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0)
  );

  const addProductToCart = (product: ProductResponse, quantity = 1) => {
    const isExistProductInCart = cart.value.some((item) => item.productId === product.id);
    if (isExistProductInCart) {
      const cartIndex = cart.value.findIndex((item) => item.productId === product.id);
      if (
        product.stocks > cart.value[cartIndex].quantity &&
        cart.value[cartIndex].quantity + quantity < product.stocks
      ) {
        cart.value[cartIndex].quantity = cart.value[cartIndex].quantity + quantity;
      } else {
        cart.value[cartIndex].quantity = product.stocks;
      }
    } else {
      cart.value?.push({
        fullName: product.fullName,
        productId: product.id,
        picture: product.picture,
        price: product.price,
        stocks: product.stocks,
        quantity
      });
    }
  };

  const handleClickDeleteCartProduct = (productId: number) => {
    const index = cart.value.findIndex((item) => item.productId === productId);
    if (index > -1) {
      cart.value.splice(index, 1);
    }
  };

  const handleClickMinusProductQuantity = (productId: number) => {
    const index = cart.value.findIndex((item) => item.productId === productId);
    if (index > -1 && cart.value[index].quantity > 1) {
      cart.value[index].quantity = cart.value[index].quantity - 1;
    }
  };

  const handleClickPlusProductQuantity = (productId: number) => {
    const index = cart.value.findIndex((item) => item.productId === productId);
    if (index > -1 && cart.value[index].stocks > cart.value[index].quantity) {
      cart.value[index].quantity = cart.value[index].quantity + 1;
    }
  };

  return {
    // STATE
    cart,
    isOpenCartSidebar,
    // GETTER
    cartCount,
    cartTotal,
    // ACTION
    addProductToCart,
    handleClickOpenCartSidebar,
    handleClickDeleteCartProduct,
    handleClickMinusProductQuantity,
    handleClickPlusProductQuantity
  };
});
