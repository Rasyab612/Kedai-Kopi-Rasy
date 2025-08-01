 document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items: [
                { id: 1, name : 'Robusta Brazil', img: '1.jpg', price: 20000},
                { id: 2, name : 'Arabica Blend', img: '2.jpg', price: 25000},
                { id: 3, name : 'Primo Passo', img: '3.jpg', price: 30000},
                { id: 4, name : 'Aceh Gayo', img: '4.jpg', price: 35000},
                { id: 5, name : 'Sumatra Mendheling', img: '5.jpg', price: 40000},
            ],
           
        }));


        Alpine.store('cart', {
            items: [],
            total: 0,
            quantity: 0,
            add(newitem){
                // cek apakah ada barag yang sama di cart
                const cartitem = this.items.find((item) => item.id === newitem.id);


                    // jika belum ada/ cart kosong
                    if(!cartitem){
                        this.items.push({ ...newitem, quantity: 1, total: newitem.price});
                        this.quantity++;
                        this.total += newitem.price;
                        
                    }else {
                        // jika barang sudah ada, cek apakah barang beda atau sama dengan ada yang di cart
                            this.items = this.items.map((item) => {
                                // jika barang berbeda 
                                if(item.id !== newitem.id) {
                                    return item;
                                }else{
                                    // jika barang sudah ada, tambah quantity nya dan totalnya
                                    item.quantity++;
                                    item.total = item.price * item.quantity;
                                     this.quantity++;
                                    this.total += item.price;
                                    return item;

                                }
                            })
                        }
            },
            remove(id) {
                // abmbil item yang mau di remove berdasarkan id nya
                const cartitem = this.items.find((item) => item.id === id);

                // jika item lebih dari 1
                if(cartitem.quantity > 1) {
                    // telusuri 1 1 
                    this.items = this.items.map((item) => {
                        // jika bukan barang yang di klik 
                        if(item.id !== id) {
                            return item;
                        }else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    })
                }else if (cartitem.quantity === 1) {
                    // jika barangnya sisa satu 
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cartitem.price;
                }
            }
        });
    });


    // rupiah intl.numberformat
    const rupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };