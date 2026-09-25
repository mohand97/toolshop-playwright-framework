
import { test, expect } from '@playwright/test';




test.skip('creer un nouveau panier', async ({ request }) => {

    //creer un panier et recuperer l'id 
  const res = await request.post('/carts')
  const cart = await res.json()
  const cartId = cart.id 
 

 const resp = await request.post(`/carts/${cartId}`,{
    params:{
    "product_id": "01M17RKGAZRFQ5SNFS27QWRYHX",
    "quantity": 3
    }
    
  })

  const bodyy = await resp.json()
  console.log(bodyy)

  const req = await request.get(`/carts/${cartId}`)
   const response = await req.json()
   console.log(response)

   //await expect(typeof response.cart_items.id).toBe('string')
   await expect(typeof response.cart_items[0].quantity).toBe('number')
   await expect(typeof response.cart_items[0].cart_id).toBe('string')
   await expect(typeof response.cart_items[0].product_id).toBe('string')


});

